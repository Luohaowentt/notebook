<template>
  <div>
    <h3>My Notes List</h3>
    <el-radio-group v-model="notesType" >
      <el-radio-button label="All Notes"></el-radio-button>
      <el-radio-button label="Favorites"></el-radio-button>
    </el-radio-group>
    <div class="note-list">
      <ul>
        <li v-for="(note, index) in notes" :key="index"> <router-link :to="`/note/${index}`">{{note.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'NoteCatalog',
  data () {
    return {
      notesType: 'All Notes'
    }
  },
  computed: {
    ...mapState(['notes'])
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
