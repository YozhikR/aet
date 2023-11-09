import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Импортируйте компоненты, которые будут отображаться на ваших маршрутах
import Main from '@/pages/MainPage.vue'
import IGPage from '@/pages/IGPage.vue'
import IGPostPage from '@/pages/IGPostPage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import TransportationRules from '@/pages/TransportationRules.vue'
import DocumentsPage from '@/pages/DocumentsPage.vue'
// import About from '@/views/About.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Main',
		component: Main,
		meta: { breadcrumb: 'Главная' },
	},
	{
		path: '/instagram',
		name: 'IGPage',
		component: IGPage,
		meta: { breadcrumb: 'Инстаграм' },
	},
	{
		path: '/posts',
		name: 'NewsPage',
		component: NewsPage,
		meta: { breadcrumb: 'Новости' },
	},
	{
		path: '/instagram/:id',
		name: 'IGPostPage',
		component: IGPostPage,
		meta: { breadcrumb: 'Инстаграм пост' },
	},
	{
		path: '/documents',
		name: 'DocumentsPage',
		component: DocumentsPage,
	},
	{
		path: '/transportationRules',
		name: 'TransportationRules',
		component: TransportationRules,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
