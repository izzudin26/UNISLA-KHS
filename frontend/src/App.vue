<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  watch: {
      // eslint-disable-next-line no-unused-vars
      '$route' (to, from) {
        document.title = to.meta.title || 'UNISLA KHS'
      }
    },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #419af3;
}
</style>
