<template>
	<div class="container">
		<div class="wrapper-info">
			<div style="display: flex; justify-content: space-between">
				<IGPostIdList></IGPostIdList>
				<div class="ig-post-wrapper card">
					<div v-if="isLoading" class="loader ig-post">
						<div class="ig-post__head">
							<div class="ig-post__head-left">
								<div class="ig-post__img"></div>
							</div>
							<div class="ig-post__caption">
								<ul>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
						<div class="ig-post__body">
							<h2></h2>
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					<div v-else class="ig-post">
						<div class="ig-post__head">
							<div class="ig-post__head-left">
								<div class="ig-post__img">
									<img
										v-if="igPostData.media_type === 'IMAGE'"
										:src="igPostData.media_url"
										alt="IMAGE"
									/>
									<video
										v-else-if="igPostData.media_type === 'VIDEO'"
										muted
										loop
										autoplay
										:src="igPostData.media_url"
									></video>
								</div>
								<a target="_blank" :href="igPostData.permalink"
									><strong>Открыть в Instagram</strong>
									<img
										src="@/assets/images/icon-instagram-cloud.svg"
										alt="Inst"
								/></a>
							</div>
							<div class="ig-post__caption">
								<p v-if="igPostData.caption">{{ igPostData.caption }}</p>
								<p v-else class="ig-post__caption-no">Нет описания</p>
							</div>
						</div>
						<div class="ig-post__body">
							<h2>Комментарии ({{ igPostData.comments_count }})</h2>
							<div class="ig-post__comments" v-if="igPostData.comments">
								<div
									v-for="comment in igPostData.comments.data"
									:key="comment.id"
									class="ig-post__user"
								>
									<a
										target="_blank"
										:href="`https://www.instagram.com/${comment.username}`"
										><strong>{{ comment.username }}</strong></a
									>
									<p>{{ comment.text }}</p>
									<span class="ig-post__user-timestamp">{{
										formatTimestamp(comment.timestamp)
									}}</span>
									<div class="ig-post__replies" v-if="comment.replies">
										<div
											v-for="replies in comment.replies.data"
											:key="replies.id"
											class="ig-post__user-replies"
										>
											<a
												target="_blank"
												:href="`https://www.instagram.com/${replies.username}`"
												><strong>{{ replies.username }}</strong></a
											>
											<p>{{ replies.text }}</p>
											<span class="ig-post__user-timestamp">{{
												formatTimestamp(replies.timestamp)
											}}</span>
										</div>
									</div>
								</div>
							</div>
							<div v-else style="text-align: center">
								Комментариев нет.<br /><a
									target="_blank"
									:href="igPostData.permalink"
									style="color: var(--yellow)"
									>Оставить свой комментарий</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, watch } from 'vue'
import axios from 'axios'
import { graphFB, TOKEN, fieldsStringIGPost } from '@/utils/constants'
import { useRoute } from 'vue-router'
import IGPostIdList from '@/components/IGPostIdList.vue'

const route = useRoute()
const id = ref(route.params.id)
const igPostData: Ref<any> = ref({})
const isLoading = ref(false)

const formatTimestamp = (timestamp: string) => {
	const date = new Date(timestamp)
	const options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	}
	return date.toLocaleString('ru-RU', options)
}

const getIGPost = async () => {
	isLoading.value = true
	try {
		const response = await axios.get(`${graphFB}${id.value}`, {
			params: {
				fields: fieldsStringIGPost,
				access_token: TOKEN,
			},
		})
		// console.log(response.data)
		igPostData.value = response.data // Сохраните данные в переменную igPostData
	} catch (error) {
		// Обработка ошибок
	} finally {
		isLoading.value = false // Устанавливаем состояние загрузки в false после завершения запроса
	}
}

onMounted(() => {
	getIGPost() // Вызовите getIGPost при монтировании компонента
})

// Следим за изменениями параметра id и выполняем запрос при изменении
watch(
	() => route.params.id,
	() => {
		id.value = route.params.id
		getIGPost()
	}
)
</script>

<style lang="scss" scoped>
.loader {
	.ig-post {
		&__img {
			opacity: 0.3;
			position: relative;
			overflow: hidden;
			animation: opacity 1s infinite 0.1s alternate;
			&::before {
				content: '';
				position: absolute;
				width: 2px;
				height: auto;
				top: -30px;
				bottom: -30px;
				left: -240%;
				transform: rotate(20deg);
				background-color: rgba(255, 255, 255, 0.5);
				box-shadow: 0 0 10px 6px rgba(255, 255, 255, 0.5);
				animation: blink 2.5s infinite;
			}
			@keyframes blink {
				from {
					left: -40%;
				}
				to {
					left: 190%;
				}
			}
		}
		&__caption {
			ul {
				li {
					height: 20px;
					margin-bottom: 10px;
					border-radius: 8px;
					background: var(--yellow);
					opacity: 0.3;
					&:nth-child(1) {
						animation: opacity 1s infinite 0.1s alternate;
					}
					&:nth-child(2) {
						animation: opacity 1s infinite 0.3s alternate;
					}
					&:nth-child(3) {
						animation: opacity 1s infinite 0.5s alternate;
					}
				}
			}
		}
		&__body {
			h2 {
				max-width: 100px;
				width: 100%;
				height: 20px;
				background: var(--yellow);
				opacity: 0.3;
				border-radius: 8px;
				animation: opacity 1s infinite 0.1s alternate;
			}
			ul {
				li {
					height: 20px;
					margin-bottom: 10px;
					border-radius: 8px;
					background: var(--yellow);
					opacity: 0.3;
					&:nth-child(1) {
						animation: opacity 1s infinite 0.3s alternate;
					}
					&:nth-child(2) {
						margin-left: 30px;
						animation: opacity 1s infinite 0.5s alternate;
					}
					&:nth-child(3) {
						margin-left: 30px;
						animation: opacity 1s infinite 0.7s alternate;
					}
					&:nth-child(4) {
						animation: opacity 1s infinite 0.9s alternate;
					}
					&:nth-child(5) {
						margin-left: 30px;
						animation: opacity 1s infinite 1.1s alternate;
					}
					&:nth-child(6) {
						animation: opacity 1s infinite 1.3s alternate;
					}
					&:nth-child(7) {
						margin-left: 30px;
						animation: opacity 1s infinite 1.5s alternate;
					}
				}
			}
		}
	}
}
.ig-post {
	&-wrapper {
		width: calc(100% - 30% - 15px);
	}
	&__head {
		display: flex;
		&-left {
			a {
				margin-top: 15px;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				strong {
					font-size: 14px;
				}
				img {
					margin-left: 5px;
					display: block;
					width: 35px;
					height: 35px;
				}
			}
		}
	}
	&__img {
		width: 200px;
		height: 200px;
		margin-right: 10px;
		flex-shrink: 0;
		border-radius: 8px;
		background-color: var(--yellow);
		position: relative;
		&::before {
			content: '';
			position: absolute;
			height: 20px;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 8px;
		}
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 8px;
		}
	}
	&__caption {
		width: 100%;
		&-no {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	&__body {
		margin-top: 15px;
		padding-top: 15px;
		border-top: 1px solid var(--yellow);
		h2 {
			font-size: 24px;
			margin-bottom: 10px;
		}
	}
	&__user {
		margin-bottom: 6px;
		a {
			color: var(--yellow);
		}
		p {
			display: inline;
			margin-left: 5px;
		}
		&-timestamp {
			margin-left: 10px;
			font-weight: 900;
			font-size: 14px;
		}
	}
	&__replies {
		margin-left: 40px;
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
