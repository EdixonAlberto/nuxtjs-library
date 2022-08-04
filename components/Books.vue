<template>
  <div class="books p-10 px-32 flex items-center justify-center">
    <ul class="flex flex-wrap items-center justify-between gap-5">
      <li
        class="w-52 h-80 mb-6 py-2 flex flex-col text-center border-2 border-main-100 cursor-pointer"
        v-for="data of dataList"
        :key="data.id"
        @click="goBook(data.id)"
      >
        <h4 class="h-20 text-lg font-bold" v-text="data.title.medium"></h4>

        <div class="cover flex flex-1 justify-center">
          <img
            v-if="data.cover"
            class="w-auto h-auto max-h-52 mb-2"
            :src="data.cover.medium"
            alt="cover"
            draggable="false"
          />
          <fa-icon v-else class="text-9xl text-main-200" icon="book" />
        </div>

        <div class="content">
          <p>{{ data.authors[0] }} - {{ data.lastPublishDate }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataType: {
      type: String,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    }
  },

  methods: {
    goBook(id) {
      this.$router.push({ name: `${this.dataType}-id`, params: { id } })
    }
  }
}
</script>

<style scoped>
</style>
