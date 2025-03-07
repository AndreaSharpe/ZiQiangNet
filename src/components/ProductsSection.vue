<template>
    <div class="container">
        <div class="left-images">
            <img v-for="(item, index) in imageList" :key="index" :src="item.imageUrl" alt="图片" @click="selectImage(item)"
                class="left-image" :class="{ selected: selectedImage?.imageUrl === item.imageUrl }" />
        </div>
        <div class="right-details">
            <img :src="selectedImage?.imageUrl" alt="详情图片" class="right-image" />
            <div class="text-details">
                <h2>{{ selectedImage?.title }}</h2>
                <p>{{ selectedImage?.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 模拟图片数据
const imageList = [
    {
        imageUrl: '../../public/img/mainProziqiang.png',
        title: '自强studio',
        description: '武汉大学自强网络文化工作室（自强Studio）是武汉大学党委学生工作部指导的校级学生组织，华中地区最大的学生互联网团队之一。'
    },
    {
        imageUrl: '../../public/img/Promethods.png',
        title: '珞珈攻略',
        description: '团队合作解谜活动，让同学们沉浸式探索校园文化，体验不同的校园生活方式。'
    },
    {
        imageUrl: '../../public/img/Proclass.png',
        title: 'WHU自强淘课啦',
        description: '提供学习资源、课程指南和学习资讯，帮助武大学子提升学习体验。'
    },
    {
        imageUrl: '../../public/img/Proseven.png',
        title: '半分七天',
        description: '基于匹配机制的社交平台，让同学们找到志同道合的朋友，共同完成有趣的活动。'
    },
    {
        imageUrl: '../../public/img/Propocket.png',
        title: 'WHUer滴哆啦口袋',
        description: '欢迎来到“毋乙”！这里是武大绘画爱好者的聚集地，以创意为翼，共享艺术与灵感。'
    },
    {
        imageUrl: '../../public/img/Proplace.png',
        title: 'ZQ自留地',
        description: '武汉大学校园媒体之一，提供新闻快讯、深度调查、新闻评论等内容。'
    },
    {
        imageUrl: '../../public/img/Prostudent.png',
        title: '十大珞珈风云学子',
        description: '武汉大学年度杰出学生评选活动，表彰在学术、创新、文化等领域表现优异的学子。'
    },
    {
        imageUrl: '../../public/img/Promeet.png',
        title: '专交遇见你',
        description: '帮助学生匹配不同专业的同伴，一起完成学习交流活动，增进跨专业沟通。'
    },
    {
        imageUrl: '../../public/img/Proeat.png',
        title: '吃乎',
        description: '自强Studio旗下最会吃的部门，探索武大校园及周边美食，提供美食测评与推荐。'
    },
    {
        imageUrl: '../../public/img/Prohand.png',
        title: '掌上武大',
        description: '“掌上武大”微信公众号，聚焦校园生活，提供校园资讯、美食测评、校内新闻等内容。'
    }
    // 可以继续添加更多图片数据
];

// 存储当前选中的图片信息
const selectedImage = ref(null);

// 点击左侧图片时触发的方法
const selectImage = (image) => {
    selectedImage.value = image;
};

onMounted(() => {
    if (imageList.length > 0) {
        selectedImage.value = imageList[0];
    }
});
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    margin-top: 3vh;
}

.left-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 26vh;
    max-width: 60vw;
}
.selected {
    filter: brightness(1.5);
}

.left-image {
    height: 13vh;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.3s;

}

.left-image:hover {
    border-color: #007bff;
}

.right-details {
    width: 35vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.right-image {
    filter: brightness(1.3);
    height: 24vh;
    width: 16vw;
    object-fit: cover;
    border-radius: 5px;
}

.text-details {
    height: 26vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    color: white;
    transform: translateX(-5vw);
    background: linear-gradient(to right, #353e4100 0%, #353E41 40%);
    padding-left: 5%;
}
</style>