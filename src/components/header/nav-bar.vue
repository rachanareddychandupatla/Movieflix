<template>
  <div class="flex mb-3">
    <router-link to="/">
      <div class="flex">
        <font-awesome-icon icon="film" class="fa-2x mt-1.5" />
        <h1 class="font-bold mt-2.5 ml-1 text-2xl">Movieflix</h1>
      </div>
    </router-link>

    <ul class="flex mt-4">
      <li>
        <router-link to="/" class="ml-5">Movies</router-link>
      </li>
      <li>
        <router-link to="/actors" class="ml-5">Actors</router-link>
      </li>
      <!-- <li>
        <router-link to="/profile" class="ml-5">Profile</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {}
</script>

<style></style>
