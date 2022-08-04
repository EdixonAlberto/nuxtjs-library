<template>
  <div v-if="book" class="book h-full">
    <div class="card h-full flex items-center justify-center gap-16">
      <img v-if="book.cover" :src="book.cover.big" alt="cover book" draggable="false" />
      <fa-icon v-else id="cover-icon" class="text-main-200" icon="book" />

      <div class="content">
        <h3 class="mb-10 text-3xl font-semibold text-main-200" v-text="book.title.big"></h3>

        <p><span>Last Publish Date: </span>{{ book.lastPublishDate }}</p>
        <p><span>Authors: </span>{{ formatList(book.authors) }}</p>
        <p><span>Subjects: </span>{{ formatList(book.subjects) }}</p>
        <p v-if="book.languages.length"><span>Languages: </span>{{ formatList(book.languages) }}</p>

        <div class="favorite mt-10 flex items-center justify-start cursor-pointer" @click="toggleFavorites(book)">
          <fa-icon class="h-6 w-6 mr-2" :icon="[`${getFavoriteById(book.id) ? 'fas' : 'far'}`, 'heart']" />
          <span>{{ getFavoriteById(book.id) ? 'Remove of' : 'Add to' }} my list favorite</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: null
    }
  },

  data() {
    return {
      book: this.data
    }
  },

  computed: {
    ...mapGetters({
      section: 'states/getSection',
      getFavoriteById: 'favorites/getFavoriteById'
    })
  },

  methods: {
    ...mapActions({
      toggleFavorites: 'favorites/toggle'
    }),
    formatList(list) {
      return list.filter((_, i) => i < 20).join(', ')
    }
  },

  watch: {
    data(newData) {
      if (this.section === 'Home') this.book = newData
    }
  }
}
</script>

<style scoped>
.book .card #cover-icon {
  height: 100%;
  width: 300px;
}

.book .card .content p {
  color: #212d36;
}

.book .card .content p > span {
  font-weight: bold;
}
</style>
