<template>
  <div class="favorite-index mx-80 flex items-center justify-center">
    <book :data="favorite(this.id)" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  head: {
    title: 'Library | Favorites'
  },

  async asyncData({ params }) {
    return { id: params.id }
  },

  computed: {
    ...mapGetters({
      favorite: 'favorites/getFavoriteById'
    })
  },

  methods: {
    ...mapMutations({
      setSection: 'states/SET_SECTION'
    })
  },

  created() {
    this.setSection('Favorites')
  }
}
</script>

<style scoped>
.favorite-index {
  height: calc(100vh - 80px - 32px);
}
</style>
