<template>
  <div class="book-index mx-52 flex items-center justify-center">
    <book :data="favorite(this.id)" />
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
      favorite: 'favorites/getFavoritesById'
    })
  }
}
</script>

<style scoped>
.book-index {
  height: calc(100vh - 80px - 32px);
}
</style>
