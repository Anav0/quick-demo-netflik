<template>
  <div class="propositions">
    <div
      class="propositions__item cursor-pointer w-full h-full"
      v-for="movie in movies"
      @click="onPropositionSelected(movie)"
      :key="`proposition-${movie.cover}`"
    >
      <img :src="movie.hero" class="rounded-xl w-80 h-60 HD:w-90 HD:h-70" />
      <h2 class="text-white text-4xl mt-4">{{ movie.title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Propositions",
  props: {
    movies: {
      type: Array,
      required: true,
    },
    onPropositionSelected: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.propositions {
  width: 125%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;

  &__item:hover {
  }
  &__item {
    transition: transform 0.2s;
  }
}
</style>
