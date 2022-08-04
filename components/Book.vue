<template>
  <div class="book h-full">
    <div class="card h-full flex items-center justify-center gap-16">
      <img v-if="data.cover" :src="data.cover.big" alt="cover book" />
      <fa-icon v-else id="cover-icon" class="text-main-200" icon="book" />

      <div class="content">
        <h3 class="mb-10 text-3xl font-semibold text-main-200" v-text="data.title.big"></h3>

        <p><span>Last Publish Date: </span>{{ data.lastPublishDate }}</p>
        <p><span>Authors: </span>{{ formatList(data.authors) }}</p>
        <p><span>Subjects: </span>{{ formatList(data.subjects) }}</p>
        <p v-if="data.languages.length"><span>Languages: </span>{{ formatList(data.languages) }}</p>

        <div class="favorite mt-20 flex items-center justify-start cursor-pointer" @click="toggleFavorites(data)">
          <fa-icon class="text-2xl mr-2" :icon="[`${getFavoriteById(data.id) ? 'fas' : 'far'}`, 'heart']" />
          <span>Add to my list favorite</span>
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
      required: true
    }
  },

  computed: {
    ...mapGetters({
      getFavoriteById: 'favorites/getFavoriteById'
    })
  },

  methods: {
    ...mapActions({
      toggleFavorites: 'favorites/toggle'
    }),
    formatList(list) {
      return list.join(', ')
    }
  }
}
</script>

<style scoped>
.book .card #cover-icon {
  font-size: 300px;
}

.book .card .content p {
  color: #212d36;
}

.book .card .content p > span {
  font-weight: bold;
}
</style>
