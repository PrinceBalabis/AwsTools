export default {
    state: {
        main: 0
    },

    getters: {
    },

    mutations: {
        DECREMENT_MAIN_COUNTER(state) {
            state.main--
        },
        INCREMENT_MAIN_COUNTER(state) {
            state.main++
        }
    },

    actions: {
        async someAsyncTask({ commit }) {
            // do something async
            console.log("test");
            commit('INCREMENT_MAIN_COUNTER')
        }
    },

    namespaced: true
}