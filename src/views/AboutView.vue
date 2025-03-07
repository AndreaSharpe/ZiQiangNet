<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import department from "../aboutData.js"

const router = useRouter()


// const timelineData = ref([
//     { year: "2000", text: "  自强学堂网站创立，网站以“服务学生生活，记录学校发展”为宗旨，并作为武汉大学思想政治教育进网络的阵地，为广大师生提供新闻资讯、电影、音乐、视频、思政教育、无线服务等一系列网络资源。" },
//     { year: "2009", text: "  自强学堂网站创立，网站以“服务学生生活，记录学校发展”为宗旨，并作为武汉大学思想政治教育进网络的阵地，为广大师生提供新闻资讯、电影、音乐、视频、思政教育、无线服务等一系列网络资源。" },
//     { year: "2013", text: "自强学堂网站创立，网站以“服务学生生活，记录学校发展”为宗旨..." },
//     { year: "2023", text: "自强学堂网站创立，网站以“服务学生生活，记录学校发展”为宗旨..." },
// ]);

const selectedIndex = ref(0)
const selectedItem = ref({})
function itemClicked(departmentItems) {
    selectedIndex.value = departmentItems.id;
    selectedItem.value = departmentItems;
    console.log(selectedItem.value)
}

const groupDetail = (id) => {
    console.log(id)
    router.push(`/about/${id}`)
}
onMounted(() => {
    selectedIndex.value = 0;
    selectedItem.value = department[0];
})
</script>
<template>
    <div class="about">
        <section class="about-part1">
            <div class="part1-title-box">
                <p class="part1-title">创立于2000</p>
                <p class="part1-title">始创于自强网站</p>
                <img src="../../public/svg/blueline.svg" alt="">
            </div>
            <div class="part1-content-box">
                <img src="../../public/svg/aboutrtline.svg" alt="" class="bgline1">
                <div class="content-box">
                    <div class="little-title">曾获得</div>
                    <ul>
                        <li class="content">全国高校百佳网站评选位列<span>前十</span></li>
                        <li class="content">十佳思政类网站</li>
                        <li class="content">十佳高校共建网站</li>
                        <li class="content">旗下受众<span>10w+</span></li>
                    </ul>

                </div>
                <div class="content-box">
                    <div class="little-title">共设有</div>
                    <ul>
                        <li class="content"><span>5</span>大中心</li>
                        <li class="content"><span>16</span>部门</li>
                    </ul>
                </div>
                <div class="content-box">
                    <div class="little-title">直属于</div>
                    <ul>
                        <li class="content">武汉大学<span>党委学生工作部</span>的<span>校级</span>学生组织</li>
                    </ul>
                </div>
                <img src="../../public/svg/aboutlbline.svg" alt="" class="bgline2">
            </div>
        </section>
        <!-- 自强历史 -->
        <!-- <div class="about-part2">
            <div class="timeline-container">
                <div class="timeline">
                  <div v-for="(item, index) in timelineData" :key="index" class="timeline-item">
                    <div class="timeline-content" :class="{ top: index % 2 === 0, bottom: index % 2 !== 0 }">
                      <div class="arrow"></div>
                      <p class="text">{{ item.text }}</p>
                    </div>
                    <div class="timeline-date">{{ item.year }}</div>
                  </div>
                </div>
              </div>
        </div> -->
        <section class="about-part3">
            <div class="part3-left">
                <img src="../../public/img/aboutpart3bg.png" alt="">
                <div class="part3-title">
                    <h1>部门介绍</h1>
                    <p>department introduction</p>
                </div>
                <ul class="part3-list">
                    <li class="department-item" v-for="departmentItems in department" :key="departmentItems.id"
                        :class="{ 'selectedItem': selectedIndex === departmentItems.id }"
                        @click="itemClicked(departmentItems)">
                        <p class="name-bg">{{ departmentItems.departmentName }}</p>
                        <div class="br"></div>
                        <p class="name">
                            {{ departmentItems.departmentName }}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="part3-right">
                <div class="part3-title-box" @click="groupDetail(selectedItem.id)">{{
                    selectedItem.departmentName }}
                    <img src="../../public/svg/aboutright.svg" alt="">
                </div>
                <div class="department-brief">{{ selectedItem.departmentBrief }}</div>
                <div class="group-box">
                    <div class="group-item" v-for="groupItem in selectedItem.group"><img :src="groupItem.img[0]" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="about-part4">
            <div class="intro">自从有<span>你</span>，<span>我们</span>更强
                <img src="/img/QRcode.png" alt="" class="QRcode">
            </div>
            <div class="grey-bar"></div>
            <div class="dotted-line"></div>
            <p>扫描上方二维码，加入我们</p>
        </section>
    </div>
