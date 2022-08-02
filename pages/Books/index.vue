<template>
  <div class="books p-10 px-32 flex items-center justify-center">
    <ul class="flex flex-wrap items-center justify-between gap-5">
      <li
        class="w-52 h-80 mb-6 py-2 flex flex-col text-center border-2 border-main-100 cursor-pointer"
        v-for="book of books"
        :key="book.id"
        @click="gotBook(book.id)"
      >
        <h4 class="h-20 text-lg" v-text="book.title.medium"></h4>

        <div class="cover flex flex-1 justify-center">
          <img
            v-if="book.cover"
            class="w-auto h-auto max-h-52 mb-2"
            :src="book.cover.medium"
            alt="cover"
            draggable="false"
          />
          <fa-icon v-else class="text-9xl text-main-200" :icon="['fas', 'book']" />
        </div>

        <div class="content">
          <p>{{ book.authors[0] }} - {{ book.lastPublishDate }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      books: 'books/getBooks'
    })
  },

  methods: {
    gotBook(id) {
      this.$router.push({ name: 'Books-id', params: { id } })
    }
  }
}
</script>

<style scoped>
</style>
