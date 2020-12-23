<template>
  <v-container>
    <section id="title" class="mt-16">
      <h2 class="titulo text-center">Quienes Somos.</h2>

      <div class="container mt-8">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img
                src="../assets/fotoincog.jpg"
                class="card-img-top"
                alt="Liza"
              />
              <div class="card-body">
                <div class="badges mb-2">
                  <span class="badge badge-warning">JavaScript</span>
                  <span class="badge badge-info">Vue.js</span>
                </div>
                <h5 class="card-title">Liza Acevedo</h5>

                <p class="paragraph-1 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam aliquam asperiores veniam consequuntur voluptatum
                  laudantium amet eius mollitia sint exercitationem.
                </p>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/caoc.jpg" class="card-img-top" alt="Carlos" />
              <div class="card-body">
                <div class="badges mb-2">
                  <span class="badge badge-warning">JavaScript</span>
                  <span class="badge badge-info">Vue.js</span>
                </div>
                <h5 class="card-title">Carlos Obando</h5>
                <p class="paragraph-1 text-justify">
                  Profesional con formación en técnico profesional en
                  computación enfocada al desarrollo de software con soporte
                  técnico a sistemas informáticos. Persona ética, empática,
                  perspicaz, adaptable al cambio con alta tolerancia al estrés y
                  la presión.
                </p>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img
                src="../assets/fotoincog2.jpg"
                class="card-img-top"
                alt="Omar"
              />
              <div class="card-body">
                <div class="badges mb-2">
                  <span class="badge badge-warning">JavaScript</span>
                  <span class="badge badge-info">Vue.js</span>
                </div>
                <h5 class="card-title">Omar Gonzalez</h5>
                <p class="paragraph-1 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam aliquam asperiores veniam consequuntur voluptatum
                  laudantium amet eius mollitia sint exercitationem.
                </p>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <img src="../assets/jama.jpg" class="card-img-top" alt="Andrés" />
              <div class="card-body">
                <div class="badges mb-2">
                  <span class="badge badge-warning">JavaScript</span>
                  <span class="badge badge-info">Vue.js</span>
                </div>
                <h5 class="card-title mb-0">Jorge Mora</h5>
                <p class="paragraph-1 text-justify">
                  Empresario, Ingeniero Industrial, Especialista en Seguridad y
                  Salud en el Trabajo, con experiencia en asesoria y consultoria
                  en Gestión empresarial. Iniciando en el mundo de la
                  programación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="title" class="mt-4">
      <h2 class="titulo text-center">Casos de Éxito.</h2>

      <div class="card border-primary mb-3">
        <v-row class="justify-space-around">
          <v-col class="col-12 col-lg-6 pt-2 pb-2 align-self-center">
            <h3 class="header-2">La mano biónica de bajo coste, BionicHand</h3>
            <p class="paragraph-1 text-justify">
              Este proyecto se creó de la mano de Nicolas Huchet en el año
              2.012, que tras años de duro trabajo desarrollando el proyecto
              utilizando herramientas libres, tanto de hardware como de software
              incluyendo la impresión 3D, dio a luz a BionicHand. <br /><br />

              Tras años de buscar prótesis funcionales sin éxito, conoció el
              proyecto del robot Inmoov (de origen francés) que lo motivó y
              ayudó para el desarrollo de su Biónico Hand. Esta prótesis es de
              tecnología mioeléctrica permite que sus usuarios hagan 4
              movimientos básicos de la mano
            </p>
            <a href="https://bionico.org/" class="btn btn-outline-light"
              >Conoce más</a
            >
          </v-col>
          <v-col class="col-12 col-sm-5 align-self-center">
            <v-img
              :src="require('../assets/BionicHand.jpg')"
              class="my-3"
              contain
              height="350px"
            />
          </v-col>
        </v-row>
      </div>

      <div class="card border-primary mb-3">
        <v-row class="justify-space-around">
          <v-col class="col-12 col-sm-5 align-self-center">
            <v-img
              :src="require('../assets/DeniseSchindler.jpg')"
              class="my-3"
              contain
              height="350px"
            />
          </v-col>
          <v-col class="col-12 col-lg-6 pt-2 pb-2 align-self-center">
            <h3 class="header-2">
              Prótesis de Pierna, la más compleja de todas
            </h3>
            <p class="paragraph-1 text-justify">
              Las prótesis de pierna son las más complejas de hacer con
              tecnologías libres por una sencilla razón: Es la parte del cuerpo
              que más peso lleva (contando con el pie, claro). <br /><br />

              Empresas como Unyq tuvieron en cuenta esto y a través de la
              impresión 3D empezó a desarrollar modelos de piernas (también de
              brazos) totalmente personalizables por el usuario desde el modelo,
              color, material y obviamente la adaptación total a la anatomía del
              sujeto o el uso que se vaya a dar de la misma. <br /><br />

              Un ejemplo de este tipo de prótesis puede ser la que llevó la
              ciclista de origen alemán Denise Schindler, la cual logró ganar la
              medalla de plata en los juegos paralímpicos de Rio de Janeiro.
              Dicha prótesis fue creada en conjunto con la empresa Autodesk que
              se encargó de prácticamente todo el desarrollo.
            </p>
            <a href="https://www.rediff.com/sports/report/german-cyclist-looks-to-race-with-3d-printed-prosthesis-in-rio-pix/20160505.htm" class="btn btn-outline-light"
              >Conoce más</a
            >
          </v-col>
        </v-row>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "TheNosotros",

  data: () => ({}),
};
</script>

<style scoped>
.titulo {
  color: #004e63;
  margin-top: 20px;
  font-size: 40px;
}
#success img {
  max-height: 30vh;
  object-fit: scale-down;
}

#title img {
  max-height: 30vh;
  object-fit: scale-down;
}
.paragraph-1 {
  color: #798da3;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
}

.paragraph-2 {
  color: #798da3;
  font-weight: 400;
  font-size: 24px;
  text-align: left;
}

.header-2 {
  color: #004e63;
  font-weight: 700;
  font-size: 33px;
  text-align: left;
}
</style>