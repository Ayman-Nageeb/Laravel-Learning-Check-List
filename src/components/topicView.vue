<template>
  <div>
    <v-dialog
      v-model="show"
      scrollable
      persistent
      max-width="960px"
      transition="dialog-transition"
      :fullscreen="$vuetify.breakpoint.mobile"
    >
      <v-card>
        <v-card-title>
          <v-btn icon large @click="show = false">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>

          <v-chip outlined class="px-4" :color="levelColor">
            <v-icon>mdi-signal-cellular-alt</v-icon>{{ topic.level }}</v-chip
          >
          <v-spacer></v-spacer>
          <v-simple-checkbox
            :color="isRead ? `success` : `error`"
            class="d-inline-block"
            :value="isRead"
            @click="toggleRead"
            :ripple="false"
          />
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-4">
          <p class="headline">
            {{ topic.title }}
          </p>
          <p class="subtitle">{{ topic.description }}</p>
          <div>
            <v-chip
              small
              v-for="(tag, index) of topic.tags"
              :key="index"
              class="mx-1"
            >
              {{ tag }}
            </v-chip>
          </div>
          <div class="my-6"></div>
          <div v-html="topicText"></div>
          <div v-if="hasSubtopics">
            <h1 class="my-6">Subtopics</h1>
            <topic-view
              :topic="subtopic"
              v-for="(subtopic, index) of topic.subtopics"
              :key="index"
            />
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card flat outlined class="my-3">
      <v-card-title>
        <div>
          <v-simple-checkbox
            :color="isRead ? `success` : ``"
            class="d-inline-block"
            :value="isRead"
            :ripple="false"
            @click="toggleRead"
          />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                <v-btn
                  v-on:click="show = true"
                  text
                  :color="progress == 100 ? `success` : ``"
                  class="text-none font-weight-bold"
                  link
                  >{{ topic.title }}</v-btn
                >
              </span>
            </template>
            <span class="caption text-truncate">{{ topic.description }}</span>
          </v-tooltip>
          <span :class="`${levelColor}--text caption mx-2`">
            ({{ topic.level }})
          </span>
        </div>
        <v-spacer></v-spacer>
        <span style="width: 250px" class="mx-2">
          <v-progress-linear
            style="border-radius: 40px"
            rounded
            shaped
            :value="progress"
            height="7"
            :color="progress == 100 ? `success` : `primary`"
          >
          </v-progress-linear>
        </span>
        <span
          :class="{
            caption: true,
            'font-weight-bold': true,
            'success--text': progress == 100,
          }"
        >
          {{ Math.ceil(progress) }}%
        </span>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
const marked = require("marked");
const hljs = require("highlightjs");
import topics from "../topics/index";

export default {
  name: "topic-view",
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isRead() {
      return topics.isRead(this.topic);
    },
    hasSubtopics() {
      return this.topic.subtopics && this.topic.subtopics.length > 0;
    },
    levelColor() {
      switch (this.topic.level.toLowerCase()) {
        case "beginner":
          return "info";

        case "intermediate":
          return "primary";
        case "advance":
          return "red";
        default:
          return "";
      }
    },
    topicText() {
      return marked.marked(this.topic.md, {
        highlight: function (code, lang) {
          if (hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        },
      });
    },
    progress() {
      const allSubtopics = topics.flattenWithSubtopics(this.topic);
      const readSubtopics = [];
      for (let readTopic of this.$store.getters["readTopics"]) {
        if (allSubtopics.includes(readTopic)) {
          readSubtopics.push(readTopic);
        }
      }
      const percent = (readSubtopics.length * 100) / allSubtopics.length;
      return percent;
    },
  },
  methods: {
    toggleRead() {
      topics.toggleReadState(this.topic);
    },
  },
  watch: {},
};
</script>

<style></style>
