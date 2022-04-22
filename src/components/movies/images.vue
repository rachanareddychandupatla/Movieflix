<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">Images</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mb-2"
    >
      <div class="mr-3" :key="index" v-for="(image, index) in images">
        <img
          @click="onImageClick(image)"
          :src="movieImage(image)"
          alt="Cast1"
          class="hover:opacity-75 transition easy-in-out duration-150"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Images extends Vue {
  @Prop({ required: true })
  private images!: any;

  @Emit("on-image-click")
  onImageClick(image: any) {
    let imageFullPath = "";
    if (image.file_path) {
      imageFullPath = `https://image.tmdb.org/t/p/original/${image.file_path}`;
    } else {
      imageFullPath = "https://via.placeholder.com/300x450";
    }
    return imageFullPath;
  }

  public movieImage(image: any): String {
    return image.file_path
      ? `https://image.tmdb.org/t/p/original/${image.file_path}`
      : "https://via.placeholder.com/300x450";
  }
}
</script>

<style></style>
