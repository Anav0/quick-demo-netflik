<template>
  <div
    class="my-10 HD:mt-24 overflow-x-hidden content flex justify-center items-center"
  >
    <Avatar src="/assets/avatar.jpg" />
    <div class="content__hero">
      <img :src="selectedMovie.hero" />
    </div>
    <div class="h-full w-full grid max-w-full lg:max-w-80 2k:max-w-70">
      <SelectedMovie :rating="rating" :movie="selectedMovie" />
      <div class="flex flex-col lg:mt-10 xl:mt-20 w-full">
        <span class="w-full text-5xl capitalize text-white mb-8"
          >new releases</span
        >
        <Propositions
          :onPropositionSelected="onPropositionSelected"
          :movies="propositions"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Avatar from "@/components/Avatar.vue";
import SelectedMovie from "@/components/SelectedMovie/SelectedMovie.vue";
import { mockMovies } from "@/mock/movies.ts";
import { Movie } from "@/models/Movie";
import { computed, defineComponent, ref } from "vue";
import Propositions from "@/components/Propositions.vue";
import { randomInteger } from "@/helpers";

export default defineComponent({
  components: {
    Avatar,
    SelectedMovie,
    Propositions,
  },
  setup() {
    const selectedMovie = ref(mockMovies[0]);
    const rating = ref(randomInteger(10, 100));

    function onPropositionSelected(movie: Movie) {
      selectedMovie.value = movie;
      rating.value = randomInteger(10, 100);
    }

    const propositions = computed(() =>
      mockMovies.filter((x: Movie) => x.id !== selectedMovie.value.id)
    );

    return {
      onPropositionSelected,
      selectedMovie,
      propositions,
      rating,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  overflow-x: hidden;
  max-width: 3840px;
  max-height: 2160px;

  &__hero {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 70%;
    z-index: -1;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__hero:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%);
  }
}
</style>
