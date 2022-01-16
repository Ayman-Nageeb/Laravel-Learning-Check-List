import Vue from "vue";
import Vuex from "vuex";
import topicsList from '../topics/list';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topics: topicsList,
    readTopics: [],
  },
  getters: {
    topics(state) {
      return state.topics;
    },
    readTopics(state) {
      return state.readTopics;
    },
  },
  mutations: {
    setTopicAsRead(state, title) {
      state.readTopics.push(title);
    },
    setTopicAsUnRead(state, title) {
      const readTopics = state.readTopics;
      readTopics.splice(readTopics.indexOf(title), 1);
      state.readTopics = readTopics;
    },
  },
  plugins: [createPersistedState()],
});
