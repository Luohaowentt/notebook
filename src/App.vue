<template>
  <div id="app">
    <el-row style="height: 100%">
      <el-col :span="2" class="tools-main"><NoteTools/></el-col>
      <el-col :span="8" class="catalog-main"><NoteCatalog/></el-col>
      <el-col :span="14" class="note-main"><NoteMain/></el-col>
    </el-row>
  </div>
</template>

<script>
import NoteCatalog from '@/components/NoteCatalog'
import NoteMain from '@/components/NoteMain'
import NoteTools from '@/components/NoteTools'
export default {
  name: 'App',
  components: {NoteMain, NoteCatalog, NoteTools}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%
}
.tools-main{
  height: 100%;
  background: #c7def0;
  text-align: center;
  padding: 50px 0;
}
.catalog-main{
  height: 100%;
  background:honeydew;
  text-align: center;
  padding: 20px 0;
  overflow: auto;
}
.note-main{
  height: 100%;
  background: whitesmoke;
  padding: 20px 30px;
  overflow: auto;
}
a{
  text-decoration: none;
}
a:link{
  color: black;
}
/*访问过的链接*/
a:visited{
  color: black;
}
/*鼠标经过时*/
a:hover{
  color: black;
}
/*在鼠标点击的同时*/
a:active{
  color: black;
}

</style>
