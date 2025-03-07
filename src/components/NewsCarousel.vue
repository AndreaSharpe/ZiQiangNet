<script setup>
import { ref } from "vue";
import menu from "../newsData.js";

const activeIndex = ref(0); // 当前选中的菜单索引
const carouselIndex = ref(0); // 当前轮播图索引
const carousel = ref(null); // 轮播图实例
const menuItems = ref(menu)
// 各个标签对应的图片数据
// const menuItems = ref([
//     {
//         name: "掌上武大",
//         images: [
//             { url: "https://source.unsplash.com/800x500/?university", title: "掌上武大 1", date: "2025.2.6" },
//             { url: "https://source.unsplash.com/800x500/?campus", title: "掌上武大 2", date: "2025.2.7" }
//         ]
//     },
//     {
//         name: "吃乎",
//         images: [
//             { url: "https://source.unsplash.com/800x500/?food", title: "吃乎 1", date: "2025.2.8" },
//             { url: "https://source.unsplash.com/800x500/?restaurant", title: "吃乎 2", date: "2025.2.9" }
//         ]
//     },
//     {
//         name: "淘课啦",
//         images: [
//             { url: "https://source.unsplash.com/800x500/?education", title: "淘课啦 1", date: "2025.2.10" },
//             { url: "https://source.unsplash.com/800x500/?study", title: "淘课啦 2", date: "2025.2.11" }
//         ]
//     },
//     {
//         name: "文创",
//         images: [
//             { url: "https://source.unsplash.com/800x500/?art", title: "文创 1", date: "2025.2.12" },
//             { url: "https://source.unsplash.com/800x500/?design", title: "文创 2", date: "2025.2.13" }
//         ]
//     },
//     {
//         name: "新闻",
//         images: [
//             { url: "https://source.unsplash.com/800x500/?news", title: "新闻 1", date: "2025.2.14" },
//             { url: "https://source.unsplash.com/800x500/?journalism", title: "新闻 2", date: "2025.2.15" }
//         ]
//     }
// ]);

// 当前显示的图片
const activeImages = ref(menuItems.value[0].images);

// 切换分类（点击左侧菜单）
const changeCategory = (index) => {
    activeIndex.value = index;
    activeImages.value = menuItems.value[index].images;
    carouselIndex.value = 0;
    console.log(activeImages.value)
    // 让轮播图回到第一张
    setTimeout(() => {
        carousel.value?.setActiveItem(0);
    }, 100);
};

// 切换轮播图（点击指示器）
const changeSlide = (index) => {
    carouselIndex.value = index;
    carousel.value?.setActiveItem(index);
};

// 监听 `el-carousel` 变化，更新 `carouselIndex`
const handleCarouselChange = (index) => {
    carouselIndex.value = index;
    
};
</script>
<template>

    <div class="container">
        <!-- 左侧菜单 -->
        <div class="sidebar">
            <div v-for="(item, index) in menuItems" :key="index" class="menu-item"
                :class="{ active: index === activeIndex }" @click="changeCategory(index)">
                {{ item.name }}
            </div>
        </div>

        <!-- 右侧轮播图 -->
        <div class="carousel-container">
            <el-carousel ref="carousel" indicator-position="none" height="45vh" @change="handleCarouselChange">
                <el-carousel-item v-for="(image, idx) in activeImages" :key="idx">
                    <a class="carousel-content" :href="image.link" target="_blank">
                        <img :src="image.url" alt="轮播图" class="carousel-image" />
                        <div class="overlay">
                            <h3>{{ image.title }}</h3>
                            <p>{{ image.date }}</p>
                        </div>
                    </a>
                </el-carousel-item>
            </el-carousel>

            <!-- 自定义轮播导航 -->
            <div class="custom-indicators">
                <span v-for="(image, idx) in activeImages" :key="idx" class="indicator-dot"
                    :class="{ active: idx === carouselIndex }" @click="changeSlide(idx)"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 页面布局 */
.container {
    display: flex;
    width: 100%;
}

/* 左侧菜单栏 */
.sidebar {
    background-color:#00bfff00;
    display: flex;
    flex-direction: column;
    z-index: 10;
    text-align: center;
    margin-top: 3vh;
}

.menu-item {
    padding: 6px 20px 6px 20px;
    margin: 6px 0 6px 0;
    color: white;
    font-size: 1.4em;
    cursor: pointer;
}

.menu-item:hover,
.menu-item.active {
    background-color: #00bfff;
    border-radius: 3px;
    color: #353E41;
}

/* 轮播图区域 */
.carousel-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: white;
}

.carousel-content {
    position: relative;
    width: 100%;
    height: 45vh;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

/* 文字覆盖层 */
.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: end;
    border-radius:0 0 10px 10px;
    h3{
        margin-right: 20px;
    }
    p{
        margin-right: 20px;
    }
}

/* 自定义轮播导航 */
.custom-indicators {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.indicator-dot {
    width: 12px;
    height: 12px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
}

.indicator-dot.active {
    background-color: #00bfff;
}
</style>