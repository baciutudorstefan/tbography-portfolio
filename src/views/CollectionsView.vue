<script setup>
import Header from '../components/home/Header.vue';
import Collections from '../components/collections/Collections.vue';

</script>
<template>
  <div class="collections">
    <Collections />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
