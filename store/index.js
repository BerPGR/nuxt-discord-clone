export const state = () => ({
    servers: [],
    friends: [],
    layout: { 
        status: false,
        channels: []
    },
    appBarLayout : {
        status: false,
        choices: []
    }
})

export const mutations = {
    ADD_SERVER(state, group) {
        state.servers.push(group)
    },

    CHANGE_DRAWER_LAYOUT(state, design) {
        state.layout = {
            status: true,
            channels: design
        }
    },

    CHANGE_APP_BAR_LAYOUT(state) {
        state.appBarLayout = {
            status: true,
            choices: [
                "Available",
                "All",
                "Pending",
                "Blocked",
                "Add friend"
            ],
        }
    },

    DRAWER_FALSE(state) {
        state.layout = {
            status: false,
            channels: []
        },

        state.appBarLayout = {
            status: false,
            choices: [],
        }
    }
}