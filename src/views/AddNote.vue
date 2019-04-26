<template>
  <div class="addnote-main">
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
export default {
  name: 'AddNote',
  data () {
    return {
      note: {
        title: '',
        favorites: false,
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.note.title && this.note.content) {
        this.$store.dispatch('addNote', this.note)
        this.note = {
          title: '',
          favorites: false,
          content: ''
        }
        this.$message({
          message: '创建成功！',
          type: 'success'
        })
      } else {
        this.$message({
          message: '标题和内容不能为空',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
.addnote-main{
  margin-top: 30px;
}
</style>
