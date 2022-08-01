export const state = () => ({
  books: []
})

export const getters = {
  GET_BOOKS(state) {
    return state.books
  }
}

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books.map(book => ({
      title: book.title,
      subjects: book.subject,
      cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null
    }))
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
