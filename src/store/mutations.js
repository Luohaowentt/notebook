//  包含多给由action触发 直接更新状态的方法的对象
import {ADD_NOTE, DELETE_NOTE, LIKE_NOTE} from '@/store/mutation-types'

export default {
  [ADD_NOTE] (state, {note}) {
    state.notes.unshift(note)
    state.noteId += 1
  },
  [DELETE_NOTE] (state, {id}) {
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === id * 1) {
        state.notes.splice(i, 1)
        return
      }
    }
  },
  [LIKE_NOTE] (state, isLike) {
    const id = isLike.id
    state.notes.find(note => note.id === id).favorite = isLike.isLike
  }
}
