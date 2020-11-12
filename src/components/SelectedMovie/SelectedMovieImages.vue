<template>
  <div class="selectedMovieImages xs:w-full">
    <img
      class="rounded-extra selectedMovieImages__image object-cover w-60 h-30 lg:w-80 lg:h-48 macbook:w-80 macbook:h-56 HD:w-80 HD:h-60"
      v-for="url in images"
      :key="url"
      :src="url"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectedMovieImages",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.selectedMovieImages {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 0 2rem;
  &__image {
    grid-row: 1/2;
  }
}
</style>
