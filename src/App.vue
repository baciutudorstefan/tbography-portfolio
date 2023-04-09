<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/home/Header.vue"
</script>

<template>
    <Header/>

  <RouterView />
</template>

<style scoped>
@font-face {
  font-family: "BRRRTrial-Skrrt";
  src: url("../src/assets/Font/BRRRTrial-Skrrt");
}

p{
  font-family: "BRRRTrial-Skrrt" !important;
}
</style>
