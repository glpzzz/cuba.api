<script setup lang="ts">
const route = useRoute();
const {data, error, pending} = useFetch(`/api/municipalities/${route.params.slugm}?withPopularCouncils=true`)
</script>

<template>
  <section v-if="!pending">
    <h1>{{ data.name }}</h1>
    <ul>
      <li v-for="popularCouncil in data.popularCouncils" :key="popularCouncil.slug">
        {{ popularCouncil.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>