<script setup>
import { ref, computed, onMounted } from 'vue';
import productsData from "../productsData.js"
// 定义初始激活的产品类型
const activeType = ref('运营类产品');
const operationProducts = productsData.operationProducts;
const technologyProducts = productsData.technologyProducts;

// 计算属性，根据激活类型获取对应的产品列表
const activeProductList = computed(() => {
    return activeType.value === '运营类产品' ? operationProducts : technologyProducts;
});

// 当前激活的产品信息
const activeProduct = ref({});
// 当前激活产品的相关资讯
const activeInfo = ref('');
//选择项索引
const selectedIndex = ref(0);

// 点击产品列表项时展示产品详情的方法
const showProductDetails = (index) => {
    activeProduct.value = activeProductList.value[index];
    activeInfo.value = activeProduct.value.info;
    selectedIndex.value = index;
    console.log(selectedIndex.value)
};
onMounted(() => {
    console.log(activeProductList.value);
    activeProduct.value = activeProductList.value[0];
    activeInfo.value = activeProduct.value.info;
})
</script>

<template>
    <div class="products">
        <section class="products-left">
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
            <div class="intro-box">
                <div class="intro1">做有趣有品质的互联网产品</div>
                <div class="intro2">Make interesting and high-quality Internet products</div>
            </div>
        </section>
        <section class="products-center">
            <!-- 类型切换按钮 -->
            <div class="button-box">
                <button @click="activeType = '运营类产品'">运营类产品</button>
                <button @click="activeType = '技术类产品'">技术类产品</button>
            </div>
            <!-- 产品列表 -->
            <div class="list-box">
                <ul class="list">
                    <li class="list-item" v-for="(item, index) in activeProductList" :key="index"
                        :class="{ 'selected': selectedIndex === index }" @click="showProductDetails(index)"
                        :style="{ backgroundImage: `url(${item.background})` }">
                        {{ item.name }}
                    </li>
                </ul>
                <div class="line"></div>
            </div>

            <!-- 相关资讯 -->
            <div class="information-box">
                <span class="information-title">相关资讯</span>
                <div class="information-content-box">
                    <h3>技术支持:</h3>
                    <p v-if="activeInfo">{{ activeInfo }}</p>
                </div>
                <RouterLink class="about-button" to="/about">
                    <span>
                        更多部门信息
                    </span>
                    <img src="../../public/svg/rightblack.svg" alt="" class="defaultimg">
                    <img src="../../public/svg/right.svg" alt="" class="hoverimg">

                </RouterLink>
            </div>

        </section>
        <section class="products-right">
            <!-- 产品详情展示 -->
            <div class="right-detail">
                <h2>{{ activeProduct.name }}</h2>

                <p class="products-detailedcontent">{{ activeProduct.introduction }}</p>
            </div>
            <div class="left-detail">
                <img :src="activeProduct.image" alt="" class="circleimg">
                <div class="line1"></div>
                <div class="line2"></div>
                <img :src="activeProduct.QR" alt="" class="QRimg">
            </div>

        </section>
    </div>
</template>

