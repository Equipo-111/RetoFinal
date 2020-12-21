<template>
  <v-container>
    <h1 class="titulo text-center">Nuestros servicios</h1>
    <p>
      En 3DMax tenemos todo lo que usted necesita para realizar sus impresiones 3D, contamos con equipo técnico y humano de alta calidad que aseguran calidad, rapidéz y excelente atención. 
    </p>
    <v-row class="justify-space-around servicios">
      <div class= "serviciosIndividuales">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="../assets/ServicioImpresion3d.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            Impresión 3D
          </v-card-title>

          <v-card-subtitle>
            Más de 500 impresiones por año.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                En 3DMax utilizamos materiales de alta calidad para la impresión de tus productos. Envíanos tu diseño con extensión STL y el material en el cual deseas imprimirlo (ABS, PLA, PETG, PC, HIPS, PVA, Nylon, TPU) así podremos  cotizar e imprimir el modelo.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
      <div class= "serviciosIndividuales">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="../assets/ServicioModelado3d.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            Modelado 3D
          </v-card-title>

          <v-card-subtitle>
            Más de 1.000 diseños realizados.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                Transformamos sus ideas en realidad, realizamos diseños 3D de sus productos según sus requerimientos y especificaciones. Utilizamos diferentes software de modelado como SketchUp, Autocad 3D, Solidworks, Catia y 3dMax.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
      <div class= "serviciosIndividuales">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="../assets/ServicioAsistenciaTecnica.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
              Asistencia técnica y venta de equipos
          </v-card-title>

          <v-card-subtitle>
            Equipos multimarca de alta calidad.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Ofrecemos reparación impresoras 3D, mantenimiento correctivo y preventivo a impresoras 3D multimarca. También brindamos asesoría virtual a través de video llamada o llamada telefónica para corregir fallos menores y resolver dudas  respecto a impresiones 3D.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </v-row>
     
  </v-container>
</template>
<script>
export default {
  name: "NuestroServicioMain",
  data: () => ({
    show: false,
    show1:false,
    show2:false
    
  }),
};
</script>

<style scoped>
.titulo {
  color: #004e63;
  margin-top: 20px;
  font-size: 40px;
}
.servicios{
    margin-top: 10px;
    margin-bottom: 45px;
}
h1 + p {
    font-size: 25px;
    text-align: center;
}

.serviciosIndividuales{
    padding-top: 20px;
}
</style>
