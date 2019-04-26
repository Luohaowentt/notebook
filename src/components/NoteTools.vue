<template>
<div>
  <el-tooltip class="item" effect="dark" content="主菜单" placement="bottom">
    <i class="el-icon-s-grid icon-style" ></i>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="添加笔记" placement="bottom">
    <i class="el-icon-plus icon-style" ></i>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="标记喜欢" placement="bottom">
    <i class="el-icon-star-on icon-style" ></i>
  </el-tooltip><br>
  <el-tooltip class="item" effect="dark" content="删除笔记" placement="bottom">
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
