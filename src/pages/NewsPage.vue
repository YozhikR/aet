<template>
	<div class="news-wrapper">
		<BreadCrumbs></BreadCrumbs>
		<div class="container">
			<div class="news">
				<h2>Новости</h2>
				<div v-if="isLoading"></div>
				<div v-else>
					<div v-for="newPost in newsData.data" :key="newPost.id">
						<div
							v-if="newPost"
							v-html="newPost.attributes.descriptionToolbar"
						></div>
						NewsPostPage
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, Ref } from 'vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'

let isLoading = ref(false)
const newsData: Ref<any> = ref({})

const getNews = async () => {
	isLoading.value = true
	try {
		const response = await axios.get('http://localhost:1337/api/news')

		newsData.value = response.data
		// console.log(response)
	} catch (error) {
		console.log(error)
	} finally {
		isLoading.value = false
	}
}

onMounted(() => {
	getNews()
})
</script>

<style scoped lang="scss">
.news {
	color: var(--text);
	&-wrapper {
		margin-top: 30px;
	}
}
</style>
