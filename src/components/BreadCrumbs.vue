<template>
	<nav class="breadcrumbs">
		<ul>
			<li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
				<router-link v-if="breadcrumb.to" :to="breadcrumb.to">{{
					breadcrumb.text
				}}</router-link>
				<span v-else>{{ breadcrumb.text }}</span>
				<span class="" v-if="index < breadcrumbs.length - 1"> / </span>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

interface IBreadcrumb {
	text?: string
	to?: string
}

const getBreadcrumbs = () => {
	const matchedRoutes = route.matched
	const breadcrumbs: IBreadcrumb[] = [{ text: 'Главная', to: '/' }]

	for (let i = 0; i < matchedRoutes.length; i++) {
		if (matchedRoutes[i].meta && matchedRoutes[i].meta.breadcrumb) {
			breadcrumbs.push({
				text: matchedRoutes[i].meta.breadcrumb as string,
				to: matchedRoutes[i].path,
			})
		} else if (i === matchedRoutes.length - 1) {
			breadcrumbs.push({
				text: matchedRoutes[i].path.split('/').pop() as string,
			})
		}
	}

	return breadcrumbs
}

const breadcrumbs = getBreadcrumbs()
// console.log(breadcrumbs) // Убрать коммент, если хочется посмотреть что добавляется в массив.
</script>

<style lang="scss" scoped>
.breadcrumbs {
	color: var(--text);

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;

		li {
			display: flex;
			align-items: center;

			a {
				color: var(--text);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}

			span {
				color: var(--text);
			}
		}
	}
}
</style>
