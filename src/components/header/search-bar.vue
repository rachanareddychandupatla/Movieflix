<template>
  <div class="mt-3 mr-5 flex relative">
    <input
      id="search"
      type="text"
      class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 mb-3 focus:outline-shawod"
      placeholder="Search..."
      @input="searchMovie"
      @focus="onFocus"
    />
    <font-awesome-icon icon="magnifying-glass" class="absolute top-3 ml-2" />
    <div class="absolute mt-12 ml-2 rounded bg-gray-600 w-60 z-50">
      <ul class="mt-3" v-if="searchResult.length != 0 && showSearchResult">
        <li v-for="(movie, index) in searchResult" :key="index">
          <router-link
            :to="`/movie/${movie.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img :src="moviePoster(movie.poster_path)" alt="" class="w-10" />
            <span class="ml-3">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul v-if="noResultFound">
        <li class="px-2 py-2">No Result Found</li>
      </ul>
    </div>
    <img
      src="@/assets/images/profile-picture.jpg"
      alt="profile picture"
      class="h-10 w-10 rounded-full"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { debounce } from "lodash";
import { HTTP } from "@/services/api";
@Component({})
export default class SearchBar extends Vue {
  public debounceFetchSearch = debounce(this.fetchSearch, 300);
  private searchResult = [];
  private noResultFound = false;
  private showSearchResult = true;
  private searchTerm = "";

  searchMovie(event: any) {
    this.searchTerm = event.target.value;
    this.debounceFetchSearch(this.searchTerm);
  }

  mounted() {
    this.keyBoardEvents();
  }

  keyBoardEvents() {
    window.addEventListener("keypress", (e) => {
      document.getElementById("search")?.focus();
    });
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.showSearchResult = false;
      }
    });
  }

  onFocus() {
    if (this.searchTerm !== "") {
      this.showSearchResult = true;
    }
  }

  async fetchSearch(searchValue: String) {
    if (searchValue.trim().length === 0) {
      this.noResultFound = false;
      this.searchResult = [];
      return;
    }
    try {
      const result = await HTTP.get(`/search/movie?query=${searchValue}`);
      let data = result.data.results;
      this.searchResult = data;
      this.noResultFound = this.searchResult.length === 0;
      this.showSearchResult = data ? true : false;
    } catch (e) {
      console.error(`An error occured please try again ${e}`);
    }
  }

  public moviePoster(path: String): String {
    return path
      ? `https://image.tmdb.org/t/p/w500/${path}`
      : "https://via.placeholder.com/50x75";
  }
}
</script>

<style></style>
