<template>
	<div class="accordion" v-for="(item, index) in items" :key="index">
		<button class="accordion__title" @click="toggleItem(index)">
			{{ item.title }}
		</button>
		<div
			class="accordion__content"
			:class="{ 'content-open': item.isOpen, 'content-closed': !item.isOpen }"
		>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
			<div>{{ item.content }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
	{ title: 'Аудиторский отчет', content: 'Content for Item 1', isOpen: false },
	{ title: 'Трудовой кодекс', content: 'Content for Item 2', isOpen: false },
	{ title: 'Решение акимата', content: 'Content for Item 3', isOpen: false },
])

const toggleItem = (index: number) => {
	items.value[index].isOpen = !items.value[index].isOpen
}
</script>

<style lang="scss">
.accordion {
	margin-bottom: 15px;
	&__title {
		color: #fff;
		background-color: var(--blue);
		padding: 10px;
		width: 100%;
		border-radius: 15px 15px 0 0;
	}
	&__content {
		background-color: var(--yellow);
		color: #000;
		border-radius: 0 0 15px 15px;
	}
}
.content-closed {
	max-height: 0;
	overflow: hidden;
	opacity: 0;
	transition: max-height 0.15s ease-out;
}

.content-open {
	max-height: 500px; /* Устанавливайте максимальную высоту, соответствующую вашему контенту */
	opacity: 1;
	transition: max-height 0.15s ease-in;
	padding: 10px;
}
</style>
