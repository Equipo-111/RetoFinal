<template>
  <v-container>
    <h1 class="titulo text-center">¿Por qué trabajar con nosotros?</h1>
    <p>
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis
      nam commodi aperiam natus nostrum ex tempora dignissimos culpa voluptates?
      Voluptate doloremque architecto delectus! Numquam eaque accusantium quas
      blanditiis debitis. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Mollitia nulla iure, inventore tempora consectetur hic! Cumque
      expedita ullam mollitia aspernatur dolorem amet hic possimus, reiciendis
      placeat exercitationem. Dolor, dicta velit!
      <v-row class="containerNosotros">
        <div class="col-6 col-md-3">
          <div class="nosotros">
            <div class="circle">1</div>
          </div>
          <div>
            <h4>Acercamiento</h4>
            <p class="hidden-md-and-down">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              aut illo, nostrum possimus corrupti voluptas distinctio id
              excepturi veritatis consequuntur expedita placeat! Voluptas, vero.
              Accusantium iusto quas odio inventore dolore.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="nosotros">
            <div class="circle">2</div>
          </div>
          <div>
            <h4>Direccionamiento</h4>
            <p class="hidden-md-and-down">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              aut illo, nostrum possimus corrupti voluptas distinctio id
              excepturi veritatis consequuntur expedita placeat! Voluptas, vero.
              Accusantium iusto quas odio inventore dolore.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="nosotros">
            <div class="circle">3</div>
          </div>
          <div>
            <h4>Prototipado</h4>
            <p class="hidden-md-and-down">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              aut illo, nostrum possimus corrupti voluptas distinctio id
              excepturi veritatis consequuntur expedita placeat! Voluptas, vero.
              Accusantium iusto quas odio inventore dolore.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="nosotros">
            <div class="circle">4</div>
          </div>
          <div>
            <h4>Solución</h4>
            <p class="hidden-md-and-down">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              aut illo, nostrum possimus corrupti voluptas distinctio id
              excepturi veritatis consequuntur expedita placeat! Voluptas, vero.
              Accusantium iusto quas odio inventore dolore.
            </p>
          </div>
        </div>
        
      </v-row>
    </p>
  </v-container>
</template>

<script>
export default {
  name: "TrabajarConNosotros",
};
</script>

<style scoped>
.titulo {
  margin-top: 20px;
  color: #004e63;
  font-size: 40px;
}
h1 + p {
  font-size: 25px;
  text-align: center;
}
h4+p {
    font-size:20px;
}
.circle {
  background: #edf0f4;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.8;
  color: #9fafc1;

  
}

.containerNosotros {
  justify-content: space-around;
  margin-top: 50px;
}
.nosotros {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #798da3;
}
</style>
