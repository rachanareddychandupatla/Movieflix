<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold">Cast</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mb-2">
      <div class="mr-2 mt-4" :key="cast.id" v-for="cast in casts">
        <img :src="castProfilePicture(cast)" alt="Cast1" class="hover:opacity-75 transition easy-in-out duration-150" />
        <span class="text-gray-300">{{cast.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({})
export default class Cast extends Vue{
  @Prop({required: true})
  private casts!:any;

  public castProfilePicture(cast: any) {
    return cast.profile_path ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}` : 'https://via.placeholder.com/300x450';
  }
};
</script>

<style></style>
