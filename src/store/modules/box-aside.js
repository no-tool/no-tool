const state = () => ({
    drawer: null
})

const getters = {
}

const actions = {
}

const mutations = {
    TOGGLE_DRAWER(state) {
        state.drawer = !state.drawer
    },
    UPDATE_DRAWER(state, value) {
        state.drawer = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}