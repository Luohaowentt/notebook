//  接收组建通知 出发mutation 调用简介状态的方法
import {ADD_NOTE, DELETE_NOTE, LIKE_NOTE} from '@/store/mutation-types'

export default {
  addNote ({commit}, note) {
    commit(ADD_NOTE, {note})
  },
  deleteNote ({commit}, id) {
    commit(DELETE_NOTE, {id})
  },
  isLike ({commit}, isLike) {
    commit(LIKE_NOTE, isLike)
  }
}
