<template>
  <v-layout>
    <v-row class="mt-16">
      <v-col>
        <v-card elevation="24" outlined color="#004e63">
          <v-card class="d-flex justify-center mt-4 pb-4" color="#004e63" dark>
            <v-icon x-large>mdi-login</v-icon><v-card-title class="text-h3">INICIA SESION</v-card-title>
          </v-card>
          <v-card-text class="mt-4">
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="login.email"
                label="E-mail"
                required
                filled
                rounded
                dense
                solo
              ></v-text-field>
              <v-text-field
                v-model="login.password"
                label="Password"
                type="password"
                required
                filled
                rounded
                dense
                solo
              ></v-text-field>

              <v-card class="d-flex justify-center mb-6" color="#004e63" flat dark>
                <v-btn
                  :disabled="!(this.login.password && this.login.email)"
                  color="success"
                  class="mr-4 justify-center"
                  @click="loginUser"
                >
                  Ingresar
                </v-btn>
              </v-card>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>



<script>
import axios from "axios";
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch("guardarToken", localStorage.getItem("token"));
      this.$router.push({ name: "Admin" });
    }
  },
  methods: {
    loginUser() {
      axios
        .post("http://localhost:3000/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn);
          this.$router.push({ name: "Admin" });
          swal("Login correcto", "Los datos son correctos", "success");
          console.log(data);
        })
        .catch((error) => {
          swal("Login incorrecto", "Los datos son incorrectos", "error");
          console.log(error);
          return error;
        });
    },
  },
};
</script>