<style scoped>
.products {
    background-image: url("../../public/img/productsBG.png");
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
  font-size: 0.8vw;


    .products-left {
        padding-top: 12vh;
        padding-left: 3vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80vh;
        width: 20vw;
        color: white;

        .title-box {
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

            .intro1 {
                font-family: PingFang SC;
                font-weight: 500;
                font-size: 1.7em;
                line-height: 1.4em;
                letter-spacing: 0%;

            }

            .intro2 {
                margin-top: 0.8vh;
                font-family: PingFang SC;
                font-weight: 500;
                font-size: 1.2em;
                line-height: 1.4em;
                letter-spacing: 0%;
            }
        }

    }

    .products-center {
        margin-left: 3vw;
        padding-top: 14vh;
        width: 26vw;

        .list-box {
            display: flex;
            flex-direction: row;
            align-items: center;

            .list {
                width: 26vw;
                height: 40vh;
                overflow-y: scroll;
                list-style-type: none;
                padding: 0;
                padding-right: 1vw;

                .list-item {
                    background-repeat: no-repeat;
                    background-size: cover;
                    display: flex;
                    align-items: center;
                    justify-content: end;
                    color: rgb(241, 241, 241);
                    height: 12vh;
                    font-family: PingFang SC;
                    font-weight: 600;
                    font-size: 1.7em;
                    padding-right: 12%;
                    transition: 0.3s;
                    text-shadow: 0 2px 8px gray;

                    &:hover {
                        padding-right: 3%;
                        color: #ffffff;
                    }
                }

                .selected {
                    padding-right: 3%;
                    color: #ffffff;
                    border-right: solid white 6px;
                }
            }

            /* 自定义滚动条样式 */
            .list::-webkit-scrollbar {
                width: 0.6vw;
            }

            .list::-webkit-scrollbar-thumb {
                background-color: rgb(255, 255, 255);
                border-radius: 5px;
                border: 2px solid #ffffff;
            }

            .list::-webkit-scrollbar-thumb:hover {
                background-color: #555;
            }

            .list::-webkit-scrollbar-track {
                background-color: #353E41;
            }

            .line {
                height: 39vh;
                border: solid white;
                transform: translateX(-0.4vw);
            }
        }

        .button-box {
            display: flex;
            justify-content: space-around;

            button {
                background-color: transparent;
                border: none;
                color: white;
                cursor: pointer;
                font-family: PingFang SC;
                font-weight: 600;
                font-size: 1.6em;
                letter-spacing: 0%;
                text-align: center;

            }
        }

        .information-box {
            height: 27vh;
            margin-top: 5vh;
            border: solid white 2px;

            .information-title {
                position: relative;
                top: -0.9em;
                left: 3vw;
                font-size: 1.3em;
                color: white;
                background-color: #353E41;
                padding-right: 6%;
                padding-left: 6%;
            }

            .information-content-box {
                width: 20vw;
                display: flex;
                flex-direction: row;
                padding-left: 2vw;
                margin-bottom: 2vh;

                h3 {
                    width: 10vw;
                    color: white;
                    font-size: 1.4em;
                    font-weight: 500;
                }

                p {
                    color: white;
                    font-size: 1.3em;
                }
            }

            .about-button {
                text-decoration: none;
                color: black;
                background-color: #ffffff;
                height: 4vh;
                width: 11vw;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 3%;
                margin-bottom: 2vh;

                span {
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 1.2em;
                    margin-right: 8%;
                }

                .hoverimg {
                    display: none;
                }

                &:hover {
                    background-color: #27B4EC;
                    color: white;

                    .hoverimg {
                        display: block;
                    }

                    .defaultimg {
                        display: none;
                    }
                }

            }
        }

    }

    .products-right {
        width: 43vw;
        padding-top: 10vh;
        padding-left: 4vw;
        display: flex;
        flex-direction: row;

        .right-detail {
            text-align: end;
            color: white;

            h2 {
                font-family: PingFang SC;
                font-weight: 600;
                font-size: 2.6em;
                letter-spacing: 0%;
                text-align: right;

            }

            .products-detailedcontent {
                margin-top: 8vh;
                font-size: 1.3em;
                text-align: start;
            }
        }

        .left-detail {
            display: flex;
            flex-direction: column;
            align-items: center;

            .circleimg {
                height: 26vh;
                z-index: 3;
            }

            .QRimg {
                height: 26vh;
                position: relative;
                margin-bottom: 6vh;
                transform: translateX(-2vw);
            }

            .line1 {
                height: 50vh;
                border: solid 1px;
                border-image: linear-gradient(to bottom, white, transparent) 1;
                transform: translateY(-16vh);
            }

            .line2 {
                position: absolute;
                height: 50vh;
                border: solid 1px;
                border-image: linear-gradient(to bottom, white, transparent) 1;
                transform: rotate(90deg) translateX(13vh);
                transform-origin: 0 0;
            }

        }

    }
}</style>