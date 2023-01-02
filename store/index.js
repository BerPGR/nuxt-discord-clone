export const state = () => ({
    servers: [],
    layout: { 
        status: false,
        channels: []
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

    DRAWER_FALSE(state) {
        state.layout.status = false
    }
}