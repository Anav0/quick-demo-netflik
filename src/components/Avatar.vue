<template>
  <img class="avatar rounded-full absolute" :src="src" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  props: {
    src: String,
  },
});
</script>

<style lang="scss">
.avatar {
  top: 38px;
  right: 94px;
  width: 50px !important;
  height: 50px !important;
  object-fit: cover;
  z-index: 10;
}
</style>
