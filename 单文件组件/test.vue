<template>
  <div id="app">
      <h1 @click="func">你好</h1>
      <h2>{{food}}</h2>
      <ul>
          <li v-for="(item,index) in list" :key='index'>{{item}}</li>
          
      </ul>
  </div>
</template>

<script>
import './css/style.css'
export default {
    data(){
        return {
            food:"西兰花炒蛋",
            list:['1','2','3']
        }
    },
    methods:{
        func(){
            alert('你好么')
        }
    }
}
</script>

<style>
    #app{
       background-color: rebeccapurple; 
    }
</style>