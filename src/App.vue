<template>
	<div class="wrapper">
		<div class="wrapper-in">
			<NavBar />
			<main>
				<router-view />
			</main>
			<!-- <BusLoader></BusLoader> -->
			<NavFooter />
		</div>
	</div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import NavFooter from '@/components/NavFooter.vue'
// import BusLoader from '@/components/BusLoader.vue'
</script>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/fonts.css';
:root {
	--raleway: 'Raleway', sans-serif;
	--text: #424242;
	--yellow: #ffd95b;
	--blue: #00577c;
	--blue-opacity: #004aad;
}
html {
	color: #fff;
	/* background: rgba(0, 65, 91, 1); */
	/* background-repeat: no-repeat; */
	/* background: linear-gradient(245deg, #00405b, #005d84f2, #00405b, #005d84f2); */
	/* animation: gradient 15s ease infinite; */
	/* background-size: 400% 400%; */
}
/* @keyframes gradient {
	0% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} */
.wrapper,
html,
body {
	height: 120vh;
	font-family: var(--raleway);
	font-weight: 500;
	overflow: hidden;
}
.wrapper-info {
	margin-top: 15px;
	margin-bottom: 30px;
}
.card {
	background: var(--blue-opacity);
	border-radius: 8px;
	padding: 15px;
	/* box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.2); */
}

.wrapper-in {
	position: relative;
	display: flex;
	min-height: 120vh;
	flex-direction: column;
	justify-content: space-between;
	/* overflow: hidden; */
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
</style>
