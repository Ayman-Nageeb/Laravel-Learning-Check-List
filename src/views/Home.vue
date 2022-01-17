<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <div class="d-flex justify-space-around mt-6">
          <v-img
            max-width="50px"
            src="https://laravel.com/img/logomark.min.svg"
          ></v-img>
        </div>
        <h2 class="display-1 text-center my-4">Laravel Learning Checklist</h2>
        <ProgressView />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <topic-view
            :topic="topic"
            v-for="(topic, index) of topics"
            :key="index"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProgressView from '../components/Progress.vue';
import topicView from "../components/topicView.vue";
export default {
  components: { topicView, ProgressView },
  name: "Home",
  data() {
    return { topics: [] };
  },
  computed: {},
  created() {
    this.topics = this.$store.getters["topics"];
  },
  methods: {},
  watch: {},
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
