<script setup lang="ts">
const { data: markers } = await useFetch('/api/markers', {
  method: 'get',
  default: () => [],
});
</script>

<template lang="html">
  <div>
    <h1>{{ $t('titre') }}</h1>
    <p>{{ $t('description-de-la-carte') }}</p>
    <p>{{ markers }}</p>
    <lazy-leaf-card :markers="markers"/>
  </div>
</template>

