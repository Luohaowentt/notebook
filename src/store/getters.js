// 包含所有基于state的getter计算属性
export default {
  favoriteNotes (state) {
    let faveriteNotes = []
    state.notes.forEach(note => {
      if (note.favorite) {
        faveriteNotes.push(note)
      }
    })
    return faveriteNotes
  }
}
