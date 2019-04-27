import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Note from '@/views/Note'
import Home from '@/views/Home'
import AddNote from '@/views/AddNote'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/note/:id',
      name: 'Note',
      component: Note
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/addNote',
      name: 'addNote',
      component: AddNote
    }
  ]
})