</template>
<style scoped lang="less">
.about {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;

    .about-part1 {
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../public/img/aboutbg1.png");
        display: flex;
        flex-direction: column;

        .part1-title-box {
            width: 100%;
            margin-top: 10vh;

            .part1-title {
                color: rgb(255, 255, 255);
                font-weight: 400;
                font-size: 3em;
                text-align: center;
            }

            img {
                width: 100%;
                position: absolute;
                top: 0;
                margin-top: 14vh;
            }
        }

        .part1-content-box {
            margin-top: 6vh;
            display: flex;
            flex-direction: row;
            justify-content: center;
            transform: translateX(-3vw);

            .bgline1 {
                width: 30%;
                position: absolute;
                right: 0;
                top: 0;
                transform: translateY(-6vh);
            }

            .bgline2 {
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translate(8vw, 4vh);
            }

            .content-box {
                max-width: 25vw;
                padding-left: 8vw;
                display: flex;
                flex-direction: row;

                .little-title {
                    writing-mode: vertical-rl;
                    color: white;
                    font-size: 2em;
                    line-height: 3em;
                    letter-spacing: 6px;
                    background-color: #00BCFA;
                    height: 8em;
                    text-align: center;
                    padding: 1%;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    color: white;
                    font-size: 1.7em;

                    li {
                        margin-bottom: 1vh;
                    }

                    span {
                        font-size: 2em;
                        color: #EF8D8D;
                    }
                }
            }
        }
    }

    .about-part2 {
        height: 100vh;

        /* 时间轴整体布局 */
        .timeline-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            background-color: #2c343c;
        }

        /* 时间轴主线 */
        .timeline {
            display: flex;
            position: relative;
            width: 80%;
            border-top: 5px solid #00a8ff;
        }

        /* 每个时间点的样式 */
        .timeline-item {
            position: relative;
            width: 25%;
            text-align: center;
        }

        /* 事件框样式 */
        .timeline-content {
            position: absolute;
            width: 200px;
            background: #2c343c;
            border: 2px solid #fff;
            border-radius: 10px;
            padding: 15px;
            color: white;
            text-align: left;
            font-size: 14px;
        }

        /* 上方事件框 */
        .timeline-content.top {
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
        }

        /* 下方事件框 */
        .timeline-content.bottom {
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
        }

        /* 箭头样式 */
        .arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }

        .top .arrow {
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-top: 10px solid #fff;
        }

        .bottom .arrow {
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: 10px solid #fff;
        }

        /* 时间文本样式 */
        .timeline-date {
            margin-top: 10px;
            color: white;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .about-part3 {
        background-color: #353E41;
        display: flex;
        padding-top: 12vh;
        justify-content: center;


        .part3-left {
            img {
                position: absolute;
                right: 0;
                width: 90vw;
                transform: translateY(-12vh);
                z-index: -1;
            }

            .part3-title {
                padding-bottom: 2vh;

                h1 {
                    color: white;
                    font-size: 5em;
                    line-height: 0;
                }

                p {
                    color: white;
                    font-size: 1.5em;
                    line-height: 0.8em;
                }
            }

            .part3-list {
                .department-item {
                    width: 25vw;
                    list-style: none;

                    &:hover .name-bg {
                        opacity: 1;
                    }

                    .name-bg {
                        text-align: center;
                        color: #00BCFA1A;
                        font-weight: 600;
                        font-size: 3em;
                        line-height: 0;
                        opacity: 0;

                    }

                    .name {
                        position: absolute;
                        font-size: 1.8em;
                        line-height: 0;
                        color: white;
                        transform: translateY(-2em);
                    }
                }

                .br {
                    width: 25vw;
                    height: 0;
                    border: solid 1px white;
                }
            }

            .selectedItem {
                .name-bg {
                    opacity: 1 !important;
                }

                .br {
                    border: solid white 1.5px;
                }

                .name {
                    font-weight: 600;
                }
            }
        }

        .part3-right {
            margin-top: 4vh;
            margin-left: 10vw;
            width: 30vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .part3-title-box {
                color: white;
                font-size: 3em;
                cursor: pointer;
            }

            .department-brief {
                color: white;
                font-size: 1.3em;
                padding: 3vh 2vw;
                border: solid 1.4px #00BCFA;
                border-top-right-radius: 40px;
                border-bottom-left-radius: 40px;
            }

            .group-box {
                display: grid;
                grid-auto-flow: column; // 强制所有元素在同一行
                grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); // 自动适应元素数量
                width: 30vw;
                margin-bottom: 4vh;

                .group-item {
                    min-width: 7.25vw; // 控制最小宽度
                    max-width: 10vw; // 限制最大宽度，防止太大
                    min-height: 25vh;
                    max-height: 30vh;
                    background-color: lightblue;
                    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
                    transition: background-color 0.3s;
                    writing-mode: vertical-rl;
                    text-align: center;
                }
            }
        }
    }

    .about-part4 {
        padding-top: 8vh;
        background-color: #353E41;
        display: flex;
        flex-direction: column;
        align-items: center;

        .intro {
            color: white;
            font-size: 6em;

            span {
                color: #24b6ff;
            }

            img {
                margin-left: 2vw;
                height: 20vh;
                transform: translateY(40%);
            }
        }

        .grey-bar {
            height: 6vh;
            width: 80vw;
            background-color: #FFFFFF33;
        }

        .dotted-line {
            border: 2px solid transparent;
            border-image: repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 20px, transparent 6px, transparent 30px) 1;
            width: 80vw;
            margin-top: 1.5em;
            margin-bottom: 10px;
        }

        p {
            color: white;
            font-size: 1.8em;
            background-color: #353E41;
            transform: translateY(-2.2em);
            padding: 10px;

        }
    }
}</style>