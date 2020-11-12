<template>
  <div class="selectedMovie w-full h-full">
    <img class="selectedMovie__cover mt-14" :src="movie.cover" />
    <SelectedMoveInfo
      :title="movie.title"
      :desc="movie.desc"
      :categories="movie.categories"
      :match="rating"
      class="selectedMovie__info mb-14"
    />
    <div
      class="selectedMovie__actions flex items-center justify-between max-w-xs"
    >
      <button class="rounded bg-white p-3 w-30 h-12">Watch</button>
      <button
        class="rounded flex justify-between items-center btn-secondary p-3 w-40 h-12"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 7C0 3.13425 3.13425 0 7 0C10.8658 0 14 3.13425 14 7C14 10.8658 10.8658 14 7 14C3.13425 14 0 10.8658 0 7ZM7.58333 7.58333H10.5C10.822 7.58333 11.0833 7.32258 11.0833 7C11.0833 6.67742 10.822 6.41667 10.5 6.41667H7.58333V3.5C7.58333 3.17742 7.322 2.91667 7 2.91667C6.678 2.91667 6.41667 3.17742 6.41667 3.5V6.41667H3.5C3.178 6.41667 2.91667 6.67742 2.91667 7C2.91667 7.32258 3.178 7.58333 3.5 7.58333H6.41667V10.5C6.41667 10.8226 6.678 11.0833 7 11.0833C7.322 11.0833 7.58333 10.8226 7.58333 10.5V7.58333Z"
            fill="white"
          />
        </svg>
        <span>Add to My List</span>
      </button>
    </div>
    <SelectedMovieImages
      class="selectedMovie__images"
      :images="movie.imagesUrls"
    />
  </div>
</template>

<script lang="ts">
import { Movie } from "@/models/Movie";
import { defineComponent } from "vue";
import SelectedMoveInfo from "@/components/SelectedMovie/SelectedMovieInfo.vue";
import SelectedMovieImages from "@/components/SelectedMovie/SelectedMovieImages.vue";

export default defineComponent({
  name: "SelectedMovie",
  components: {
    SelectedMoveInfo,
    SelectedMovieImages,
  },
  props: {
    movie: {
      type: Movie,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.selectedMovie {
  position: relative;
  display: grid;
  overflow: hidden;
  grid-gap: 2rem 7rem;

  grid-template-areas:
    "mainImg info"
    "mainImg info"
    "mainImg actions"
    "mainImg images";

  &__cover {
    grid-area: mainImg;
    object-fit: cover;
    place-self: center start;
    border-radius: 15px;
    height: 540px;
    width: 360px;
  }

  &__info {
    grid-area: info;
    place-self: center start;
  }

  &__images {
    grid-area: images;
  }
}
</style>
