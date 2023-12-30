<script setup lang="ts">
const route = useRoute();
const {data, error, pending} = useFetch(`/api/provinces/${route.params.slug}?withMunicipalities=true`)
</script>

<template>
  <section v-if="!pending">
    <h1>{{ data.name }}</h1>
    <ul>
      <li v-for="municipality in data.municipalities" :key="municipality.slug">
        <NuxtLink :to="`/provinces/${data.slug}/${municipality.slug}`">{{ municipality.name }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>