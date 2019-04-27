<template>
  <div class="add-note-main">
    <el-form ref="note" :model="note" label-width="80px">
      <el-form-item label="笔记名称">
        <el-input v-model="note.title"></el-input>
      </el-form-item>
      <el-form-item label="笔记内容" prop="content">
        <el-input type="textarea"  :autosize="{ minRows: 30}" v-model="note.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'AddNote',
  data () {
    return {
      note: {
        id: 0,
        title: '',
        favorite: false,
        content: ''
      }
    }
  },
  computed: {
    ...mapState(['noteId'])
  },
  methods: {
    onSubmit () {
      if (this.note.title && this.note.content) {
        this.note.id = this.noteId
        this.$store.dispatch('addNote', this.note)
        this.note = {
          id: this.noteId * 1,
          title: '',
          favorite: false,
          content: ''
        }
        this.$notify({
          message: '创建成功！',
          type: 'success'
        })
      } else {
        this.$notify({
          message: '标题和内容不能为空',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
.add-note-main{
  margin-top: 30px;
}
</style>
