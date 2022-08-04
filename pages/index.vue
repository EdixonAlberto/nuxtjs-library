<template>
  <div class="home">
    <aside class="w-60 h-full fixed top-0 left-0 pt-16 transition delay-500">
      <h3 class="text-3xl text-gray-100">Library</h3>

      <ul class="sections">
        <h4 class="text-main-100">Read</h4>
        <li>In Progress</li>
        <li><nuxt-link to="Favorites">Favorites</nuxt-link></li>
      </ul>

      <ul class="sections">
        <h4 class="text-main-100">Categories</h4>
        <li :class="{ 'font-extrabold': category === 'design' }" @click="category = 'design'">Design</li>
        <li :class="{ 'font-extrabold': category === 'fashion' }" @click="category = 'fashion'">Fashion</li>
        <li :class="{ 'font-extrabold': category === 'nutrition' }" @click="category = 'nutrition'">Nutrition</li>
        <li :class="{ 'font-extrabold': category === 'health' }" @click="category = 'health'">Health</li>
        <li :class="{ 'font-extrabold': category === 'sports' }" @click="category = 'sports'">Sports</li>
        <li :class="{ 'font-extrabold': category === 'travel' }" @click="category = 'travel'">Travel</li>
      </ul>
    </aside>

    <main class="ml-60 px-8">
      <div class="search my-4 w-full h-14 flex items-center justify-center">
        <div class="search-box w-96 h-10 py-1 px-3 flex items-center justify-between border border-gray-700 rounded-lg">
          <fa-icon class="" icon="magnifying-glass" />

          <select
            class="cursor-pointer mx-3 bg-transparent outline-none"
            name="type"
            :value="typeQuery"
            v-model="typeQuery"
          >
            <option value="q">Title</option>
            <option value="author">Author</option>
            <option value="subject">Subject</option>
          </select>

          <input
            class="outline-none"
            type="text"
            placeholder="Enter search"
            v-model="valueQuery"
            :disabled="isLoading"
            autofocus
          />
        </div>

        <button
          class="cursor-default h-10 px-4 ml-4 bg-main-200 rounded-lg hover:scale-95"
          :class="{ 'cursor-pointer': valueQuery }"
          :disabled="!valueQuery"
          @click="search"
        >
          <fa-icon v-if="isLoading" class="animate-spin text-white mr-2" icon="spinner" />
          <span class="text-white">Search</span>
        </button>
      </div>

      <div v-if="!isLoadingMain">
        <hr />

        <div class="content py-6">
          <book :data="bookSelected" />
        </div>

        <hr />

        <div class="recommended pt-6 pb-8">
          <h3 class="mb-6 text-xl text-center font-bold">
            Books about <span class="capitalize" v-text="category"></span>
          </h3>
          <books :data-list="books" @select-book="bookSelected = $event" />
        </div>
      </div>

      <div v-else class="loading m-auto flex items-center justify-center">
        <fa-icon class="text-4xl animate-spin" icon="spinner" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      bookList: [],
      bookSelected: null,
      category: 'design',
      typeQuery: 'q',
      valueQuery: '',
      isLoading: false,
      isLoadingMain: false
    }
  },

  computed: {
    ...mapGetters({
      getBooks: 'books/getBooks'
    }),
    books() {
      return this.getBooks.filter((_, i) => i < 5)
    }
  },

  methods: {
    ...mapActions({
      fetchBooks: 'books/fetchBooks'
    }),
    ...mapMutations({
      setSection: 'states/SET_SECTION'
    }),
    async search() {
      this.isLoading = true

      await this.fetchBooks({
        type: this.typeQuery,
        value: this.valueQuery
      })

      this.$router.push({ name: 'Books' })
    },
    async loadBooks() {
      this.isLoadingMain = true

      await this.fetchBooks({
        type: 'subject',
        value: this.category
      })

      this.bookSelected = this.books[0]
      this.isLoadingMain = false
    }
  },

  watch: {
    category() {
      this.loadBooks()
    }
  },

  created() {
    this.setSection('Home')
    this.loadBooks()
  }
}
</script>

<style scoped>
.home main .loading {
  height: calc(100vh - 80px - 56px - 32px);
  width: 100%;
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

ul.sections li {
  cursor: pointer;
  margin: 6px 0 6px 15px;
  padding: 3px 5px;
}

ul.sections li:hover {
  background: #c5d3dc59;
}

main .search button:disabled {
  background: #c5d3dc59;
}

main .search button:disabled span {
  color: #000000b0;
}
</style>
