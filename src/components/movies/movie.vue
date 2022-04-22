<template>
  <div>
    <router-link to="/"
      ><font-awesome-icon
        icon="arrow-left-long"
        class="mr-1 mt-3"
      />Back</router-link
    >
    <div class="container mx-auto flex mt-10 border-b border-gray-600 pb-2">
      <img :src="moviePoster" alt="joker" class="w-64 mr-20" />
      <div class="ml-5">
        <h1 class="text-4xl font-semibold">{{ this.movieData.title }}</h1>
        <span
          ><font-awesome-icon
            icon="star"
            class="fill-current text-yellow-500 mr-1 fa-xs"
          />
          <span class="text-gray-500 text-sm"
            >{{ this.movieData.vote_average }}% |
            {{ this.movieData.release_date }}
            <span :key="index" v-for="(item, index) in movieData.genres">
              {{ item.name }}{{ genreName(index) }}
            </span>
          </span>
        </span>
        <p class="mt-5">
          {{ this.movieData.overview }}
        </p>

        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>
          <div class="flex">
            <div :key="index" v-for="(member, index) in crew">
              <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                <span>{{ member.name }}</span>
                <span class="text-gray-500">{{ member.job }}</span>
              </div>
            </div>
          </div>

          <div class="mt-5 text-black flex">
            <a
              @click.prevent="openVideo"
              target="blank"
              class="rounded bg-yellow-500 px-5 py-3"
              ><font-awesome-icon icon="circle-play" />
              <span class="ml-3">Play Trailer</span>
            </a>

            <a href="#" class="rounded bg-yellow-500 px-5 py-3 ml-5"
              ><font-awesome-icon
                icon="heart"
                class="fill-current text-red-500"
              />
              <span class="ml-3">Favourite</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Cast :casts="casts" />
    <Images :images="images" @on-image-click="showImageModel" />
    <MediaModel
      :value="isOpened"
      :mediaURL="mediaURL"
      :isVideo="isVideo"
      @input="isOpened = $event"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cast from "@/components/movies/cast.vue";
import Images from "@/components/movies/images.vue";
import { HTTP } from "../../services/api";
import MediaModel from "../models/media-model.vue";

@Component({
  components: {
    Cast,
    Images,
    MediaModel,
  },
})
export default class Movie extends Vue {
  private movieData: any = [];
  private isOpened: Boolean = false;
  private isVideo: Boolean = false;
  private mediaURL: String = "";
  async mounted() {
    await this.fetchMovieDataFromId(this.$route.params.id);
  }
  async fetchMovieDataFromId(movieId: string) {
    const result = await HTTP.get(
      `/movie/${movieId}?append_to_response=credits,videos,images`
    );
    this.movieData = result.data;
    this.$store.commit("setMovieData", result.data);
  }

  private genreName(index: number) {
    return this.movieData.genres.length - 1 !== index ? "," : "";
  }

  private openVideo() {
    this.mediaURL = this.playTrailer;
    this.isVideo = true;
    this.isOpened = true;
  }

  private showImageModel(imageFullPath: any) {
    this.mediaURL = imageFullPath;
    this.isVideo = false;
    this.isOpened = true;
  }

  public get moviePoster(): String {
    return this.movieData.poster_path
      ? `https://image.tmdb.org/t/p/w500/${this.movieData.poster_path}`
      : "";
  }

  private get casts() {
    return this.movieData.credits?.cast;
  }

  private get images() {
    return this.movieData.images?.backdrops;
  }

  private get crew() {
    return this.movieData.credits?.crew;
  }

  private get playTrailer() {
    return this.movieData.videos
      ? `https://www.youtube.com/embed/${this.movieData.videos.results[0].key}`
      : "#";
  }
}
</script>
