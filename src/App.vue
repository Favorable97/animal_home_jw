<template>
  <v-app class="grey">
    <!-- <v-app-bar flat app class="grey lighten-3">
      
    </v-app-bar> -->
    <AppHeader></AppHeader>
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
/* import AppFooter from './components/AppFooter.vue'; */
import AppHeader from './components/AppHeader.vue';

export default {
    name: "App",
    data: () => ({}),
    components: { AppHeader/* , AppFooter */ }
};
</script>
