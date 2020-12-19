<template>
  <v-app>
    <div class="container">

    <v-main>
      <HelloWorld/>
      <v-divider></v-divider>
      <seccion-presentacion/>
      
      <v-divider></v-divider>
      <nuestro-servicio-main/>
      <v-divider></v-divider>
      <trabajar-con-nosotros/>
    </v-main>
    </div>
   

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HomePresentacion from './components/home/HomePresentacion.vue';
import NuestroServicioMain from './components/NuestroServicioMain.vue';
import SeccionPresentacion from './components/SeccionPresentacion';
import TrabajarConNosotros from './components/TrabajarConNosotros';


export default {
  name: 'App',

  components: {
    HelloWorld,
    SeccionPresentacion,
    NuestroServicioMain,
    TrabajarConNosotros,
    HomePresentacion
    
  },

  data: () => ({
    //
 
    NuestroServicioMain }),
};
</script>
