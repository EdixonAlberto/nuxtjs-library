export const state = () => ({
  currentSection: 'Home'
})

export const getters = {
  getSection(state) {
    return state.currentSection
  }
}

export const mutations = {
  SET_SECTION(state, section) {
    state.currentSection = section
  }
}

export const actions = {}
