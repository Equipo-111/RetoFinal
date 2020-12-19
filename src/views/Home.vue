<template>
  <div class="home">
    <v-main> 

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <home-presentacion/>
    
   
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomePresentacion from '../components/home/HomePresentacion.vue'
import SeccionPresentacion from '../components/SeccionPresentacion.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    SeccionPresentacion,
    HomePresentacion
   
  }
}
</script>
