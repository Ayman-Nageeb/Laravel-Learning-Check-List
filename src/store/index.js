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
    beginnerReadTopics(state) {
      const topics = [];

      for (const topic of state.readTopics) {
        if (/@beginner$/.test(topic)) {
          topics.push(topic);
        }
      }
      return topics;
    },
    intermediateReadTopics(state) {
      const topics = [];

      for (const topic of state.readTopics) {
        if (/@intermediate$/.test(topic)) {
          topics.push(topic);
        }
      }
      return topics;
    },
    advanceReadTopics(state) {
      const topics = [];

      for (const topic of state.readTopics) {
        if (/@advance$/.test(topic)) {
          topics.push(topic);
        }
      }
      return topics;
    },
    bonusReadTopics(state) {
      const topics = [];

      for (const topic of state.readTopics) {
        if (/@bonus$/.test(topic)) {
          topics.push(topic);
        }
      }
      return topics;
    }
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
