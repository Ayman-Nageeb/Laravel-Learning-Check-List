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
  flattenWithSubtopics(topic, level) {
    let flattened = [];
    if (level) {
      if (this.sanitizeString(topic.level) === this.sanitizeString(level)) {
        flattened.push(this.getTopicKey(topic));
      }
    } else {
      flattened.push(this.getTopicKey(topic));
    }
    if (topic.subtopics && topic.subtopics.length > 0) {
      for (let subTopic of topic.subtopics) {
        flattened = flattened.concat(this.flattenWithSubtopics(subTopic, level));
      }
    }
    let uniqueValues = [];
    for (let value of flattened) {
      if (!uniqueValues.includes(value)) {
        uniqueValues.push(value);
      }
    }

    return uniqueValues;
  },
  flattenTopics(level) {
    let flattenedTopics = [];
    for (let topic of topicsList) {
      flattenedTopics = flattenedTopics.concat(
        this.flattenWithSubtopics(topic, level)
      );
    }
    let uniqueValues = [];
    for (let value of flattenedTopics) {
      if (!uniqueValues.includes(value)) {
        uniqueValues.push(value);
      }
    }

    return uniqueValues;
  },
};
