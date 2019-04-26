//  包含多给由action触发 直接更新状态的方法的对象
import {ADD_NOTE, DELETE_NOTE, LIKE_NOTE} from '@/store/mutation-types'

export default {
  [ADD_NOTE] (state, {note}) {
    state.notes.unshift(note)
  },
  [DELETE_NOTE] (state, {id}) {
    state.notes.splice(id, 1)
  },
  [LIKE_NOTE] (state, isLike) {
    const id = isLike.id
    state.notes[id].favorite = isLike.isLike
  }
}
