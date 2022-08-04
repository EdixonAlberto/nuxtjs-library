<template>
  <books data-type="Books" :data-list="books" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      books: 'books/getBooks'
    })
  },

  methods: {
    ...mapMutations({
      setSection: 'states/SET_SECTION'
    })
  },

  created() {
    this.setSection('Books')
  }
}
</script>

<style scoped>
</style>
