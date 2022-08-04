import { Book } from '@/models/Book'

export const state = () => ({
  booksLanding: [],
  books: []
})

export const getters = {
  getBooks(state) {
    return state.books
  },
  getBookById(state) {
    return id => {
      return state.books.find(book => book.id === id)
    }
  },
  getBooksLanding(state) {
    return state.booksLanding
  }
}

export const mutations = {
  SET_BOOKS(state, bookApiList) {
    const books = bookApiList.map(bookApi => new Book(bookApi))
    state.books = books
  },
  SET_BOOKS_LANDING(state) {
    state.booksLanding = state.books.filter((_, i) => i < 5)
  }
}

export const actions = {
  async fetchBooks({ commit }, { type, value }) {
    try {
      const data = await this.$axios.$get(`http://openlibrary.org/search.json?${type}=${value}`)

      commit('SET_BOOKS', data.docs)
    } catch (error) {
      commit('SET_BOOKS', [])
    }
  }
}
