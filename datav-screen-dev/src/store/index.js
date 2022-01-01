import { createStore } from "vuex";

export default createStore({
    state: {
        number: 100
    },
    mutations: {
        SET_NUMBER(state, value) {
            state.number = value
            console.log("commit", value)
        }
    },
    actions: {
        setNumber({ commit }, value) {
            setTimeout(() => {
                commit('SET_NUMBER', value)
                    // console.log("va")
            }, 4000)
        }
    },
    modules: {},
});