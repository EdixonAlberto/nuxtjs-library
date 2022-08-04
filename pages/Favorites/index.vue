<template>
  <books data-type="Favorites" :data-list="favorites" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      favorites: 'favorites/getFavorites'
    })
  }
}
</script>

<style scoped>
</style>
