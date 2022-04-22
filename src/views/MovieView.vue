<template>
  <div>
    <Movie />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Movie from "@/components/movies/movie.vue";

@Component({
  components: {
    Movie,
  },
})
export default class MovieView extends Vue {}
</script>
