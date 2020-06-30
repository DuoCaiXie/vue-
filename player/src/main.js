import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入
import VueRouter from 'vue-router'
// use
Vue.use(VueRouter)
// 导入需要通过路由管理的组件
import discovery from './components/03.discovery.vue'
import playlists from './components/04.playlists.vue'
import songs from './components/05.songs.vue'
import mvs from './components/06.mvs.vue'
import results from './components/07.result.vue'



// 创建路由
let router = new VueRouter({
  routes:[
    {
      path:"/",
      component:discovery
    },
    {
      path:"/discovery",
      component:discovery
    },
    {
      path:"/playlists",
      component:playlists
    },
    {
      path:"/songs",
      component:songs
    },
    {
      path:"/mvs",
      component:mvs
    },
    {
      path:"/result",
      component:results
    }

  ]
})
// 挂载,写在new vue中
// 配置规则 通过routes 属性配置地址和路由管理的组件关系

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



