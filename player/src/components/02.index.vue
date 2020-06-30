<template>
  <div class="index">
      <!-- 左侧导航` -->
      <div class="nav">
          <ul>
              <li><router-link to="/discovery">发现音乐</router-link></li>
              <li ><router-link to="/playlists">推荐歌单</router-link></li>
              <li><router-link to="/songs">最新音乐</router-link></li>
              <li><router-link to="/mvs">最新mv</router-link></li>

          </ul>
      </div>
     <div class="main">
          <!-- <discovery></discovery> -->
          <router-view></router-view>
     </div>
    </div>
</template>

<script>
import discovery from './03.discovery.vue'
export default {
    components:{
        discovery,
    }
}
</script>

<style>
    .index{
        display: flex;
        height: 830px;  
    }
   .index .nav ul .li{
      text-align: center;
      margin: 10px;
   }
    .main{
        background-color: orange;
        flex: 1;
    }
    .index .nav{
        width:200px;
        background-color: #ededed;
    }
</style>