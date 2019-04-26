<template>
  <div>
    <div class="note-title">
    <h3>{{note.title}}</h3>
    <i v-if="note.favorite" class="el-icon-star-on" style="font-size: 50px; line-height: 65px; color: yellow"></i>
    <i v-else class="el-icon-star-on" style="font-size: 50px; line-height: 65px; color: gainsboro"></i>
    </div>
    <div class="note-edit">
      <el-button v-if="note.favorite" type="primary" size='mini' @click="isLike(false)">取消喜爱</el-button>
      <el-button v-else type="primary"  size='mini' @click="isLike(true)">设为喜爱</el-button>
      <el-button type="primary"  size='mini'> 编辑笔记</el-button>
      <el-button type="primary"  size='mini' @click="delNote"> 删除笔记</el-button>
    </div>
    <hr>
    <p style="white-space: pre-line">{{note.content}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Note',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['notes']),
    noteId () {
      return this.$route.params.id
    },
    note () {
      return this.notes[this.noteId]
    }
  },
  methods: {
    delNote () {
      if (window.confirm('确定要删除这篇' + this.note.title + '吗？')) {
        this.$store.dispatch('deleteNote', this.$route.params.id)
      }
    },
    isLike (like) {
      this.$store.dispatch('isLike', {
        id: this.noteId,
        isLike: like
      })
    }
  }
}
</script>

<style scoped>
  h3{
    display: inline-block;
    margin: 20px 20px;
    float: left;
  }
.note-edit{

}
</style>
