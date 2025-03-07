<script setup>
import { ref, onMounted } from 'vue';
import Carousel from "../components/Carousel.vue"
import ProductsSection from "../components/ProductsSection.vue"
// 存储四张背景图的路径
const backgroundImages = [
    '../../public/img/mainbg1.png',
    '../../public/img/mainbg2.png',
    '../../public/img/mainbg3.png',
    '../../public/img/mainbg4.png'
];
// 当前背景图的索引
const currentIndex = ref(0);
// 当前背景图的路径
const currentBackground = ref(backgroundImages[currentIndex.value]);

function changeBackground() {
    // 更新索引
    currentIndex.value = (currentIndex.value + 1) % backgroundImages.length;
    // 更新当前背景图的路径
    currentBackground.value = backgroundImages[currentIndex.value];
}

onMounted(() => {
    // 页面挂载后立即调用一次，设置初始背景图
    changeBackground();
    // 每隔 5 秒切换一次背景图
    setInterval(changeBackground, 5000);
});

</script>

<template>
    <div class="main">
        <div :style="{ backgroundImage: `url(${currentBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 3s ease-in-out' }"
            class="main-part1">
            <div class="intro-left">
                <div class="title1-box">
                    <h1 class="title1">自从有你</h1>
                    <h1 class="title1">我们更强</h1>
                </div>
                <div class="title2-box">
                    <p class="title2">服务学生生活</p>
                    <p class="title2">记录学校发展</p>
                    <p class="title2">做有趣有品质的互联网产品</p>
                </div>
                <div class="br"></div>
                <div>
                    <img src="../../public/svg/down.svg" alt="" class="down">
                </div>
            </div>
            <div class="intro-right">
                <img src="../../public/img/mainTitle1.png" alt="" class="intro-right-content">
            </div>

        </div>
        <div class="main-part2">
            <img class="title-news1" src="../../public/img/hot news1.png" />
            <img class="title-news2" src="../../public/img/products.png" />
            <img class="news-center" src="../../public/img/newscenter.png" />
            <img class="news-lb" src="../../public/img/newslb.png" />
            <img class="news-rb" src="../../public/img/newsrb.png" />
            <img class="news-rt" src="../../public/img/newsrt.png" />
            <section class="contentBox">
                <div class="news-title">新闻动态</div>
                <Carousel />
                <div class="news-title products-title">历任产品</div>
                <ProductsSection class="products" />
            </section>
        </div>
        <div class="main-part3">
            <div class="about-title">
                <div class="title1"><span>Get to</span><span>know us</span></div>
                <div class="title2">
                    <span>了解</span>
                    <span>我们</span>
                </div>
            </div>
            <router-link to="/products">
                <img src="../../public/img/mainproduct.png" alt="" class="mainabout1">
            </router-link>
            <router-link to="/news">
                <img src="../../public/img/mainnews.png" alt="" class="mainabout2">
            </router-link>
            <router-link to="/about">
                <img src="../../public/img/mainziqiang.png" alt="" class="mainabout3">
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    left: 0;
    top: 0;
    scroll-snap-type: y mandatory;

    .main-part1,
    .main-part2,
    .main-part3 {
        scroll-snap-align: start;
    }

    .main-part1 {
        height: 100vh;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;

        .intro-right {
            flex: 1;
            background-image: url("../../public/img/Union.png");
            height: 100vh;
            background-size: auto 100vh;
            background-position: right;
            background-repeat: no-repeat;
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: flex-end;

            .intro-right-content {
                position: relative;
                height: 40vh;
                transform: translateY(16vh);
            }
        }

        .intro-left {
            transform: translate(10vw, 20vh);

            .title1-box {
                margin-bottom: 12vh;

                .title1 {
                    font-size: 3.5em;
                    font-weight: 600;
                    line-height: 0.8em;
                }
            }

            .title2 {
                font-size: 2.3em;
                font-weight: 500;
                line-height: 0.5em;
            }

            .br {
                margin-top: 8vh;
                height: 0;
                width: 30vw;
                border: solid 1px black;
            }

            .down {
                height: 8vh;
                position: relative;
                animation: moveDown 2s ease-in infinite;
                transform: translate(38vw, 10vh);
            }

            /* 定义向下移动的动画 */



        }
    }

    @keyframes moveDown {
        0% {
            opacity: 0;
        }

        50% {

            /* 向下移动 20px */
        }

        100% {
            transform: translateY(0);
        }
    }

    .main-part2 {
        height: 100vh;
        background-color: #353E41;
        overflow-x: hidden;

        .title-news1 {
            height: 10vh;
            position: absolute;
            transform: translate(10vw, 10vh);
        }

        .title-news2 {
            height: 10vh;
            position: absolute;
            transform: translate(46vw, 50vh);

        }

        .news-center {
            position: absolute;
            height: 5vh;
            transform: translate(6vw, 50vh);

        }

        .news-lb {
            height: 35vh;
            position: absolute;
            transform: translate(3vw, 62vh);

        }

        .news-rb {
            height: 90vh;
            position: absolute;
            transform: translate(96vw, 9vh);

        }

        .news-rt {
            height: 20vh;
            max-width: 20vw;
            position: absolute;
            transform: translate(76vw, 12vh);

        }

        .contentBox {
            transform: translate(5vw, 14vh);
            display: flex;
            flex-direction: column;

            .news-title {
                color: white;
                font-family: PingFang SC;
                font-weight: 600;
                font-size: 2em;
                line-height: 1em;
            }

            .products-title {
                margin-top: 6vh;
            }

            .products {
                margin-top: 4vh;

            }

        }
    }

    .main-part3 {
        height: 100vh;
        overflow-y: hidden;
        background-color: #353E41;

        .about-title {
            position: absolute;
            right: 3vw;
            transform: translateY(11vh);
            color: white;
            display: flex;
            flex-direction: row;

            .title1 {
                display: flex;
                flex-direction: column;
                align-items: end;
                margin-right: 1vw;

                span {
                    font-size: 2em;
                }
            }

            .title2 {
                display: flex;
                flex-direction: column;

                span {
                    font-family: REEJI-ZhenyanGB2.0;
                    font-weight: 900;
                    font-size: 7em;
                    line-height: 1em;
                    text-align: center;
                }

            }
        }

        .mainabout1 {
            position: absolute;
            width: 60vw;
            z-index: 4;
            clip-path: polygon(0 0, 0% 0%, 100% 100%, 0% 100%);

            &:hover {
                filter: brightness(1.2);
                /* 增加亮度 */
            }
        }

        .mainabout2 {
            position: absolute;
            width: 92vw;
            z-index: 3;
            clip-path: polygon(0 0, 30% 0%, 97% 100%, 0% 100%);

            &:hover {
                filter: brightness(1.2);
                /* 增加亮度 */
            }
        }

        .mainabout3 {
            position: absolute;
            width: 100%;
            z-index: 2;
            clip-path: polygon(0 0, 62.5% 0%, 100% 60.2%, 100% 100%, 0% 100%);

            &:hover {
                filter: brightness(1.2);
                /* 增加亮度 */
            }
        }
    }
}

/* 隐藏滚动条 */
.main::-webkit-scrollbar {
    display: none;
}</style>