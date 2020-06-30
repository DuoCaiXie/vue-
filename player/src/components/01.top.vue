<template>
  <div class="top">
      <img src="../assets/top.png" alt="" style="width:1270px"> 
      <input type="text" placeholder="🔍搜索" @keyup.enter="toSearch" v-model="inputValue">
  </div>
</template>

<script>

export default {
    data(){
        return {
            inputValue:""
        }
    },
    methods:{
        toSearch(){
            if(this.inputValue==''){
                alert('请输入内容')
            }else{
                // this.$router.push('/result')
                this.$router.push('/result?q='+this.inputValue)
                 
            }
        }
    }
}
</script>

<style>
.top{
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
}
</style>


