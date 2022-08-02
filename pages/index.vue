<template>
  <div class="home">
    <aside class="w-60 h-full absolute top-0 left-0 pt-16 transition delay-500">
      <h3 class="text-3xl text-gray-100">Library</h3>

      <ul class="sections">
        <h4>Read</h4>
        <li>In Progress</li>
        <li>Favorites</li>
      </ul>

      <ul class="sections">
        <h4>Categories</h4>
        <li>Design</li>
        <li>Fashion</li>
        <li>Nutrition</li>
        <li>Health</li>
        <li>Sports</li>
        <li>Travel</li>
      </ul>
    </aside>

    <main class="ml-60">
      <div class="search mt-10 w-full h-14 flex items-center justify-center">
        <div class="search-box w-96 h-10 py-1 px-3 flex items-center justify-between border border-gray-700 rounded-lg">
          <fa-icon class="" icon="magnifying-glass" />

          <select class="mx-3 outline-none" name="type" :value="typeQuery" v-model="typeQuery">
            <option value="q">Title</option>
            <option value="author">Author</option>
            <option value="subject">Subject</option>
          </select>

          <input class="outline-none" type="text" placeholder="Search by author" v-model="valueQuery" />
        </div>

        <button class="h-10 px-4 ml-4 rounded-lg cursor-pointer hover:scale-95" @click="search">Buscar</button>
      </div>

      <div class="content"></div>

      <div class="recommended"></div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      typeQuery: 'q',
      valueQuery: ''
    }
  },

  computed: {
    ...mapGetters({
      books: 'books/GET_BOOKS'
    })
  },

  methods: {
    ...mapActions({
      fetchBooks: 'books/fetchBooks'
    }),
    async search() {
      await this.fetchBooks({
        type: this.typeQuery,
        value: this.valueQuery
      })

      this.$router.push({ name: 'Books' })
    }
  }
}
</script>

<style scoped>
.home main .content {
  height: calc(100vh - 80px - 96px - 32px);
}

.home aside {
  padding: 20px;

  background-image: url('/images/libraries.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: lef;
  color: #fff;

  z-index: 1;
}

.home aside::after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(33, 45, 54, 0.7);
  z-index: -1;
}

ul.sections {
  margin-top: 40px;
}

ul.sections h4 {
  color: #c5d3dc;
}

.search button {
  background: #212d36;
  color: #fff;
}
</style>
