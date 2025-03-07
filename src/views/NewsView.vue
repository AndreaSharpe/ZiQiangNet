<script setup>
import NewsCarousel from "/src/components/NewsCarousel.vue"

import { ref } from "vue";

const images = ref([
    { src: "/img/Proziqiang.png", qrCode: "/img/proziqiangQR.jpeg", alt: "logo 1", class: "large-logo", isQrVisible: false },
    { src: "/img/Prohand.png", qrCode: "/img/prohandQR.jpeg", alt: "logo 2", class: "small-logo top-right", isQrVisible: false },
    { src: "/img/Propocket.png", qrCode: "/img/propocketQR.png", alt: "logo 3", class: "small-logo middle-right", isQrVisible: false },
    { src: "/img/Proplace.png", qrCode: "/img/proplaceQR.jpeg", alt: "logo 4", class: "small-logo bottom-left", isQrVisible: false },
    { src: "/img/Proclass.png", qrCode: "/img/proclassQR.jpeg", alt: "logo 5", class: "small-logo bottom-middle", isQrVisible: false },
    { src: "/img/Proeat.png", qrCode: "/img/proeatQR.jpeg", alt: "logo 6", class: "small-logo bottom-right", isQrVisible: false },
]);

// 切换图片和二维码
const toggleImage = (index) => {
    images.value[index].isQrVisible = !images.value[index].isQrVisible;
};
</script>

<template>
    <div class="news">
        <img src="/img/newsbgletter.png" alt="" class="hotnews-img">
        <div class="left-part">
            <NewsCarousel class="news-carsouel" />
            <div class="guide-box">
                <div class="guide-title">
                    <p>大学</p>
                    <p>生活</p>
                    <p>指南</p>
                </div>
                <a href="https://mp.weixin.qq.com/s/tvTe1JO6lW1DSUhXbLX3Lg" class="article"><img
                        src="/public/img/welcome.jpg" alt=""></a>
                <a href="https://mp.weixin.qq.com/s?__biz=MzkzMzU2MTM5OQ==&mid=2247503666&idx=1&sn=45ae22dca866dde52dbd010ed96ec0e7&chksm=c2481a6af53f937c2dacf5e74564c9141e433553ac073785241da7636c5b5c3b3b154040d055&scene=126#rd"
                    class="article" target="_blank"><img src="/public/img/recruitment.jpg" alt=""></a>
            </div>
        </div>
        <div class="right-part">
            <div class="top">
                <div class="intro-box">
                    <div class="intro1">做有趣有品质的互联网产品</div>
                    <div class="intro2">Make interesting and high-quality Internet products</div>
                    <img src="/public/img/aboutnewsimg.png" alt="">
                </div>
                <div class="title-box">
                    <div class="title1">
                        <span>产品</span>
                        <span>活动</span>
                    </div>
                    <div class="title2">
                        <span>product</span>
                        <span>activities</span>
                    </div>
                </div>

            </div>
            <div class="bottom">
                <!-- 左侧文本区域 -->
                <div class="text-section">
                    <div class="text-block top-text">
                        <p class="title">公众号新闻</p>
                        <p class="subtitle">更多趣事等你来看</p>
                        <div class="arrow">→</div>
                    </div>

                    <div class="text-block bottom-text">
                        <!-- <img src="/public/img/aboutpenimg.png" alt=""> -->
                        <p class="title">招新启示</p>
                        <p class="subtitle">自从有你 我们更强</p>
                        <div class="arrow">←</div>
                    </div>
                </div>

                <!-- 右侧网格区域 -->
                <div class="grid-section">
                    <div v-for="(image, index) in images" :key="index" class="grid-item" :class="image.class"
                        @mouseenter="toggleImage(index)" @mouseleave="toggleImage(index)">
                        <img :src="image.isQrVisible ? image.qrCode : image.src" :alt="image.alt" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="less">
.news {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color: #353E41;
    display: flex;
    flex-direction: row;

    .hotnews-img {
        margin-left: 3vw;
        width: 6vw;

    }

    .left-part {
        margin-top: 10vh;
        width: 50vw;
        display: flex;
        flex-direction: column;

        .guide-box {
            margin-top: 8vh;
            height: 28vh;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .guide-title {
                color: white;
                font-size: 2em;
                line-height: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .article {
                background-color: white;
                width: 40%;
                border-radius: 20px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }
        }
    }

    .right-part {
        margin-left: 2vw;

        .top {
            margin-top: 10vh;
            display: flex;
            flex-direction: row;
            color: white;
            text-align: end;

            .title-box {
                margin-left: 3vw;

                .title1 {
                    display: flex;
                    flex-direction: column;
                    font-family: REEJI-ZhenyanGB2.0;
                    font-weight: 900;
                    font-size: 8em;
                    line-height: 1.1em;
                    letter-spacing: 0%;

                }

                .title2 {
                    margin-top: 2vh;
                    display: flex;
                    flex-direction: column;
                    font-family: PingFang SC;
                    font-weight: 600;
                    font-size: 3em;
                    line-height: 1em;
                    letter-spacing: 0%;
                }
            }

            .intro-box {
                padding-left: 2vw;
                width: 13vw;
                margin-top: 2vh;

                .intro1 {
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 1.7em;
                    line-height: 1.4em;
                    letter-spacing: 0%;

                }

                .intro2 {
                    position: relative;
                    margin-top: 0.8vh;
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 1.2em;
                    line-height: 1.4em;
                    letter-spacing: 0%;
                    z-index: 2;
                }

                img {
                    width: 16vw;
                    transform: translateY(-6vh);
                }
            }
        }

        .bottom {
            transform: translateY(-3vh);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35vw;

            /* 左侧文本区域 */
            .text-section {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                color: white;
                height: 16vw;

                img {
                    position: relative;
                    width: 40%;
                }

                .text-block {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 10vw;

                    .title {
                        font-size: 1.6em;
                        font-weight: bold;
                        line-height: 0;
                    }

                    .subtitle {
                        font-size: 1.3em;
                        margin-top: 5px;
                        line-height: 1em;
                    }
                }



                /* 箭头 */
                .arrow {
                    font-size: 3em;
                    font-weight: bold;
                    line-height: 0;
                }
            }

            /* 每个文本块 */
            .top-text {
                text-align: end;
            }

            /* 右侧网格区域 */
            .grid-section {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 10px;
                width: 20vw;
                height: 20vw;
                padding: 10px;
                border-radius: 10px;
            }

            /* logo 样式 */
            .grid-item {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f5f5f5;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
            }

            .grid-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            /* 具体 logo 布局 */
            .large-logo {
                grid-column: span 2;
                grid-row: span 2;
            }

            .small-logo {
                grid-column: span 1;
                grid-row: span 1;
            }
        }
    }
}</style>