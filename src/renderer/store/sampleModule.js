export default {
    state: {
        // state.sampleState
        sampleState: 0
    },

    getters: {
        // this.$store.getters["sampleModule/sampleGetter"]("sampleParameter");
        sampleGetter: (state) => (parameter) => {
            console.log("parameter->", parameter);
            return state.sampleState;
        }
    },

    mutations: {
        // commit('incrementSampleState', "someSampleParameter");
        incrementSampleState(state, parameter) {
            console.log("parameter->", parameter);
            state.sampleState++
        }
    },

    actions: {
        // this.$store.dispatch("sampleModule/sampleAction");
        async sampleAction({ state, commit, getters, dispatch }) {
            // do something async
            console.log("sampleAction running");
            commit('incrementSampleState', "someSampleParameter");
        }
    },

    namespaced: true
}