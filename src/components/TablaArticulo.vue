<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="articulos"
        sort-by="id"
        class="elevation-5"
        :loading="cargando"
        loading-text ="Cargando... Por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Articulos</v-toolbar-title>
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
                  Agregar nuevo articulo
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
                          label="Nombre del articulo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.codigo"
                          label="Codigo del articulo"
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
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.precio_venta"
                          label="Precio venta"
                          prefix="$"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.stock"
                          label="Stock"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.categoria"
                          :items="categoriasNombres"
                          label="Categoria"
                          required
                        ></v-select>
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
                  >¿Quieres cambiar el estado?</v-card-title
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
        text: "Articulo",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Codigo", value: "codigo" },
      { text: "Descripcion", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Precio de venta", value: "precio_venta" },
      { text: "Stock", value: "stock" },
      { text: "Categoria", value: "categoria" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    articulos: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      codigo: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
      precio_venta: 0,
      stock: 0,
      categoriaId: 1,
      categoria: "",
    },
    defaultItem: {
      id: 0,
      codigo: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
      precio_venta: 0,
      stock: 0,
      categoriaId: 1,
      categoria: "",
    },
    categorias: [],
    categoriasNombres: [],
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
    this.listarCategoria();
    this.listar();
  },

  methods: {
    listar() {
      axios
        .get("http://localhost:3000/api/articulo/list",
            {
              headers: {
                token: this.$store.state.token,
              },
            })
        .then((response) => {
          this.articulos = response.data;
          this.cargando = false;
          for (let value of this.articulos){
            for(let cate of this.categorias){
              if(cate.id === value.categoriaId){
                value.categoria = cate.nombre;
                break;
              }
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarCategoria() {
      axios
        .get("http://localhost:3000/api/categoria/list",
            {
              headers: {
                token: this.$store.state.token,
              },
            })
        .then((response) => {
            this.categorias = response.data;
            for (let value of response.data){
              this.categoriasNombres.push(value.nombre);
            }
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
      this.editedIndex = this.articulos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      if (this.editedItem.estado === 1) {
        //put
        axios
          .put("http://localhost:3000/api/articulo/deactivate", {
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
          .put("http://localhost:3000/api/articulo/activate", {
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
      for(let value of this.categorias){
        if(value.nombre === this.editedItem.categoria){
          console.log(this.editedItem.categoriaId);
          this.editedItem.categoriaId = value.id;
          console.log(this.editedItem.categoriaId);
          console.log(value.id);
          break;
        }
      };

      if (this.editedIndex > -1) {
        //put
        axios
          .put("http://localhost:3000/api/articulo/update", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            precio_venta: this.editedItem.precio_venta,
            stock: this.editedItem.stock,
            categoriaId: this.editedItem.categoriaId,
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
          .post("http://localhost:3000/api/articulo/add", {
            codigo: this.editedItem.codigo,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            estado: 1,
            precio_venta: this.editedItem.precio_venta,
            stock: this.editedItem.stock,
            categoriaId: this.editedItem.categoriaId,
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