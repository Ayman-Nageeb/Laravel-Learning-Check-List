<template>
  <div>
    <v-dialog
      v-model="show"
      scrollable
      persistent
      max-width="960px"
      transition="dialog-transition"
      fullscreen
    >
      <v-card>
        <v-card-title>
          <v-simple-checkbox
            :color="isRead ? `success` : `error`"
            class="d-inline-block"
            :value="isRead"
            @click="toggleRead"
            :ripple="false"
          />
          <span class="mx-2"></span>
          <v-chip outlined class="px-4" :color="levelColor">
            <v-icon>mdi-signal-cellular-alt</v-icon>{{ topic.level }}</v-chip
          >
          <v-spacer></v-spacer>
          <v-btn icon color="error" @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
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
    <div class="topic d-flex justify-space-between align-center">
      <div>
        <v-simple-checkbox
          :color="isRead ? `success` : `error`"
          class="d-inline-block"
          :value="isRead"
          :ripple="false"
        />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <v-btn
                v-on:click="show = true"
                text
                :color="isRead ? `success` : `error`"
                class="text-none font-weight-bold"
                link
                >{{ topic.title }}</v-btn
              >
            </span>
          </template>
          <span class="caption text-truncate">{{ topic.description }}</span>
        </v-tooltip>
      </div>
      <div></div>
      <div :class="`${levelColor}--text`">
        {{ topic.level }}
      </div>
    </div>
  </div>
</template>

<script>
const marked = require("marked");
const hljs = require("highlightjs");

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
      return this.topic.readAt && this.topic.readAt !== null;
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
  },
  methods: {
    toggleRead() {
      let newValue = '';
      if (this.topic.readAt == null) {
        newValue = new Date();
      } else newValue = null;
      this.topic.readAt = newValue;
      this.$emit('setTopicReadStatus', newValue)
    },
  },
  watch: {
    
  },
};
</script>

<style>
</style>