<template>
  <div class="book mx-52 flex items-center">
    <book :data="key" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const key = params.key
    return { key }
  }
}
</script>

<style scoped>
.book {
  height: calc(100vh - 80px - 24px);
}
</style>
