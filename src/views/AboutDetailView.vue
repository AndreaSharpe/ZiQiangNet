<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import department from "../aboutData.js"; // 假设这是包含所有部门信息的数组

// 获取路由参数
const route = useRoute();
const router = useRouter();
const departmentId = Number(route.params.id); // 将路由中的 id 转换为数字

// 获取对应部门的对象
const departmentItem = department.find(item => item.id === departmentId);

// 当前选中的索引
const currentIndex = ref(0);

// 菱形进度条的数据
const progressItems = departmentItem ? departmentItem.group : []; // 根据 departmentItem 动态获取进度条项

// 计算当前内容
const currentContent = computed(() => {
    return departmentItem ? departmentItem.group[currentIndex.value] : {};
});

// 切换内容
const changeContent = (index) => {
    currentIndex.value = index; // 更新当前内容的索引
};

//返回/about
function goBack() {
    router.push("/about");
}
</script>

<template>
    <div class="container">
        <div class="top">
            <img src="../../public/svg/aboutback.svg" class="backsvg" @click="goBack" />
            <div class="title">{{ departmentItem.departmentName }}</div>
        </div>
        <div class="content">
            <div class="left-section">
                <div class="group-title">{{ currentContent.groupName }}</div>
                <div class="description">{{ currentContent.groupBrief }}</div>
                <!-- 进度条 -->
                <div class="progress-bar">
                    <div v-for="(item, index) in progressItems" :key="index" class="progress-item"
                        :class="{ active: currentIndex === index }" @click="changeContent(index)">
                        <img :src="item.img[0]" alt="">
                        <!-- <div class="group-name">
                            {{ item.groupName }}
                        </div> -->
                    </div>
                </div>
            </div>

            <!-- 右侧内容 -->
            <div class="right-section">
                <img v-if="currentContent.img" :src="currentContent.img[0]" alt="图片1" />
                <div class="text-box"><p>我们希望你</p>
                    <div class="text" v-for="hope, index in currentContent.hope" :key="index">{{ hope }}</div>
                </div>
                <div class="text-box"><p>加入我们，你将收获</p>
                    <div class="text" v-for="gains, index in currentContent.gains" :key="index">{{ gains }}</div>

                </div>
                <img v-if="currentContent.img" :src="currentContent.img[1]" alt="图片2" />
            </div>
        </div>
        <!-- 左侧内容 -->

    </div>
</template>

<style scoped lang="less">
.container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #343a3d;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10vh;

    .top {
        display: flex;
        margin-bottom: 10vh;

        .backsvg {
            position: absolute;
            left: 4vw;
            top: 12vh;
            height: 5vh;
            cursor: pointer;
        }

        .title {
            font-size: 2.4em;
            margin-top: 12vh;
        }

    }

    .content {
        display: flex;
        flex-direction: row;

        .left-section {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 30vw;

            .group-title {
                font-size: 3em;
                margin-bottom: 3vh;
                color: #53baff;
            }

            .description {
                font-size: 1.3em;
                line-height: 1.6;
            }

            .progress-bar {
                display: grid;
                grid-auto-flow: column; // 强制所有元素在同一行
                grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); // 自动适应元素数量
                margin-top: 20px;
                width: 30vw;

                .progress-item {
                    min-width: 7.25vw; // 控制最小宽度
                    max-width: 10vw; // 限制最大宽度，防止太大
                    height: 20vh;
                    background-color: lightblue;
                    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
                    transition: background-color 0.3s;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        height: 100%;
                    }

                    .group-name {
                        position: absolute;
                        writing-mode: vertical-rl;
                    }
                }
                .active{
                    border-bottom: #53baff 6px solid;
                }

            }

        }



        .right-section {
            max-height: 70vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            width: 40vw;
            margin-left: 7vw;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                max-height: 40vh;
            }

            .text-box {
                background-color: rgba(255, 255, 255, 0.1);
                padding: 4%;
                font-weight: bold;
                text-align: center;
                color: #53baff;
                p{
                    font-size: 1.4em;
                    line-height: 0;
                }
                .text {
                    font-size: 1.1em;
                    color: white;
                    text-align: start;
                    margin-top: 10px;
                }
            }
        }


    }
}
</style>
