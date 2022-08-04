<template>
  <books class="p-10 px-32" data-type="Favorites" :data-list="favorites" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      favorites: 'favorites/getFavorites'
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
</style>
