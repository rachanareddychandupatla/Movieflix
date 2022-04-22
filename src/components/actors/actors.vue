<template>
  <div class="container mx-auto px-4 py-4">
    <h2 class="text-yellow-500 text-lg font-semibold">POPULAR ACTORS</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
    >
      <ActorItems
        :key="index"
        v-for="(actor, index) in actors"
        :actor="actor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ActorItems from "../home-page/items/actor-items.vue";
import { HTTP } from "../../services/api";

@Component({
  components: {
    ActorItems,
  },
})
export default class Actors extends Vue {
  private actors = [];

  async mounted() {
    try {
      const result = await HTTP.get(`/person/popular?page=1`);
      this.actors = result.data.results;
    } catch (e) {
      console.error(`An error occured please try again ${e}`);
    }
  }
}
</script>

<style></style>
