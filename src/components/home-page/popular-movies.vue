<template>
  <div class="mx-5">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      Popular Movies
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <div v-for="popularMovie in popularMovies" :key="popularMovie.id">
        <MovieItems :movie="popularMovie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IMovieItem } from "../../utils";
import MovieItems from "./items/movie-items.vue";

@Component({
  components: {
    MovieItems,
  },
})
export default class PopularMovies extends Vue {
  private get popularMovies(): IMovieItem[] {
    return this.$store.state.popularMovies;
  }
}
</script>

<style></style>
