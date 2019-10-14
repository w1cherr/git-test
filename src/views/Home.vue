<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="commonClass">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>这里是a分支</div>
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
