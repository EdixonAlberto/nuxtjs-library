<template>
  <div class="book-index mx-52 flex items-center justify-center">
    <book v-if="book" :data="book" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params }) {
    return { id: params.id }
  },

  computed: {
    ...mapGetters({
      getBook: 'books/getBookById'
    }),
    book() {
      return this.getBook(this.id)
    }
  },

  created() {
    if (!this.book) this.$router.push({ name: 'index' })
  }
}
</script>

<style scoped>
.book-index {
  height: calc(100vh - 80px - 32px);
}
</style>
