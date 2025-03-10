<script setup>
import { ref,watch,computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const isHomePage = ref(route.path === '/');
//标识显示
const isBlack = computed(()=>{
    return isHomePage.value;
})
watch(
  () => route.path, // 监视路由路径
  (newPath) => {
    isHomePage.value = newPath === '/'; // 更新 isHomePage
  }
);


</script>

<template>
    <nav :class="{'homepage-navbar': isHomePage, 'other-page-navbar': !isHomePage}">
        <div class="logo">
            <div v-if="isBlack" class="logo-item">
                <img src="../../public/svg/ziqiangBlack.svg" alt="" class="ziqiangsvg">
                <div class="br1"></div>
            </div>
            <div v-else class="logo-item">
                <img src="../../public/svg/ziqiangWhite.svg" alt="" class="ziqiangsvg">
                <div class="br2"></div>
            </div>

        </div>
        <ul class="header">
            <li>
                <router-link to="/" :class="{ 'active': $route.name === 'home' }" class="header-item">首页</router-link>
            </li>
            <li>
                <router-link to="/products" :class="{ 'active': $route.name === 'products' }"
                    class="header-item">产品活动</router-link>
            </li>
            <li>
                <router-link to="/news" :class="{ 'active': $route.name === 'news' }" class="header-item">新闻动态</router-link>
            </li>
            <li>
                <router-link to="/about" :class="{ 'active': $route.name === 'about' }"
                    class="header-item">关于我们</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="less">
.other-page-navbar{
    background: linear-gradient(to bottom, #000000d4 0%,rgba(0, 0, 0, 0.313) 80%, #00000000 100%);
}
nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    .logo{
        height: 10vh;
        display: flex;
        align-items: center;
        margin-left: 3vw;
        .ziqiangsvg{
            height: 4vh;
            margin: 1.5vh;
        }
        .br1{
            height: 0;
            width: 50vw;
            border: solid 1px black;
        }
        .br2{
            height: 0;
            width: 8vw;
            border: solid 1px white;
        }
    }

    .header {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        height: 7vh;
        width: 40vw;
        align-items: center;
        margin-right: 2vw;
        .header-item {
            cursor: pointer;
            color: #FFFFFFCC;
            font-size: 1.3em;
            font-weight: 400;
            text-decoration: none;
        }

        .header-item:hover {
            color: #FFFFFF;
        }

        .active {
            font-weight: bold;
            color: #FFFFFF;

        }
    }
}
</style>
