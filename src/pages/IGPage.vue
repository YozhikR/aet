<template>
	<div class="hello">
		<h1>Made By Actions</h1>
		<div v-for="post in IGMediaPosts.data" :key="post.id">
			<div style="margin-bottom: 50px">
				<a :href="post.permalink">{{ post.permalink }}</a>
				<div style="width: 200px; height: 200px">
					<img :src="post.media_url" alt="image" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useIGStore } from '@/store/useIGStore'

const store: any = useIGStore()
const IGMediaPosts = computed(() => {
	return store.IGMediaPosts
})

onBeforeMount(() => {
	store.fetchIGPosts()
})
</script>

<style scoped></style>
