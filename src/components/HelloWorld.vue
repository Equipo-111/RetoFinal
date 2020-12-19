<template>
  <v-container class="">
    <v-toolbar dense flat>
      <v-row>
        <v-toolbar-title class="titulo col-4">3DMax</v-toolbar-title>
        
        <v-toolbar-items 
        flat 
        class="col-4 justify-space-between "
        >

        <router-link to="/"> 
          <v-btn text color="#004e63">
            Home
          </v-btn>
        </router-link>


          <router-link to="/servicios"> 
            <v-btn text color="#004e63" >
              Servicios
            </v-btn>
          </router-link>

          <v-btn text color="#004e63">
            Nosotros
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn
      class="ma-2"
      outlined
      color="indigo"
    >
      Login
    </v-btn>
      </v-row>
    </v-toolbar>
    
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

<style scoped>
.titulo {
  font-size: 35px;
}

</style>
