<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <NavBar /> <SearchBar />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavBar from "@/components/header/nav-bar.vue";
import SearchBar from "@/components/header/search-bar.vue";
import { IMovieItem } from "@/utils";
import { HTTP } from "./services/api";

@Component({
  components: {
    NavBar,
    SearchBar,
  },
})
export default class App extends Vue {
  async mounted() {
    this.fetchGenres();
    try {
      const result = await HTTP.get(`/movie/popular`);
      let data: IMovieItem[] = result.data.results.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          image_id: item.poster_path,
          release_date: item.release_date,
          rating: item.vote_average * 10,
          genreIds: item.genre_ids,
        };
      });
      this.$store.commit("setPopularMovies", data);
    } catch (e) {
      console.error(`An error occured please try again ${e}`);
    }
  }

  public async fetchGenres() {
    try {
      const result = await HTTP.get(`genre/movie/list`);
      let data = result.data.genres;
      this.$store.commit("setGenre", data);
    } catch (e) {
      console.error(`An error occured please try again ${e}`);
    }
  }
}
</script>
