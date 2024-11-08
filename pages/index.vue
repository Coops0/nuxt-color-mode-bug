<template>
  <div>
    <p>
      Go to
      <NuxtLink :to="{ name: 'dir-id', params: { id: '0x0' } }">
        A nested sub dir
      </NuxtLink>
    </p>

    <div>
      <p @click="swap">Change to {{ theme.value === 'dark' ? 'light' : 'dark' }}</p>
      <p v-if="theme === 'dark'">Refresh the page. The cookie should stick.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const theme = useColorMode();

function swap() {
  theme.preference = theme.value === 'dark' ? 'light' : 'dark';
}
</script>