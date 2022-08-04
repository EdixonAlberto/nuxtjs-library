<template>
  <books class="p-10 px-32" data-type="Books" :data-list="books" />
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
    if (this.books.length) this.setSection('Books')
    else this.$router.push({ name: 'index' })
  }
}
</script>

<style scoped>
</style>
