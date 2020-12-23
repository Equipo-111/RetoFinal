<template>
<v-container>
<v-divider></v-divider>

    <footer> 
      <v-row >
        <div class="col-12 col-md-6">
          <v-row>

          <div class="footer col-6">
            <h4 class="ciudad">Medellín, Antioquia</h4><br>
            <p> 
                <v-icon>
                  mdi-crosshairs-gps
                </v-icon>
              <span> Carrera 84#42C La américa</span>
            </p>
            <p>  
              <v-icon>
                  mdi-email
                </v-icon>
                <span> test@gmail.com</span> </p>
            <p>  
              <v-icon>
                  mdi-phone
                </v-icon>
                <span>(+57) 3006724967 </span> 
            </p>
            
          </div>
          <div class="footer col-6">
            <h4 class="ciudad">Bogotà</h4><br>
            <p> 
                <v-icon>
                  mdi-crosshairs-gps
                </v-icon>
              <span> Carrera 119a - 45</span>
            </p>
            <p>  
              <v-icon>
                  mdi-email
                </v-icon>
                <span> test@gmail.com</span> </p>
            <p>  
              <v-icon>
                  mdi-phone
                </v-icon>
                <span>(+57) 3008129634  </span> 
            </p>
            
          </div>
         
          </v-row>
        </div>

        
        <div class="iconosSeccion col-lg-3 col-md-3 col-6">
          <div justify-space-between>
          <v-row>
          <div class="col-4 github">
             <a href="https://github.com/Equipo-111/RetoFinal" target="_blank">
            <v-icon
            x-large
            > mdi-github</v-icon></a>
          </div>
          <div class="col-4">
            <a href="https://instagram.com/3dmaxEmpresa" target="_blank">
            <v-icon
            x-large
            >mdi-instagram</v-icon></a>
          </div>
          <div class="col-4">
            <a href="https://twitter.com/3dmaxEmpresa" target="_blank">
            <v-icon
            x-large
            >mdi-twitter</v-icon></a>
          </div>
          </v-row>
          </div>
        </div>

        <div class="footerIntegrantes col-3">
           <v-row> 
           <div class="col-12">
          <h4 class="ciudad">GRUPO 111 MINTIC:</h4>
            </div>  
          <ul class="integrantes">
            <li>Liza Acevedo</li>
            <li>Carlos Obando</li>
            <li>Jorge Mora</li>
            <li>Omar Gonzalez</li>
          </ul>
           </v-row>
        </div>
        
        
      </v-row>
    </footer>
</v-container>
</template>

<script>
  export default {
    name: 'TheFooter',

    data: () => ({

    }),
  }
</script>

<style scoped>
.iconosSeccion {
  display: flex;
  align-items: center;
}
a{
  text-decoration: none;
}
.integrantes{
  font-size: 20px;
}
.ciudad{
  color: #004e63;
}

.footer, .footerIntegrantes{
  color: #394f68;
}

.footerIntegrantes{
  margin-top: 10px;
}
</style>