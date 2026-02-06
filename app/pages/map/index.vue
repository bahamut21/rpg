<script setup lang="ts">
const { data: markers } = await useFetch('/api/markers', {
  method: 'get',
  default: () => [],
});
</script>

<template lang="html">
  <v-card>
    <v-card-title>{{ $t('titre') }}</v-card-title>
    <v-card-subtitle>{{ $t('description-de-la-carte') }}</v-card-subtitle>
    <lazy-leaf-card v-model:markers="markers"/>
    <markers-infos :markers="markers" />
  </v-card>
</template>

