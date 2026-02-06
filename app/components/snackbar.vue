<script setup lang="ts">

const messages = useState('notifyMessages', () => [])

</script>

<template lang="html">
  <v-snackbar-queue v-model="messages" />
</template>