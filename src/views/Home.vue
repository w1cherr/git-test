<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="commonClass">
    <HelloWorld msg="Welcome to Your Vue.js App" class="commonClass"/>
    <div>公共代码</div>
    <div>公共代码2</div>
    <div>b分支个性代码</div>
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
