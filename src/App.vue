<template>
  <ContentContainer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContentContainer from "./components/ContentContainer.vue";

@Options({
  components: {
    ContentContainer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
