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
            {{ Math.ceil(overAllProgress) }}%
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
            Beginner {{ Math.ceil(beginnerProgress) }}%
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
            Intermediate {{ Math.ceil(intermediateProgress) }}%
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
              Advance {{ Math.ceil(advanceProgress) }}%
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
              Bonus {{ Math.ceil(bonusProgress) }}%
            </span>
          </v-progress-linear>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import topics from '../topics';
export default {
  computed: {
    overAllProgress() {
      const allTopics = topics.flattenTopics();
      const readTopics = this.$store.getters["readTopics"];
      const percent = (readTopics.length * 100) / allTopics.length;
      return percent;
    },
    beginnerProgress() {
      const beginnerTopics = topics.flattenTopics("beginner");
      const beginnerReadTopics = this.$store.getters["beginnerReadTopics"];
      const percent = (beginnerReadTopics.length * 100) / beginnerTopics.length;
      return percent;
    },
    intermediateProgress() {
      const intermediateTopics = topics.flattenTopics("intermediate");
      const intermediateReadTopics = this.$store.getters["intermediateReadTopics"];
      const percent = (intermediateReadTopics.length * 100) / intermediateTopics.length;
      return percent;
    },
    advanceProgress() {
      const advanceTopics = topics.flattenTopics("advance");
      const advanceReadTopics = this.$store.getters["advanceReadTopics"];
      const percent = (advanceReadTopics.length * 100) / advanceTopics.length;
      return percent;
    },
    bonusProgress() {
      const bonusTopics = topics.flattenTopics("bonus");
      const bonusReadTopics = this.$store.getters["bonusReadTopics"];
      const percent = (bonusReadTopics.length * 100) / bonusTopics.length;
      return percent;
    },
  },
};
</script>

<style></style>
