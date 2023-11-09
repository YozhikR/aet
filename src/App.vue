<template>
	<div class="wrapper">
		<div class="wrapper-in">
			<NavBar />
			<main>
				<router-view v-slot="{ Component }">
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</main>
			<NavFooter />
		</div>
	</div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import NavFooter from '@/components/NavFooter.vue'
</script>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/fonts.css';
:root {
	--font-family: 'Roboto', sans-serif;
	--text: #424242;
	--yellow: #ffd95b;
	--blue: #00577c;
	--blue-opacity: #004aad;
}
html {
	color: #fff;
}

.wrapper,
html,
body {
	height: 120vh;
	font-family: var(--font-family);
	font-weight: 500;
}
.wrapper-info {
	margin-top: 15px;
	margin-bottom: 30px;
}
.card {
	/* background: var(--blue-opacity); */
	border-radius: 8px;
	padding: 15px;
	box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.2);
}

.wrapper-in {
	position: relative;
	display: flex;
	min-height: 120vh;
	flex-direction: column;
	justify-content: space-between;
	overflow-x: hidden;
}
main {
	flex: 1;
}
.container {
	/* max-width: 80rem; */
	margin: 0 auto;
	padding: 0 10px;
}
.link {
	position: relative;
}
.link::before {
	content: '\1F517';
	right: -5px;
	top: -5px;
	position: absolute;
	opacity: 1;
}
.link:hover::before {
	opacity: 1;
}
h1 {
	font-size: 48px;
	color: #000;
	font-weight: 900;
}
a {
	color: #fff;
}

/* Animation router-view */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
