import store from "../store";
import topicsList from "./list";

export default {
  index() {
    return topicsList;
  },
  sanitizeString(str) {
    return str.trim().replace(/\s+/g, "-").toLowerCase();
  },
  getTopicKey(topic) {
    const title = this.sanitizeString(topic.title);
    const level = this.sanitizeString(topic.level);
    return title + "@" + level;
  },
  isRead(topic) {
    const readTopics = store.getters["readTopics"];
    return readTopics.indexOf(this.getTopicKey(topic)) > -1;
  },
  setTopicAsRead(topic) {
    if (!this.isRead(topic)) {
      store.commit("setTopicAsRead", this.getTopicKey(topic));
    }
  },
  setTopicAsUnRead(topic) {
    if (this.isRead(topic)) {
      store.commit("setTopicAsUnRead", this.getTopicKey(topic));
    }
  },
  toggleReadState(topic) {
    if (this.isRead(topic)) {
      this.setTopicAsUnRead(topic);
    } else this.setTopicAsRead(topic);
  },
};
