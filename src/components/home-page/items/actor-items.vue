<template>
  <div>
    <router-link :to="`/actor/${this.actor.id}`">
      <img :src="image" alt="actor-image" class="mt-6" />
      <h3>{{ actor.name }}</h3>
      <p class="text-gray-400">{{ knownFor }}</p></router-link
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ActorItems extends Vue {
  @Prop({ required: true })
  private actor!: any;

  private get image() {
    return `https://image.tmdb.org/t/p/w235_and_h235_face/${this.actor.profile_path}`;
  }

  private get knownFor() {
    let i: any;
    let str = "";
    for (; i < this.actor.known_for.length - 1; i++) {
      str += this.actor.known_for[i].title;
    }

    return str;
  }
}
</script>

<style></style>
