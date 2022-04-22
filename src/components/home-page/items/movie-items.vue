<template>
  <div>
    <router-link :to="`/movie/${movie.id}`"
      ><img
        :src="moviePoster"
        alt="joker"
        class="hover:opacity-75 transition easy-in-out duration-150"
    /></router-link>
    <h3>{{ movie.title }}</h3>
    <div class="flex">
      <font-awesome-icon
        icon="star"
        class="fill-current text-yellow-500 mr-1 mt-1.5 fa-xs"
      />
      <div class="ml-2">{{ ratingRelease }}</div>
    </div>
    <span class="text-sm text-gray-500">
      <span :key="genreId.id" v-for="(genreId, index) in movie.genreIds">
        {{ genreName(genreId, index) }}
      </span></span
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IMovieItem } from "@/utils";

@Component({
  components: {},
})
export default class MovieItems extends Vue {
  @Prop({ required: true }) private movie!: IMovieItem;

  public get moviePoster(): String {
    return this.movie.image_id
      ? `https://image.tmdb.org/t/p/w500/${this.movie.image_id}`
      : "";
  }

  public get genreNames(): any {
    return this.$store.state.genreNames;
  }

  public genreName(genreId: number, index: number) {
    for(const item of this.genreNames) {
      if(item.id === genreId) {
        if(this.movie.genreIds.length -1 === index) {
          return item.name;
        } else {
        return item.name + ',';
        }
      }
    }
  }

  private get ratingRelease(): String {
    return `${this.movie.rating}% | ${this.movie.release_date}`;
  }
}
</script>

<style></style>
