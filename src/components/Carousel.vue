<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CarouselCard from "../components/CarouselCard.vue"


const items = [
  { img: '/public/img/hand/0.jpg', title: '第一话 早八室友失踪事件', discription: 'asdfdsgfhtr',link:'https://mp.weixin.qq.com/s/O2j9ByGifM7pDKLiCr_LBQ' },
  { img: '/public/img/eat/0.jpg', title: '春日食丨用一顿日料，吃出春天的的仪式感', discription: 'asdfdsgfhtr',link:'https://mp.weixin.qq.com/s?__biz=MzAxMDQwMDk0Mw==&mid=2651838949&idx=1&sn=87504a19122dca90ea87920584ad90d3&chksm=81392f62343ebefe03f4cdcf23099cb34629f46f4aaeb8dc726a7536509aa43b1e5cd56b2d70&scene=126&sessionid=1741272117#rd' },
  { img: '/public/img/class/0.jpg', title: '小淘的分享 | 科普类书籍与纪录片（2）', discription: 'asdfdsgfhtr',link:'https://mp.weixin.qq.com/s/76eYQ85_emL34a1AGoMXBg' },
  { img: '/public/img/pocket/0.jpg', title: '丢丢来啦——自强studio的专属表情包第二弹！！', discription: 'asdfdsgfhtr',link:'https://mp.weixin.qq.com/s?__biz=Mzg4MzUyNDMxNA==&mid=2247485318&idx=1&sn=3b02bcd9453baba5fb7c0075d5ecc1e8&chksm=ce058adac4a612343ec22343ebb3ca8f81329e41b0be3644d3ffdb2b4a1f64bce2c2eb07b42e&scene=126&sessionid=1741271128#rd' },
  { img: '/public/img/place/0.jpg', title: '非虚构 | 就当这是第一次认识', discription: 'asdfdsgfhtr',link:'https://mp.weixin.qq.com/s?__biz=Mzg4NzU1NTM2Mg==&mid=2247486823&idx=1&sn=f0ec1784f2257262313ba84c76b5c677&chksm=ce321e9bee9a54443c7f70f266fa0eedcb2e27a3bdf0016272c6c60b0a221a6d0c73738c5fb6&scene=126&sessionid=1741271656#rd' }
];

const scrollIndex = ref(0);
const carouselItems = ref(null);
const cardWidth = ref(0);
const containerWidth = ref(0);  // 用来存储容器宽度

//点击左箭头
const scrollLeft = () => {
  if (scrollIndex.value > 0) {
    scrollIndex.value--;
    updateScrollPosition();
  }
};
//点击右箭头
const scrollRight = () => {
  if (carouselItems.value && containerWidth.value && cardWidth.value) {
    const totalWidth = items.length * cardWidth.value;
    const maxScroll = totalWidth - containerWidth.value;
    const currentScroll = scrollIndex.value * cardWidth.value;

    if (currentScroll < maxScroll) {
      scrollIndex.value++;
      const leftWidth = maxScroll - currentScroll;
      updateScrollPosition(leftWidth);
    }
  }
};
//更新卡片位置
const updateScrollPosition = (leftWidth) => {
  if (carouselItems.value) {
    // 使用动态计算的宽度
    const offset = scrollIndex.value * cardWidth.value;
    console.log(offset)
    console.log(leftWidth)
    if (leftWidth < cardWidth.value) {
      carouselItems.value.style.transform = `translateX(-${leftWidth + offset - cardWidth.value+30}px)`;
    }
    else {
      carouselItems.value.style.transform = `translateX(-${offset}px)`;

    }
  }
};

// 使用 ResizeObserver 获取卡片实时宽度
const resizeObserver = new ResizeObserver(() => {
  if (carouselItems.value) {
    const firstItem = carouselItems.value.querySelector('.carousel-item');
    if (firstItem) {
      cardWidth.value = firstItem.offsetWidth;
      // console.log('实时卡片宽度:', cardWidth.value);  // 打印实时宽度
    }
  }
});

onMounted(() => {
  if (carouselItems.value) {
    const firstItem = carouselItems.value.querySelector('.carousel-item');
    const container = carouselItems.value.parentNode;

    if (firstItem && container) {
      cardWidth.value = firstItem.offsetWidth;  // 获取单个卡片的宽度
      containerWidth.value = container.offsetWidth;  // 获取容器的宽度
      resizeObserver.observe(firstItem);  // 开始监听卡片尺寸变化
    }
  }
});

onBeforeUnmount(() => {
  if (carouselItems.value) {
    const firstItem = carouselItems.value.querySelector('.carousel-item');
    resizeObserver.unobserve(firstItem);  // 停止监听尺寸变化
  }
});
</script>

<template>
  <div class="carousel">
    <button @click="scrollLeft" class="arrow-left">
      <img src="../../public/svg/left.svg" alt="left" class="arrow" />
    </button>
    <div class="carousel-container">
      <div class="carousel-items" ref="carouselItems">
        <div class="carousel-item" v-for="(item, index) in items" :key="index">
          <CarouselCard :imgSrc="item.img" :title="item.title" :discription="item.discription" :link="item.link" />
        </div>
      </div>
    </div>
    <button @click="scrollRight" class="arrow-right">
      <img src="../../public/svg/right.svg" alt="right" class="arrow" />
    </button>
  </div>
</template>

<style scoped lang="less">
.carousel {
  display: flex;
  align-items: center;
  height: 35vh;
  flex-direction: row;

  .arrow {
    height: 12vh;
  }

  .carousel-container {
    overflow: hidden;
    width: 80%;
    height: 25vh;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);


    .carousel-items {
      display: flex;
      transition: transform 0.3s ease-in-out;
      margin-left: 10px;

      .carousel-item {
        padding: 0 1vw;
        height: 25vh;


      }
    }

  }

  .arrow-left,
  .arrow-right {
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
