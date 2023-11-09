<template>
	<div class="container">
		<div class="main-info">
			<div class="main-info__intro">
				<div class="main-news">
					<h2>Пресс-центр</h2>
					<div class="main-news__list">
						<div class="main-news__item-wrapper">
							<div class="main-news__item">
								<div class="main-news__item-img">
									<img src="@/assets/images/image-news-1.png" alt="Image" />
								</div>
								<div class="main-news__item-title">
									БОРЬБА С КОРОНАВИРУСОМ ИЛИ КАК ПРОВОДИТСЯ ДЕЗИНФЕКЦИЯ
									ОБЩЕСТВЕННОГО ТРАНСПОРТА АЛМАТЫ.
								</div>
							</div>
						</div>
						<div class="main-news__item-wrapper">
							<div class="main-news__item">
								<div class="main-news__item-img">
									<img src="@/assets/images/image-news-1.png" alt="Image" />
								</div>
								<div class="main-news__item-title">
									НОВЫЕ МАРШРУТКИ ЗАПУСТИЛИ В АЛМАТЫ
								</div>
							</div>
						</div>
						<div class="main-news__item-wrapper">
							<div class="main-news__item">
								<div class="main-news__item-img">
									<img src="@/assets/images/image-news-1.png" alt="Image" />
								</div>
								<div class="main-news__item-title">
									ВОДИТЕЛЬ АВТОБУСА №38 ВЕРНУЛ ПАССАЖИРКЕ СУМКУ С ДЕНЬГАМИ
								</div>
							</div>
						</div>
						<div class="main-news__item-wrapper">
							<div class="main-news__item">
								<div class="main-news__item-img">
									<img src="@/assets/images/image-news-1.png" alt="Image" />
								</div>
								<div class="main-news__item-title">
									ПРЕДСТАВИТЕЛИ ТОО «АЛМАТЫЭЛЕКТРОТРАНС», ВО ГЛАВЕ С ГЕНЕРАЛЬНЫМ
									ДИРЕКТОРОМ ТАЖИЕВЫМ Г.Ж., ПОСЕТИЛИ АЛМАТИНСКИЙ КОЛЛЕДЖ
									ПАССАЖИРСКОГО ТРАНСПОРТА И ТЕХНОЛОГИЙ.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-ig-posts">
				<div class="main-ig-posts__btns">
					<button class="main-ig-posts__btns-ig">
						<strong>Instagram</strong>
						<img
							src="@/assets/images/icon-instagram-cloud.svg"
							alt="Icon instagram"
						/>
					</button>
					<button class="main-ig-posts__btns-fb">
						<strong>Facebook</strong>
						<img
							src="@/assets/images/icon-facebook-cloud.svg"
							alt="Icon facebook"
						/>
					</button>
				</div>
				<div v-if="isLoading" class="loader main-ig-posts__list">
					<div class="main-ig-posts__wrapper">
						<div class="main-ig-posts__item">
							<div class="main-ig-posts__caption">
								<span></span><span></span>
							</div>
							<div class="main-ig-posts__img"></div>
							<div class="main-ig-posts__comments-list">
								<span></span><span></span><span></span>
							</div>
						</div>
					</div>
					<div class="main-ig-posts__wrapper">
						<div class="main-ig-posts__item">
							<div class="main-ig-posts__caption">
								<span></span><span></span>
							</div>
							<div class="main-ig-posts__img"></div>
							<div class="main-ig-posts__comments-list">
								<span></span><span></span><span></span>
							</div>
						</div>
					</div>
					<div class="main-ig-posts__wrapper">
						<div class="main-ig-posts__item">
							<div class="main-ig-posts__caption">
								<span></span><span></span>
							</div>
							<div class="main-ig-posts__img"></div>
							<div class="main-ig-posts__comments-list">
								<span></span><span></span><span></span>
							</div>
						</div>
					</div>
					<div class="main-ig-posts__wrapper">
						<div class="main-ig-posts__item">
							<div class="main-ig-posts__caption">
								<span></span><span></span>
							</div>
							<div class="main-ig-posts__img"></div>
							<div class="main-ig-posts__comments-list">
								<span></span><span></span><span></span>
							</div>
						</div>
					</div>
				</div>
				<div v-else class="main-ig-posts__list">
					<div
						class="main-ig-posts__wrapper"
						v-for="post in IGMediaPosts"
						:key="post.id"
					>
						<div class="main-ig-posts__item">
							<button
								class="main-ig-posts__btn"
								@click="$router.push(`/instagram/${post.id}`)"
							></button>
							<div class="main-ig-posts__img">
								<img :src="post.media_url" alt="image" />
							</div>
							<div class="main-ig-posts__caption">
								<strong>{{ post.caption }}</strong>
							</div>
							<div
								class="main-ig-posts__comments-list"
								v-if="post.comments && post.comments.data"
							>
								<div class="main-ig-posts__comments">
									<strong>{{ post.comments?.data[0]?.username }}</strong>
									<p>{{ post.comments?.data[0]?.text }}</p>
								</div>
								<div class="main-ig-posts__comments">
									<strong>{{ post.comments?.data[1]?.username }}</strong>
									<p>{{ post.comments?.data[1]?.text }}</p>
								</div>
							</div>
							<div v-else class="main-ig-posts__comments-list">
								<div class="no-comments">
									Комментариев нет.<br /><a
										target="_blank"
										:href="post.permalink"
										>Оставить свой комментарий</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="video-banner">
				<!-- <video autoplay loop muted>
							<source src="~@/assets/compress.mp4" type="video/mp4" />
						</video> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useIGStore } from '@/store/useIGStore'

