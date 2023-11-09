<template>
	<div class="ig-post-id-list card">
		<ul v-if="isLoading" class="loader">
			<li v-for="n in range" :key="n">
				<div class="ig-post-id-list__img"></div>
				<div class="ig-post-id-list__caption"></div>
			</li>
		</ul>
		<ul v-else>
			<li v-for="post in IGMediaPosts.data" :key="post.id">
				<button @click="goToPost(post.id)">
					<div class="ig-post-id-list__img">
						<img
							v-if="post.media_type === 'IMAGE'"
							:src="post.media_url"
							alt="IMAGE"
						/>
						<video
							v-else-if="post.media_type === 'VIDEO'"
							muted
							loop
							autoplay
							:src="post.media_url"
						></video>
					</div>
					<div class="ig-post-id-list__caption">
						<p v-if="post.caption">{{ post.caption?.slice(0, 89) }} ...</p>
						<p v-else>Нет описания</p>
					</div>
					<div class="ig-post-id-list__counts">
						<div class="ig-post-id-list__com-count">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
								<path
									d="M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z"
								/>
							</svg>
							<strong>{{ post.comments_count }}</strong>
						</div>
					</div>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import $router from '@/router/router'
import { computed, onBeforeMount } from 'vue'
import { useIGStore } from '@/store/useIGStore'

const range: number = 10
const store = useIGStore()
const IGMediaPosts = computed(() => {
	return store.IGMediaPosts
})

const isLoading = computed(() => store.isLoading) // Добавляем isLoading

onBeforeMount(() => {
	store.fetchIGPosts()
})

function goToPost(postId: string | number) {
	if (!isLoading.value) {
		// Проверяем isLoading перед переходом
		$router.push(`/instagram/${postId}`)
	}
}
</script>

<style lang="scss" scoped>
.ig-post-id-list {
	width: 30%;
	margin-right: 15px;
	ul {
		li {
			padding: 10px 4px;
			border-bottom: 1px solid var(--yellow);
			&:first-of-type {
				padding-top: 0;
			}
			&:last-of-type {
				margin-bottom: 0;
			}
			button {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				transition: 0.3s ease;
				color: var(--text);
				&:hover {
					color: var(--yellow);
					svg {
						fill: var(--yellow);
					}
				}
			}
		}
	}
	.loader {
		height: 100vh;
		li {
			display: flex;
			opacity: 0.3;
			&:first-of-type {
				padding-top: 0;
				animation: opacity 1s infinite 0.1s alternate;
			}
			&:nth-child(2) {
				animation: opacity 1s infinite 0.3s alternate;
			}
			&:nth-child(3) {
				animation: opacity 1s infinite 0.5s alternate;
			}
			&:nth-child(4) {
				animation: opacity 1s infinite 0.7s alternate;
			}
			&:nth-child(5) {
				animation: opacity 1s infinite 0.9s alternate;
			}
			&:nth-child(6) {
				animation: opacity 1s infinite 1.1s alternate;
			}
			&:nth-child(7) {
				animation: opacity 1s infinite 1.3s alternate;
			}
			&:nth-child(8) {
				animation: opacity 1s infinite 1.5s alternate;
			}
			&:nth-child(9) {
				animation: opacity 1s infinite 1.7s alternate;
			}
			&:nth-child(10) {
				animation: opacity 1s infinite 1.9s alternate;
			}
			.ig-post-id-list__img {
				background-color: var(--yellow);
				border-radius: 5px;
				opacity: 0.5;
			}
			.ig-post-id-list__caption {
				background-color: var(--yellow);
				border-radius: 10px;
				width: 100%;
				opacity: 0.5;
			}
		}
	}
	&__img {
		width: 50px;
		height: 50px;
		margin-right: 10px;
		flex-shrink: 0;
		img {
			border-radius: 5px;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		video {
			border-radius: 5px;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__caption {
		font-size: 13px;
		font-weight: bold;
		text-align: left;
		margin-right: 4px;
		width: 100%;
	}
	&__counts {
		align-self: flex-end;
	}
	&__com-count {
		display: flex;
		svg {
			flex-shrink: 0;
			width: 15px;
			height: 15px;
			margin-right: 4px;
			fill: var(--blue);
			transition: 0.3s ease;
		}
		strong {
			font-size: 12px;
		}
	}
}
@keyframes opacity {
	from {
		opacity: 0.3;
	}
	to {
		opacity: 0.7;
	}
}
</style>
