<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="categorias"
        sort-by="id"
        class="elevation-5"
        :loading="cargando"
        loading-text="Cargando... Por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Categorias</v-toolbar-title>
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
                  Agregar nueva categoria
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="10" md="10">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre de la categoria"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="10" md="10">
                        <v-textarea
                          v-model="editedItem.descripcion"
                          label="Descripcion"
                          auto-grow
                          no-resize
                          counter="250"
                        ></v-textarea>
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
                  >¿Confirmar que quieres cambiar el estado?</v-card-title
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
        text: "Categoria",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    categorias: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
    },
    defaultItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
    },
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
        .get("http://localhost:3000/api/categoria/list", {
          headers: {
            token: this.$store.state.token,
          },
        })
        .then((response) => {
          this.categorias = response.data;
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
      this.editedIndex = this.categorias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      if (this.editedItem.estado === 1) {
        //put
        axios
          .put(
            "http://localhost:3000/api/categoria/deactivate",
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.listar();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //post
        axios
          .put(
            "http://localhost:3000/api/categoria/activate",
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
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
          .put("http://localhost:3000/api/categoria/update", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
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
          .post("http://localhost:3000/api/categoria/add", {
            estado: 1,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
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
