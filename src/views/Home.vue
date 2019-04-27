<template>
<div class="home">
  <p>您好， 现在是{{nowTime}}</p>
  <el-card class="box-card">
    <p> 请问您需要什么帮助</p>
    <router-link to="/addNote"><el-button>创建新的笔记</el-button></router-link>
    <el-button @click="test">拉取测试数据</el-button>
    <el-button @click="authorFlag = !authorFlag">联系作者</el-button>
    <img v-if="authorFlag" src="../assets/weixin.png" alt="微信" style="width: 300px; float: right">
  </el-card>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      nowTime: '',
      authorFlag: false
    }
  },
  computed: {
    ...mapState(['noteId'])
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
    },
    test () {
      if (window.confirm('是否添加10条笔记')) {
        for (let i = 0; i < 10; i++) {
          const note = {
            id: this.noteId * 1,
            title: '测试笔记' + (i + 1),
            favorite: false,
            content: '测试测试'
          }
          this.$store.dispatch('addNote', note)
        }
      }
    }
  }
}
</script>

<style scoped>
.home{
  margin: 50px;
}
</style>
