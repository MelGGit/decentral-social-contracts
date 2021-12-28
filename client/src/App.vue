<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'DSocial',
  meta: [
    { name: 'description', content: 'Decentralized Social Media App' },
  ],
})
</script>

<template>
  <router-view />
</template>
