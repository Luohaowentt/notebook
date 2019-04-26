<template>
<div class="home">
  <p>您好， 现在是{{nowTime}}</p>
  <el-card class="box-card">
    <p> 请问您需要什么帮助</p>
    <el-button>创建新的笔记</el-button>
    <el-button>拉取测试数据</el-button>
    <el-button>联系作者</el-button>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      nowTime: ''
    }
  },
  mounted () {
    this.nowTimes()
  },
  methods: {
    // 获取当前时间函数
    timeFormate (timeStamp) {
      let year = new Date(timeStamp).getFullYear()
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? '0' + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1
      let date = new Date(timeStamp).getDate() < 10 ? '0' + new Date(timeStamp).getDate() : new Date(timeStamp).getDate()
      let hh = new Date(timeStamp).getHours() < 10 ? '0' + new Date(timeStamp).getHours() : new Date(timeStamp).getHours()
      let mm = new Date(timeStamp).getMinutes() < 10 ? '0' + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes()
      this.nowTime = year + '年' + month + '月' + date + '日' + ' ' + hh + ':' + mm
    },
    // 定时器函数
    nowTimes () {
      this.timeFormate(new Date())
      setInterval(this.nowTimes, 30 * 1000)
    }
  }
}
</script>

<style scoped>
.home{
  margin: 50px;
}
</style>
