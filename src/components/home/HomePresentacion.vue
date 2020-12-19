<template>
  <v-container class="seccionPresentacion">
    <v-row>
      <div class="col-6">
        <h1 class="tituloPresentacion">3D Max desde el home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolore doloribus, nemo quo accusamus nam deserunt quidem minus eaque,
          facere saepe ipsum alias numquam nisi officia? Voluptate quia eligendi
          fugit?
        </p>
        <v-row class="justify-lg-start justify-md-space-between">
          <div class="col-lg-12">
            <div class="">
              <v-btn rounded color="#004e63" dark>
                impresoras 3D
              </v-btn>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="">
              <v-btn rounded color="white" light >
                Aprende mas
              </v-btn>
            </div>
          </div>
          
        </v-row>
      </div>
      <div class="col-6 text-center">
        <img src="" alt="impresora" height="400px" />
      </div>
    </v-row>
   
  </v-container>
</template>

<script>
export default {
  name: "HomePresentacion",
};
</script>

<style scoped>
.seccionPresentacion {
  margin-top: 50px;
  padding-left: 25px;
}

.tituloPresentacion {
  margin-bottom: 50px;
}
h1 + p {
    font-size: 25px;
}
</style>
