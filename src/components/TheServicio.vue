<template>
<v-container class="contenedor">
    <!-- Este es el inicio del Servicios -->
    <v-row>
      <v-col class="col-12 col-sm-7 align-self-center ">
        <h1 class="header-1">Servicios Max</h1>
        <br>
        <p class="paragraph-1">Descubre los servicios prestados por nuestra compañía</p>
      </v-col>
      <v-col class="col-12 col-sm-5">
        <v-img
          :src="require('../assets/ServiciosMain.jpg')"
          class="my-3"
          contain
          height="450px"
        />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    
    <!-- Este es el inicio del primer servicio -->
    <v-row class="justify-space-around" id="PrimerServicio">
      <v-col class="col-12 col-sm-5 align-self-center order-last order-sm-first">
        <v-img
          :src="require('../assets/ImpresorasCatalogo.jpg')"
          class="my-3"
          contain
          height="350px"
        />
      </v-col>
      <v-col class="col-12 col-sm-5 align-self-center" >
        <h3 class="header-2">Impresoras</h3>
        <br>
        <p class="paragraph-2" max-width="300px">Haz realidad tus diseños 3D, adquiriendo una impresora de nuestro catálogo</p>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img class="" src="../assets/Recurso 1-100.jpg" alt="" height="65px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Imprime tus proyectos</h4>
            <p class="paragraph-3">Con nuestras impresoras de última tecnología podrás hacer tus diseños realidad</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img src="../assets/Recurso 2-100.jpg" alt="" height="65px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Crea tus prototipos</h4>
            <p class="paragraph-3">Impresoras de bajo consumo y costo te permite crear prototipos adsequibles y variados</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Este es el inicio del segundo servicio -->
    <v-row class="justify-space-around">
      <v-col class="col-12 col-sm-5 align-self-center">
        <h3 class="header-2">Modelado</h3>
        <br>
        <p class="paragraph-2">Modela con nuestros aplicativos dinámicos y potentes</p>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img src="../assets/Recurso 3-100.jpg" alt="" height="65px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Diseña y modela</h4>
            <p class="paragraph-3">Crea piezas, moldea el futuro y </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img src="../assets/Recurso 4-100.jpg" alt="" height="65px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Crea sin limites</h4>
            <p class="paragraph-3">Pon tus habilidades al servicio de la impresión 3D y crea objetos jamas imaginados</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-12 col-sm-5 align-self-center">
        <v-img
          :src="require('../assets/ModeladoImpresora.jpg')"
          class="my-3"
          contain
          height="350px"
        />
      </v-col>
    </v-row>

    <!-- Este es el inicio del tercer servicio -->
    <v-row class="justify-space-around">
      <v-col class="col-12 col-sm-5 align-self-center order-last order-sm-first">
        <v-img
          :src="require('../assets/ServicioTecnico.jpg')"
          class="my-3"
          contain
          height="350px"
        />
      </v-col>
      <v-col class="col-12 col-sm-5 align-self-center">
        <h3 class="header-2">Asistencia</h3>
        <br>
        <p class="paragraph-2">No te quedes atrás por ninguna falla, con nosotros tendrás asistencia 24/7</p>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img src="../assets/Recurso 5-100.jpg" alt="" height="60px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Soporte técnico</h4>
            <p class="paragraph-3">Brindamos soporte técnico a todas las impresoras que se encuentran en nuestro catalogo</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-3 ImageContainer">
            <img src="../assets/Recurso 6-100.jpg" alt="" height="60px">
          </v-col>
          <v-col class="col-9">
            <h4 class="subtitle">Capacitacion</h4>
            <p class="paragraph-3">Capacitate con nuestro equipo de tutores y aliados, aprende de nuestra experiencia y se parte de nuestro equipo</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TheServices',

    data: () => ({

    }),
  }
</script>
<style>
.header-1 {
    color: #004E63;
    font-weight: 700;
    font-size: 40px;
    text-align: left;
}
.header-2 {
    color: #004E63;
    font-weight: 700;
    font-size: 33px;
    text-align: left;
}
.paragraph-1 {

	color: #798da3;
	font-weight: 400;
	font-size: 30px;
	text-align: left;
}
.paragraph-2 {

	color: #798da3;
	font-weight: 400;
	font-size: 24px;
	text-align: left;
}
.paragraph-3 {

	color: #798da3;
	font-weight: 400;
	font-size: 19px;
	text-align: left;
}
.subtitle{
  color: #004E63;
  font-size: 24px;
}
.ImageContainer{
  
  
  display: flex;
  align-items: center;
  justify-content: center;
}
#PrimerServicio{
  

}
.contenedor {
  margin-top: 40px;
  margin-bottom: 35px;
}
</style>