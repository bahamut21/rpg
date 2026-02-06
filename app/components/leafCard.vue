<script setup lang="ts">
import type { Marker } from '~~/server/api/markers';

const map = ref(null)
const markers = defineModel('markers', { type: Array as PropType<Marker[]>, required: true })
const onMapReady = (map: L.Map) => {
  console.log(map)
}
</script>

<template lang="html">
<div id="map">
  <l-map ref="map" :use-global-leaflet="false" :zoom="1" :center="[0, 0]" @ready="onMapReady">
    <l-image-overlay
      url="/zelda.jpg"
      :bounds="[[-389, -690], [389, 690]]"
      />
    <LMarker 
      v-for="marker in markers"
      :key="marker.id"
      :lat-lng="[marker.latLng.lat, marker.latLng.lng]"
      draggable
      >
      <LIcon :icon-url="marker.icon" :icon-size="[32, 32]" :icon-anchor="[16, 32]" />
      <LTooltip>
        <h3>{{ marker.name }}</h3>
        <p>Level: {{ marker.ability.level }}</p>
        <p>Attack: {{ marker.ability.attack }}</p>
        <p>Defense: {{ marker.ability.defense }}</p>
        <p>Magic: {{ marker.ability.magic }}</p>
        <p>Magic Defense: {{ marker.ability.magicDefense }}</p>
        <p>Speed: {{ marker.ability.speed }}</p>
        <p>Luck: {{ marker.ability.luck }}</p>
      </LTooltip>
      <LPopup>
        <h3>{{ marker.name }}</h3>
        <p>{{ marker.description }}</p>
      </LPopup>
      <LCircle
        :lat-lng="[marker.latLng.lat, marker.latLng.lng]"
        :radius="marker.ability.move * 200 * 1000"
        color="blue"
        fill-color="blue"
        :fill-opacity="0.2" />
      <LCircle
        :lat-lng="[marker.latLng.lat, marker.latLng.lng]"
        :radius="marker.ability.maxScope * 200 * 1000"
        color="green"
        fill-color="green"
        :fill-opacity="0.2" />
      <LCircle
        :lat-lng="[marker.latLng.lat, marker.latLng.lng]"
        :radius="marker.ability.minScope * 200 * 1000"
        color="yellow"
        fill-color="yellow"
        :fill-opacity="0.2" />
    </LMarker>
  </l-map>

</div>
</template>

<style scoped>
#map {
  height: 600px;
  width: 100%;
}
</style>