<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="commonClass">
    <HelloWorld msg="Welcome to Your Vue.js App" class="commonClass"/>
    <div>公共代码</div>
    <div>提交了一些公共代码上去</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
