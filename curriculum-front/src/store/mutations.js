import Vue from 'vue'

export default {
  updateCurricula(state, curricula) {
    state.curricula = curricula
  },
  appendCurriculum(state, curriculum) {
    state.curricula.push(curriculum)
  },
  updateCurriculum(state, payload) {
    // payload: { id, body }
    // find and update one curriculum
  },
  updateSection(state, payload) {
    const { curriculumId, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const len = state.curricula[cIndex].sections.length
    state.curricula[cIndex].sections.splice(len, 0, body)
  },
  removeSection(state, payload) {
    const { curriculumId, sectionId } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })
    state.curricula[cIndex].sections.splice(sIndex, 1)
  },
  upsertItem(state, payload) {
    const { curriculumId, sectionId, type, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })

    if (payload.itemId !== undefined) {
      const iIndex = state.curricula[cIndex].sections[sIndex][type].findIndex((obj) => {
        return obj._id === payload.itemId
      })

      const { name, url, isCompleted } = body

      let updatedItem = {}
      if (name) updatedItem.name = name
      if (url) updatedItem.url = url
      if (isCompleted) updatedItem.isCompleted = isCompleted

      let item = {
        ...state.curricula[cIndex].sections[sIndex][type][iIndex],
        ...updatedItem
      }
      state.curricula[cIndex].sections[sIndex][type].splice(iIndex, 1, item)
    } else {
      state.curricula[cIndex].sections[sIndex][type].push(body)
    }
  },
  removeItem(state, payload) {
    const { curriculumId, sectionId, type, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })
    const iIndex = state.curricula[cIndex].sections[sIndex][type].findIndex((obj) => {
      return obj._id === payload.itemId
    })
    state.curricula[cIndex].sections[sIndex][type].splice(iIndex, 1)
  },
  updateSnackbar(state, settings) {
    state.snackbar = {
      ...state.snackbar,
      ...settings
    }
  },
  updateCount(state, count) {
    state.completeCounts = count
  }
}
