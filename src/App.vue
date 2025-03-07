<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="body">
    <Header/>
    <RouterView></RouterView>
    <Footer/>
  </div>

</template>

<style>
.body{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  overflow-x: hidden; /* 禁止水平滚动条 */
  font-size: 1vw;
}


</style>