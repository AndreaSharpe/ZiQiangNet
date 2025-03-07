<script setup>
import { defineProps } from "vue";
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    link:{
        type:String,
        required:true
    }
})
</script>
<template>
    <a :href="props.link" class="card" target="_blank">
        <img :src="props.imgSrc" alt="Image" class="img" />

        <div class="textBox">
            <p class="head">{{ props.title }}</p>
        </div>
    </a>
</template>

<style scoped>
/* From Uiverse.io by ayman-ashine */
.card {
    width: 25vw;
    height: 25vh;
    background: #313131;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
}

.img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
    object-fit: cover;
    /* 以 cover 方式填充 */
    object-position: center;
    /* 图片居中显示 */
    border-radius: 10px;

}

.textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 100%;
    height: 100%;
    gap: 0em;
    padding: 1em;
    z-index: 5;
    transition: 0.2s ease-in-out;
}

.textBox>.head {
    font-size: 1em;
    font-weight: bold;
}

.textBox>.price {
    font-size: 1em;
    font-weight: bold;
}

.textBox>.discription {
    font-size: 0.8em;
    color: lightgrey;
    font-weight: light;
}

.card:hover>.textBox {
    opacity: 1;
    gap: 0.5em;
}

.card:hover>.img {
    filter: blur(3px);
}
</style>