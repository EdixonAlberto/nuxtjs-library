<template>
  <div class="book-index mx-52 flex items-center justify-center">
    <book :data="book" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    return { id: params.id }
  },

  computed: {
    book() {
      return this.$store.getters['books/getBookById'](this.id)
    }
  }
}
</script>

<style scoped>
.book-index {
  height: calc(100vh - 80px - 32px);
}
</style>
