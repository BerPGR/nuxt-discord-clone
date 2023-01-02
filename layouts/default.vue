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
      height="100vh"
      permanent
      mini-variant
      mini-variant-width="74"
      >
        <v-list-item class="pt-3" @click="$store.commit('DRAWER_FALSE')">
          <v-avatar size="50" color="#6370F4">
            <v-tooltip right color="tooltip">  
              <template #activator="{ on }">
                <v-btn fab icon to="/" v-on="on">
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

        <div v-if="$store.state.servers.length > 0">
          <v-list-item-group>
            <v-list-item v-for="(server, i) in $store.state.servers" :key="i" class="mt-2" @click="handleServer(server)">
              <v-tooltip right color="tooltip">
                <template #activator="{ on }">
                  <v-avatar size="48" color="#36393F" class="pt-4" v-on="on">
                    <p>{{ server.serverAcronym }}</p>
                  </v-avatar>
                </template>
                <span>{{ server.serverName }} {{ server.serverNumber }}</span>
              </v-tooltip>
            </v-list-item>
          </v-list-item-group>
        </div>

        <v-list-item-group align="center" class="mt-2">
          <v-avatar size="48">
            <v-tooltip right color="tooltip">
              <template #activator="{ on }">
                <v-btn color="#36393F" fab elevation="0" @click="addServer" v-on="on">
                  <v-icon color="icons">mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Add a server</span>
            </v-tooltip>
          </v-avatar>

          <v-avatar size="48" class="mt-2">
            <v-tooltip right color="tooltip">
              <template #activator="{ on }">
                <v-btn color="#36393F" fab elevation="0" v-on="on">
                  <v-icon color="icons">mdi-compass</v-icon>
                </v-btn>
              </template>
              <span>Search public servers</span>
            </v-tooltip>
          </v-avatar>

          <div class="px-5 mt-2 mb-2">
            <v-divider></v-divider>
          </div>
  
          <v-avatar size="48" class="mb-2">
            <v-tooltip right color="tooltip">
              <template #activator="{ on }">
                <v-btn fab color="#36393F" v-on="on">
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
          <v-btn small class="tBackground overflow-hidden mb-4 ml-3 px-12">Find a chat!</v-btn>
        </v-toolbar>

        <div v-if="$store.state.layout.status === false">
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem">
              <v-list-item 
                  v-for="(item, i) in items" 
                  :key="i" 
                  :href="item.title == 'Snowsgiving' || item.title == 'Nitro' ? item.route : ''"
                  :to="item.title == 'Friends' ? item.route : ''"
                >
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
        <div v-else>
          
        </div>
      </div>

      
    </v-row>
    
  </v-navigation-drawer>
    <v-main class="mainBackground">
      <v-app-bar app height="48" class="mainBackground" elevation="1">


        <v-spacer></v-spacer>

        <v-badge
          :content="messages > 10 ? '10+' : messages"
          :value="messages"
          color="#5865F2"
          overlap
        >
        <v-tooltip bottom color="tooltip">
          <template #activator="{ on }">
            <v-btn icon small @click="messages++" v-on="on">
              <v-icon color="#B2B4B6">mdi-message-plus</v-icon>
            </v-btn>
          </template>
          <span>New private group</span>
        </v-tooltip>
        </v-badge>
        
        <v-divider vertical class="mx-3"></v-divider>
      
        <v-tooltip bottom color="tooltip">
          <template #activator="{ on }">
            <v-btn icon small v-on="on">
              <v-icon color="#B2B4B6">mdi-inbox</v-icon>
            </v-btn>
          </template>
          <span>Inbox</span>
        </v-tooltip>
        
        <v-tooltip bottom color="tooltip">
          <template #activator="{ on }">
            <v-btn icon small class="ml-3 mr-1" v-on="on" @click="messages = 0">
              <v-icon color="#B2B4B6">mdi-help-circle</v-icon>
            </v-btn>
          </template>
          <span>Help</span>
        </v-tooltip>
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
      messages: 0,
      drawer: true,
      selectedItem: 0,
      items: [
        { icon: 'mdi-account-multiple', title: 'Friends', route: '/friends'},
        { icon: 'mdi-snowflake', title: 'Snowsgiving', route: 'https://discord.com/blog/snowsgiving-2022'},
        { icon: 'mdi-tire', title: 'Nitro', route: 'https://discord.com/guild-discovery'},
      ],
      layout: {}
    }
  },

  computed: {
    getLayout() {
      return this.$store.state.layout
    },
    setLayout(v) {
      this.layout = v
    }
  },

  methods: {
    addServer() {
      const serverNameRef = []
      const number = this.$store.state.servers.length + 1
      const serverNameRef2 = "User's Test Server".split(" ")
      for (const i of serverNameRef2) {
        serverNameRef.push(i.substr(0, 1))
      }
      const name = serverNameRef2.join(' ')
      const acronym = serverNameRef.join('')

      const group = {
        serverNumber: number,
        serverAcronym: acronym,
        serverName: name,
        channels: [
          { chanel: 'General', type: 'Text', icon: 'mdi-pound'},
          { chanel: 'General', type: 'Voice', icon: 'mdi-volume-high'}
        ]
      }

      this.$store.commit('ADD_SERVER', group)
    },

    handleServer(group) {
      this.$store.commit('CHANGE_DRAWER_LAYOUT', group.channels)
      this.$router.push({name: 'server', params: { gp: group }})
    }
  }
}
</script>

<style lang="scss">
  .drawer-sections {
    width: 76%
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
