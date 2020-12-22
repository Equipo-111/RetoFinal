<template>
  <v-layout>
    <v-row>
      <v-col>
        <v-card-title> Login </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="login.email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="login.password"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-btn
              :disabled="!(this.login.password && this.login.email)"
              color="success"
              class="mr-4"
              block
              @click="loginUser"
            >
              Ingresar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
  </v-layout>
</template>



<script>
import axios from "axios";
import swal from "sweetalert";
import VueJwtDecode from 'vue-jwt-decode';

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
    if(localStorage.getItem('token')){
      this.$store.dispatch('guardarToken', localStorage.getItem('token'));
      this.$router.push({name: 'Admin'});
    }
  },
  methods: {
    loginUser() {
      axios.post('http://localhost:3000/api/usuario/login', this.login)
      .then(response =>{
        return response.data;
      })
      .then(data =>{
        this.$store.dispatch('guardarToken', data.tokenReturn);
        this.$router.push({name: "Admin"});
        swal("Login correcto", "Los datos son correctos", "success");
        console.log(data);
      })
      .catch(error =>{
        swal("Login incorrecto", "Los datos son incorrectos", "error");
        console.log(error);
        return error;
      })},
  },
};
</script>