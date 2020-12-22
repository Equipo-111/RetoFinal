<template>
  <v-container>
    <h1 class="titulo text-center">¿Por qué trabajar con nosotros?</h1>
    <p>
      
     En 3DMax utilizamos los mejores insumos para la impresión de tus productos, además contamos con un equipo humano con amplia experiencia dispuesto a ayudarte. 
     Envíanos tu diseño con extensión STL y el material en el cual deseas imprimirlo (ABS, PL, PETG, PC, HIPS, PVA, Nylon o TPU) así podremos cotizar e imprimir el modelo.
      
      <v-row class="containerNosotros">
        <div class="col-6 col-md-3">
          <div class="nosotros">
            <div class="circle">1</div>
          </div>
          <div>
            <h4>Acercamiento</h4>
            <p class="hidden-md-and-down">
              Creamos las primeras conexiones entre la idea y el diseño
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
              Planeamos cada proyecto con miras a obtener prototipos rápidos y de bajo costo
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
              Nuestra experiencia en diferentes proyectos hace posible la creación de nuevos prototipos
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
              Ponemos al servicio de nuestros aliados, la capacidad de impresión, diseño y direccionamiento que necesitan
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
