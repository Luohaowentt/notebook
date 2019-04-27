<template>
  <div>
    <h3>My Notes List</h3>
    <el-radio-group v-model="notesType" >
      <el-radio-button label="All Notes"></el-radio-button>
      <el-radio-button label="Favorites"></el-radio-button>
    </el-radio-group>
    <div class="note-list">
      <ul v-if="notesType === 'All Notes'">
        <li v-for="note in notes" :key="note.noteId"> <router-link :to="`/note/${note.id}`">{{note.title}}</router-link></li>
        <p v-if="notes.length === 0"> 您还没有笔记，点击左侧栏加号可以添加笔记</p>
      </ul>
      <ul v-if="notesType === 'Favorites'">
        <li v-for="note in favoriteNotes" :key="note.noteId"> <router-link :to="`/note/${note.id}`">{{note.title}}</router-link></li>
        <p v-if="favoriteNotes.length === 0"> 您还没有笔记标记为喜爱</p>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'NoteCatalog',
  data () {
    return {
      notesType: 'All Notes'
    }
  },
  computed: {
    ...mapState(['notes']),
    ...mapGetters(['favoriteNotes'])
  }
}
</script>

<style scoped>
  ul{
    padding: 0;
  }
  ul li {
    list-style: none;
    text-align: left;
    padding-left: 30px;
    font-size: 20px;
    line-height: 50px;
    transition: .5s;
  }

  li:hover{
  background-color: #ccb4ff;
  }

  a{
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
</style>
