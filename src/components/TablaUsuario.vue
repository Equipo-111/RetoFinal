<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="usuarios"
        sort-by="id"
        class="elevation-5"
        :loading="cargando"
        loading-text ="Cargando... Por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Usuarios</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Agregar un nuevo Usuario
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="5">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre del usuario"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        <v-select
                          v-model="editedItem.rol"
                          :items="roles"
                          label="Rol"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="10">
                        <v-text-field
                          v-show=!editedItem.nombre
                          v-model="editedItem.email"
                          label="Correo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="10">
                        <v-text-field
                          v-show=!editedItem.nombre
                          v-model="editedItem.password"
                          label="Contraseña"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required]"
                          :type="show1 ? 'text' : 'password'"
                          class="input-group--focused"
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >¿Confirmar cambiar el estado?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon medium @click="deleteItem(item)">
            <template v-if="item.estado"> mdi-toggle-switch </template>
            <template v-else> mdi-toggle-switch-off-outline </template>
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="listar"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Usuario",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Correo", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,

    show1: false,
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
    },

    editedItem: {
      id: 0,
      nombre: "",
      rol: "",
      estado: 0,
      correo: "",
      password: "",
    },
    defaultItem: {
      id: 0,
      nombre: "",
      rol: "",
      estado: 0,
      correo: "",
      password: "",
    },
    roles: ["Administracion", "Vendedor", "Almacenero"],
    cargando: true,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo item" : "Editando item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.listar();
  },

  methods: {
    listar() {
      axios
        .get("http://localhost:3000/api/usuario/listar",
            {
              headers: {
                token: this.$store.state.token,
              },
            })
        .then((response) => {
          this.usuarios = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      if (this.editedItem.estado === 1) {
        //put
        axios
          .put("http://localhost:3000/api/usuario/deactivate", {
            id: this.editedItem.id,
          },
            {
              headers: {
                token: this.$store.state.token,
              },
            })
          .then((response) => {
            this.listar();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //post
        axios
          .put("http://localhost:3000/api/usuario/activate", {
            id: this.editedItem.id,
          },
            {
              headers: {
                token: this.$store.state.token,
              },
            })
          .then((response) => {
            this.listar();
          })
          .catch((error) => {
            return error;
          });
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //put
        axios
          .put("http://localhost:3000/api/usuario/update", {
            id: this.editedItem.id,
            email: this.editedItem.email,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
          },
            {
              headers: {
                token: this.$store.state.token,
              },
            })
          .then((response) => {
            this.listar();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //post
        axios
          .post("http://localhost:3000/api/usuario/register", {
            estado: 1,
            id: this.editedItem.id,
            email: this.editedItem.email,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
            password: this.editedItem.password,
          },
            {
              headers: {
                token: this.$store.state.token,
              },
            })
          .then((response) => {
            this.listar();
          })
          .catch((error) => {
            return error;
          });
      }
      this.close();
    },
  },
};
</script>
