<script setup>
import Header from '../components/home/Header.vue';
import AboutPage from '../components/about/AboutPage.vue';

</script>
<template>
    <AboutPage />
</template>

<style>
@media (min-width: 1024px) {
  @import url(../../assets/Style/base.css);

  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
