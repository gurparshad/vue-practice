<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router";
import BigInput from "./components/BigInput.vue";
import BigForm from "./components/BigForm.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <BigInput />
      <BigForm />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }
}
</style>
