<template>
<div>
  <div v-if="theme !== 'dark'" @click="dark">Change to Dark</div>
  <div v-if="theme === 'dark'">Refresh the page. It should default back to light mode. If you check the cookies, there will be a duplicate with a different path.</div>
</div>
</template>

<script setup lang="ts">

const theme = useColorMode();

function dark() {
  theme.value = 'dark';
}
</script>