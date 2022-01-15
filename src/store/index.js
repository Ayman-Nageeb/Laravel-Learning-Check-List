import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import mainTopics from "../topics/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topics: mainTopics,
  },
  mutations: {},
  getters: {
    topics(state) {
      return state.topics;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
