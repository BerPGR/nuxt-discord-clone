<template>
  <v-app dark>
    <v-navigation-drawer
    v-model="drawer"
    width="315"
    class="sBackground"
    permanent
    fixed
    app
    >

    <v-row class="fill-height" no-gutters>

      <v-navigation-drawer
      class="tBackground pt-3"
      permanent
      mini-variant
      mini-variant-width="74"
      >
        <v-list-item>
          <v-avatar size="50" color="#6370F4">
            <v-btn fab icon>
              <v-icon>mdi-discord</v-icon>
            </v-btn>
          </v-avatar>
        </v-list-item>

        <div class="px-5 mt-2 mb-2">
          <v-divider></v-divider>
        </div>

        <div v-if="groups.length > 0">
          <v-list-item-group v-model="selectedItem">
            <v-list-item></v-list-item>
          </v-list-item-group>
        </div>

        <v-list-item-group align="center">
          <v-avatar size="48">
            <v-btn color="#36393F" fab elevation="0">
              <v-icon color="icons">mdi-plus</v-icon>
            </v-btn>
          </v-avatar>

          <v-avatar size="48" class="mt-2">
            <v-btn color="#36393F" fab elevation="0">
              <v-icon color="icons">mdi-compass</v-icon>
            </v-btn>
          </v-avatar>

          <div class="px-5 mt-2 mb-2">
            <v-divider></v-divider>
          </div>
  
          <v-avatar size="48">
            <v-btn fab color="#36393F">
              <v-icon color="icons">mdi-tray-arrow-down</v-icon>
            </v-btn>
          </v-avatar>
        </v-list-item-group>


      </v-navigation-drawer>
      
      <v-toolbar
        height="48"
        flat
        class="sBackground py-2"
        elevation="1"
      >
        <v-btn x-small class="tBackground overflow-hidden mb-4 ml-4">Encontre uma conversa</v-btn>
      </v-toolbar>

    </v-row>
    </v-navigation-drawer>
    <v-main class="mainBackground">
      <v-app-bar height="48" class="mainBackground" elevation="1"></v-app-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      selectedItem: 0,
      groups: [

      ]
    }
  },
}
</script>
