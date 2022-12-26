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
          class="tBackground"
          permanent
          mini-variant
          mini-variant-width="74"
        >

        </v-navigation-drawer>
      </v-row>
    </v-navigation-drawer>
    <v-main class="mainBackground">
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
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
