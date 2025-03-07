import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import NewsView from '../views/NewsView.vue'
import AboutView from '../views/AboutView.vue'
import AboutDetailView from '../views/AboutDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/about/:id',  // 添加动态路由参数
      name: 'about-detail',
      component: AboutDetailView,
      props: route => ({
        id: route.params.id,        // 获取 `id` 参数
        department: JSON.parse(route.params.department || '{}'), // 解析 `department` 参数
      }), 
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // 切换路由后滚动到顶部，并带有平滑滚动效果
  }
})

export default router
