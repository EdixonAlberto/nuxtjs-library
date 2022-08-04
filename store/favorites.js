export const state = () => ({
  favorites: []
})

export const getters = {
  getFavorites(state) {
    return state.favorites
  },
  getFavoriteById(state) {
    return id => {
      return state.favorites.find(favorite => favorite.id === id)
    }
  }
}

export const mutations = {
  SET_FAVORITE(state, book) {
    state.favorites.push(book)
  },
  DEL_FAVORITE(state, id) {
    const favorites = state.favorites.filter(favorite => favorite.id !== id)
    state.favorites = favorites
  }
}

export const actions = {
  toggle({ state, commit }, book) {
    const bookExist = state.favorites.find(favorite => favorite.id === book.id)

    if (bookExist) commit('DEL_FAVORITE', book.id)
    else commit('SET_FAVORITE', book)
  }
}
