<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <topic-view
            :topic="topic"
            v-for="(topic, index) of topics"
            :key="index"
            @setTopicReadStatus="updateTopics"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {  } from "";
import topicView from "../components/topicView.vue";
export default {
  components: { topicView },
  name: "Home",
  data() {
    return { topics: {} };
  },
  computed: {},
  created() {
    this.topics = this.$store.getters["topics"];
  },
  methods: {
    updateTopics() {
      console.log("update signal");
    },
  },
  watch: {
    
  },
};
</script>

<style>
.topic {
  margin: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
</style>
