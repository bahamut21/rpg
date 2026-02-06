<script setup lang="ts">
import type { Marker } from '~~/server/api/markers';
const { markers } = defineProps({
  markers: {
    type: Array as PropType<Marker[]>,
    required: true
  }
})

</script>

<template lang="html">
<v-card>
  <v-card-title>{{ $t('heroes-information') }}</v-card-title>
  <v-row>
    <v-col v-for="marker in markers" :key="marker.id" cols="6">
      <v-card :append-avatar="marker.icon" :title="marker.name">
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-number-input :label="$t('level')" controlVariant="split" :value="marker.ability.level" readonly></v-number-input>
              <v-number-input :label="$t('attack')" controlVariant="split" :value="marker.ability.attack" readonly></v-number-input>
              <v-number-input :label="$t('defense')" controlVariant="split" :value="marker.ability.defense" readonly></v-number-input>
              <v-number-input :label="$t('magic')" controlVariant="split" :value="marker.ability.magic" readonly></v-number-input>
            </v-col>
            <v-col cols="6">
              <v-number-input :label="$t('magic-defense')" controlVariant="split" :value="marker.ability.magicDefense" readonly></v-number-input>
              <v-number-input :label="$t('speed')" controlVariant="split" :value="marker.ability.speed" readonly></v-number-input>
              <v-number-input :label="$t('luck')" controlVariant="split" :value="marker.ability.luck" readonly></v-number-input>
            </v-col>
        </v-row>
        </v-card-text>
        
      </v-card>
    </v-col>
  </v-row>
</v-card>
</template>