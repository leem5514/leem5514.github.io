<template>
  <v-app class="bg-red-500">
    <v-main>
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>

</style>
