<template>
<div>
  <el-tooltip class="item" effect="dark" content="主菜单" placement="bottom">
    <router-link to="/home"><i class="el-icon-s-grid icon-style" ></i></router-link>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="添加笔记" placement="bottom">
    <router-link to="/addNote"><i class="el-icon-plus icon-style" ></i></router-link>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="管理收藏" placement="bottom">
    <i class="el-icon-star-on icon-style" ></i>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="批量删除" placement="bottom">
    <i class="el-icon-delete-solid icon-style" ></i>
  </el-tooltip><br>
</div>
</template>

<script>
export default {
  name: 'Leader'
}
</script>

<style scoped>
  .icon-style{
    display: block;
    margin-top: 20px;
    font-size: 60px;
    line-height: 60px;
    transition: 1s;
  }

  i:hover{
    color: cornflowerblue;
  }
</style>
