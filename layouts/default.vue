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
            <v-tooltip right color="tooltip">  
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" fab icon>
                  <v-icon color="white">mdi-discord</v-icon>
                </v-btn>
              </template>            
              <span>Direct messages</span>
            </v-tooltip>
          </v-avatar>
        </v-list-item>

        <div class="px-5 mt-2">
          <v-divider></v-divider>
        </div>

        <div v-if="groups.length > 0">
          <v-list-item-group>
            <v-list-item v-for="(group, i) in groups" :key="i" class="mt-2">
              <v-avatar size="48" color="#36393F" class="pt-4">
                <v-tooltip right color="tooltip">
                  <template v-slot:activator="{ on }">
                    <p v-on="on">{{ group.serverName }}</p>
                  </template>
                  <span>Server</span>
                </v-tooltip>
              </v-avatar>
            </v-list-item>
          </v-list-item-group>
        </div>

        <v-list-item-group align="center" class="mt-2">
          <v-avatar size="48">
            <v-tooltip right color="tooltip">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="#36393F" fab elevation="0" @click="addServer">
                  <v-icon color="icons">mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Add a server</span>
            </v-tooltip>
          </v-avatar>

          <v-avatar size="48" class="mt-2">
            <v-tooltip right color="tooltip">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="#36393F" fab elevation="0">
                  <v-icon color="icons">mdi-compass</v-icon>
                </v-btn>
              </template>
              <span>Search public servers</span>
            </v-tooltip>
          </v-avatar>

          <div class="px-5 mt-2 mb-2">
            <v-divider></v-divider>
          </div>
  
          <v-avatar size="48">
            <v-tooltip right color="tooltip">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" fab color="#36393F">
                  <v-icon color="icons">mdi-tray-arrow-down</v-icon>
                </v-btn>
              </template>
              <span>Download apps</span>
            </v-tooltip>
          </v-avatar>
        </v-list-item-group>


      </v-navigation-drawer>
      
      <div class="drawer-sections">
        <v-toolbar
        height="48"
        flat
        class="sBackground py-2"
        elevation="1"
        >
          <v-btn x-small class="tBackground overflow-hidden mb-4 ml-4">Encontre uma conversa</v-btn>
        </v-toolbar>

        <div>
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon v-if="item.title == 'Snowsgiving'">
                  <v-icon color="#5865F2">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-icon v-else>
                  <v-icon color="#B2B4B6">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>

      
    </v-row>
    
  </v-navigation-drawer>
    <v-main class="mainBackground">
      <v-app-bar height="48" class="mainBackground" elevation="1">


        <v-spacer></v-spacer>

        <v-btn icon small>
          <v-icon color="#B2B4B6">mdi-message-plus</v-icon>
        </v-btn>
        
        <v-divider vertical class="mx-3"></v-divider>
        
        <v-btn icon small>
          <v-icon color="#B2B4B6">mdi-inbox</v-icon>
        </v-btn>
        
        <v-btn icon small class="ml-3 mr-1">
          <v-icon color="#B2B4B6">mdi-help-circle</v-icon>
        </v-btn>
      </v-app-bar>
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
      items: [
        { icon: 'mdi-account-multiple', title: 'Amigos'},
        { icon: 'mdi-snowflake', title: 'Snowsgiving'},
        { icon: 'mdi-tire', title: 'Nitro'},
      ],
      groups: [

      ]
    }
  },

  methods: {
    addServer() {
      const serverNameRef = []
      const number = this.groups.length + 1
      const serverNameRef2 = "Servidor de usuário".split(" ")
      for (const i of serverNameRef2) {
        serverNameRef.push(i.substr(0, 1))
      }
      const name = serverNameRef.join('')

      const server = {
        serverNumber: number,
        serverName: name,
        channels: [
          { chanel: 'General', type: 'Text', icon: 'mdi-pound'},
          { chanel: 'General', type: 'Voice', icon: 'mdi-volume-high'}
        ]
      }

      this.groups.push(server)
    }
  }
}
</script>

<style>
  .drawer-sections {
    width: 76%
  }
</style>
