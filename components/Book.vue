<template>
  <div class="book h-full">
    <div class="card h-full flex items-center justify-center gap-16">
      <img v-if="data.cover" :src="data.cover.big" alt="cover book" />
      <fa-icon v-else class="text-9xl text-main-200" :icon="['fas', 'book']" />

      <div class="content">
        <h3 class="mb-10 text-3xl font-semibold text-main-200" v-text="data.title.big"></h3>

        <p><span>Last Publish Date: </span>{{ data.lastPublishDate }}</p>
        <p><span>Authors: </span>{{ formatList(data.authors) }}</p>
        <p><span>Subjects: </span>{{ formatList(data.subjects) }}</p>
        <p v-if="data.languages.length"><span>Languages: </span>{{ formatList(data.languages) }}</p>

        <div class="favorite mt-20">
          <fa-icon class="text-2xl mr-2 cursor-pointer" :icon="['far', 'heart']" />
          <span>Add to my list favorite</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatList(list) {
      return list.join(', ')
    }
  },

  created() {
    console.log(this.data.languages.join(', '))
  }
}
</script>

<style scoped>
.book .card .content p {
  color: #212d36;
}

.book .card .content p > span {
  font-weight: bold;
}
</style>
