<script setup lang="ts">
const {data, error, pending} = useFetch("/api/provinces")
</script>

<template>
  <section v-if="!pending">
    <h1>Provinces</h1>
    <ul>
      <li v-for="province in data" :key="province.id">
        <NuxtLink :to="`/provinces/${province.slug}`">{{ province.name }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>