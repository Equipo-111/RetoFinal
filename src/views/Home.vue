<template>
  <div class="home">
    <v-main> 

    
    
    <home-presentacion/>
    <nuestro-servicio-main/>
    <trabajar-con-nosotros/>
    
   
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HomePresentacion from '../components/home/HomePresentacion.vue';
import TrabajarConNosotros from '../components/TrabajarConNosotros.vue';
import NuestroServicioMain from '../components/NuestroServicioMain.vue';




export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomePresentacion,
    NuestroServicioMain,
    TrabajarConNosotros
  }
}
</script>

<style scoped>
.titulo {
  font-size: 35px;
}
</style>
