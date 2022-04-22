<template>
  <div
    v-if="value"
    style="background-color: rgba(0, 0, 0, 0.5)"
    class="fixed top-0 left-0 w-full h-full flex items-center shadow-inner"
    tabindex="0"
  >
    <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
      <div class="bg-gray-900 rounded">
        <div class="flex justify-end pr-4 pt-2">
          <button
            @click="close"
            class="text-3xl leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div class="modal-body px-8 py-8">
          <div
            class="responsive-container overflow-hidden relative"
            :style="isVideo ? 'padding-top: 56.25%' : ''"
          >
            <img v-if="!isVideo" :src="mediaURL" alt="image" />
            <iframe
              v-if="isVideo"
              class="responsive-iframe absolute top-0 left-0 w-full h-full"
              style="border: 0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              :src="mediaURL"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Emit } from "vue-property-decorator";
import { clone } from "lodash";

@Component({})
export default class MovieModel extends Vue {
  @Prop({ required: true })
  private value!: any;

  @Prop({ required: true })
  private mediaURL!: any;

  @Prop({ required: true })
  private isVideo!: any;

  private cloneValue = clone(this.value);

  @Emit("input")
  close() {
    return false;
  }
}
</script>

<style></style>
