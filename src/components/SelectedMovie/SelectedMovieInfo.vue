<template>
  <div class="selectedMovieInfo">
    <span class="selectedMovieInfo__season">NEW SEASON</span>
    <h1 class="selectedMovieInfo__title mb-4">{{ title }}</h1>
    <div
      class="selectedMovieInfo__categoriesWrapper mb-8 max-w-full sm:max-w-70 md:max-w-70 lg:max-w-75 xl:max-w-90"
    >
      <span class="selectedMovieInfo__sub font-sub xl:text-xl"
        >Season 1 TV-14</span
      >
      <span class="selectedMovieInfo__sub font-sub xl:text-xl">{{
        categories.join(", ")
      }}</span>
      <span :class="`selectedMovieInfo__match xl:text-xl ${ratingCssClass}`"
        >{{ match }}%</span
      >
    </div>
    <p class="font-desc xl:text-lg macbook:text-xl">{{ desc }}</p>
  </div>
</template>

<script lang="ts">
import { getColorForPercentage } from "@/helpers";
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "SelectedMovieInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    match: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const ratingCssClass = ref(getColorForPercentage(props.match));

    watchEffect(
      () => (ratingCssClass.value = getColorForPercentage(props.match))
    );

    return {
      ratingCssClass,
    };
  },
});
</script>

<style lang="scss">
.selectedMovieInfo {
  color: $font-main;
  max-width: 520px;

  &__season {
    font-size: 1.5rem;
    opacity: 0.7;
  }
  &__sub {
    text-transform: capitalize;
  }

  &__title {
    text-overflow: ellipsis;
    font-size: 6rem;
    text-transform: capitalize;
  }
  &__categoriesWrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
