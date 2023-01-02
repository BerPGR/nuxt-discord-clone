export const state = () => ({
    servers: [],
})

export const mutations = {
    ADD_SERVER(state, group) {
        state.servers.push(group)
    }
}