const store = useIGStore()
const IGMediaPosts = computed(() => {
	if (store.IGMediaPosts && store.IGMediaPosts.data) {
		return store.IGMediaPosts.data.slice(0, 4)
	}
	return []
})

const isLoading = computed(() => store.isLoading) // Добавляем isLoading

onBeforeMount(() => {
	store.fetchIGPosts()
})
</script>

<style lang="scss" scoped>
.main-info {
	display: flex;
	margin-top: 30px;
	position: relative;
	justify-content: space-between;
	&__intro {
		width: 50%;
		color: #000;
	}
}

.main-news {
	position: relative;
	h2 {
		margin-bottom: 20px;
		font-weight: 900;
		font-size: 42px;
	}
	&__list {
		display: flex;
		flex-direction: column;
		margin: 0 -12px;
	}
	&__item {
		position: relative;
		height: 186px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		&::before {
			content: '';
			position: absolute;
			border-radius: 8px;
			background-color: var(--yellow);
			left: 6px;
			bottom: -6px;
			top: 6px;
			right: -6px;
			z-index: -1;
		}
		&-wrapper {
			width: 50%;
			padding: 12px;
		}
		&-img {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			z-index: 1;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 8px;
			}
			&::before {
				content: '';
				border-radius: 8px;
				background: linear-gradient(
					180deg,
					rgba(66, 66, 66, 0.4) 63.96%,
					#424242 100%
				);
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
			}
		}
		&-title {
			position: relative;
			z-index: 1;
			font-weight: 700;
			font-size: 10px;
			color: #fff;
			padding: 8px;
			height: 70px;
		}
	}
}

.video-banner {
	overflow: hidden;
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

video {
	object-fit: cover;
	object-position: top;
	width: 100%;
}

.loader {
	&.main-ig-posts__list {
		span {
			display: block;
			width: auto;
		}
		.main-ig-posts__caption {
			height: 40px;
			span {
				height: 3px;
				margin-bottom: 8px;
				background-color: rgba(255, 255, 255, 0.5);
			}
		}
		.main-ig-posts__comments-list {
			height: 81px;
			span {
				height: 6px;
				margin-bottom: 10px;
				background-color: rgba(255, 255, 255, 0.5);
			}
		}
		.main-ig-posts__img {
			overflow: hidden;
			height: 100%;
			&::after {
				content: '';
				position: absolute;
				top: -100%;
				bottom: -60%;
				left: -100%;
				width: 50px;
				background-color: rgba(255, 255, 255, 0.1);
				transform: rotate(45deg);
				animation: blink 2s infinite 0s ease-out;
				z-index: 1;
			}
			@keyframes blink {
				0% {
					left: -100%;
				}
				40% {
					left: 200%;
				}
				100% {
					left: 200%;
				}
			}
		}
	}
}

.main-ig-posts {
	width: 44%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	&__btns {
		display: flex;
		button {
			padding: 4px 4px 4px 8px;
			display: flex;
			align-items: center;
			strong {
				font-size: 14px;
				margin-right: 6px;
			}
			img {
				width: 35px;
				height: 35px;
			}
		}
		&-ig {
			background-color: var(--yellow);
		}
		&-fb {
			background-color: var(--blue);
		}
	}
	&__list {
		display: flex;
		flex-wrap: wrap;
		max-width: 564px;
		width: 100%;
		background-color: var(--yellow);
		padding: 5px 5px 0 0px;
	}
	&__wrapper {
		width: 50%;
		padding: 0 5px;
		margin-bottom: 10px;
		position: relative;
		&:hover {
			.main-ig-posts__item {
				&::before {
					right: -2px;
					bottom: -2px;
					top: -2px;
					left: -2px;
				}
			}
		}
	}
	&__btn {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 2;
	}
	&__item {
		position: relative;
		height: 280px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&::before {
			content: '';
			position: absolute;
			right: -5px;
			top: 5px;
			bottom: -5px;
			left: 5px;
			background-color: var(--blue);
			transition: 0.15s ease;
		}
	}
	&__img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.7);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__caption {
		position: relative;
		background: rgba(2, 133, 187, 0.3);
		z-index: 1;
		padding: 8px 8px 0;
		strong {
			white-space: normal;
			text-wrap: nowrap;
			white-space-collapse: break-spaces;
			height: 43px;
			line-height: 0.9;
			overflow: hidden;
			text-overflow: ellipsis;
			display: block;
			font-size: 12px;
		}
	}
	&__comments {
		font-size: 11px;
		height: 38px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: break-spaces;
		&:nth-of-type(1) {
			margin-bottom: 5px;
		}
		strong {
			margin-right: 5px;
			margin-bottom: 3px;
		}
		p {
			display: inline;
		}
		&-list {
			position: relative;
			z-index: 1;
			padding: 8px;
			background: linear-gradient(
				180deg,
				rgba(2, 133, 187, 0) 0%,
				rgba(2, 133, 187, 0.3) 0.01%
			);
			.no-comments {
				font-size: 14px;
				height: 81px;
			}
		}
	}
}
</style>
