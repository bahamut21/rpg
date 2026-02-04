<template>
  <div>
    <h1>{{ $t('map-title') }}</h1>
    <p>{{ $t('map-description') }}</p>
    <p>{{ markers }}</p>
    <!-- <l-map style="height: 500px; width: 100%;" :zoom="13" :center="[47.413220, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </l-map> -->
  </div>
</template>

<script setup>
const { data: markers } = await useFetch('/api/markers')
</script>