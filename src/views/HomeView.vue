<template>
  <div class="container mx-auto">
    <PopularMovies />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PopularMovies from "../components/home-page/popular-movies.vue";

@Component({
  components: {
    PopularMovies,
  },
})
export default class HomeView extends Vue {}
</script>
