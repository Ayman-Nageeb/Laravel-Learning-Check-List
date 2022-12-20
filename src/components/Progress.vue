<template>
  <v-container>
    <v-row>
      <v-col>
        <v-progress-linear
          style="border-radius: 40px"
          rounded
          shaped
          :value="overAllProgress"
          height="20"
          :color="overAllProgress == 100 ? `success` : `primary`"
        >
          <span
            :class="{
              caption: true,
              'font-weight-black': true,
              'white--text': overAllProgress > 55,
            }"
          >
            ({{readTopicsCount}} of {{allTopicsCount}}) {{ Math.ceil(overAllProgress) }}%
          </span>
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-progress-linear
          style="border-radius: 40px"
          rounded
          shaped
          :value="beginnerProgress"
          height="20"
          :color="beginnerProgress == 100 ? `success` : `primary`"
        >
          <span
            :class="{
              caption: true,
              'font-weight-black': true,
              'white--text': beginnerProgress > 55,
            }"
          >
            Beginner ({{beginnerReadTopicsCount}} of {{beginnerTopicsCount}}) {{ Math.ceil(beginnerProgress) }}%
          </span>
        </v-progress-linear>
      </v-col>
      <v-col>
        <v-progress-linear
          style="border-radius: 40px"
          rounded
          shaped
          :value="intermediateProgress"
          height="20"
          :color="intermediateProgress == 100 ? `success` : `primary`"
        >
          <span
            :class="{
              caption: true,
              'font-weight-black': true,
              'white--text': intermediateProgress > 55,
            }"
          >
            Intermediate ({{intermediateReadTopicsCount}} of {{intermediateTopicsCount}}) {{ Math.ceil(intermediateProgress) }}%
          </span>
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-progress-linear
          style="border-radius: 40px"
          rounded
          shaped
          :value="advanceProgress"
          height="20"
          :color="advanceProgress == 100 ? `success` : `primary`"
        >
          <span
            :class="{
              caption: true,
              'font-weight-black': true,
              'white--text': advanceProgress > 55,
            }"
          >
            Advance ({{advanceReadTopicsCount}} of {{advanceTopicsCount}}) {{ Math.ceil(advanceProgress) }}%
          </span>
        </v-progress-linear>
      </v-col>
      <v-col>
        <v-progress-linear
          style="border-radius: 40px"
          rounded
          shaped
          :value="bonusProgress"
          height="20"
          :color="bonusProgress == 100 ? `success` : `primary`"
        >
          <span
            :class="{
              caption: true,
              'font-weight-black': true,
              'white--text': bonusProgress > 55,
            }"
          >
            Bonus ({{bonusReadTopicsCount}} of {{bonusTopicsCount}}) {{ Math.ceil(bonusProgress) }}%
          </span>
        </v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import topics from "../topics";
export default {
  computed: {
    allTopicsCount() {
      return topics.flattenTopics().length;
    },
    readTopicsCount() {
      return this.$store.getters["readTopics"].length;
    },
    beginnerTopicsCount() {
      return topics.flattenTopics("beginner").length;
    },
    beginnerReadTopicsCount() {
      return this.$store.getters["beginnerReadTopics"].length;
    },
    intermediateTopicsCount() {
      return topics.flattenTopics("intermediate").length;
    },
    intermediateReadTopicsCount() {
      return this.$store.getters["intermediateReadTopics"].length;
    },
    advanceTopicsCount() {
      return topics.flattenTopics("advance").length;
    },
    advanceReadTopicsCount() {
      return this.$store.getters["advanceReadTopics"].length;
    },
    bonusTopicsCount() {
      return topics.flattenTopics("bonus").length;
    },
    bonusReadTopicsCount() {
      return this.$store.getters["bonusReadTopics"].length;
    },

    overAllProgress() {
      const percent = (this.readTopicsCount * 100) / this.allTopicsCount;
      return percent;
    },
    beginnerProgress() {
      const percent =
        (this.beginnerReadTopicsCount * 100) / this.beginnerTopicsCount;
      return percent;
    },
    intermediateProgress() {
      const percent =
        (this.intermediateReadTopicsCount * 100) / this.intermediateTopicsCount;
      return percent;
    },
    advanceProgress() {
      const percent =
        (this.advanceReadTopicsCount * 100) / this.advanceTopicsCount;
      return percent;
    },
    bonusProgress() {
      const percent = (this.bonusReadTopicsCount * 100) / this.bonusTopicsCount;
      return percent;
    },
  },
};
</script>

<style></style>
