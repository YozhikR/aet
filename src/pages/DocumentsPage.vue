<template>
	<div class="container">
		<div class="accordion__list">
			<AccordionPanel></AccordionPanel>
			<div class="doc-procurement">
				<h2>Реестр планов государственных закупок</h2>
				<a
					href="https://goszakup.gov.kz/ru/registry/plan?filter%5Bname%5D=&filter%5Bcustomer%5D=380340000017&filter%5Bnumber%5D=&filter%5Bspec%5D=&filter%5Bstatus%5D=&filter%5Bqvazi%5D=&smb="
					target="_blank"
					>Перейти</a
				><span class="clue">?</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import AccordionPanel from '@/components/AccordionPanel.vue'
</script>

<style lang="scss">
.accordion__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 30px;
	.accordion {
		width: 48%;
	}
}
.doc-procurement {
	h2 {
		font-size: 32px;
		font-weight: 900;
		text-align: left;
		margin-top: 80px;
		color: #000;
	}
	a {
		display: inline-block;
		background-color: #d9d9d9;
		color: #000;
		text-align: center;
		border-radius: 8px;
		padding: 8px 16px;
		max-width: 170px;
		width: 100%;
		font-weight: bold;
		margin-top: 8px;
		transition: 0.3s ease;
		&:hover {
			background-color: var(--yellow);
		}
	}
	.clue {
		display: inline-block;
		margin-left: 15px;
		position: relative;
		color: #fff;
		padding: 8px 14px;
		font-weight: bold;
		text-align: center;
		background-color: var(--blue);
		border-radius: 50%;
		cursor: pointer;
		transition: 0.15s ease;
		&::before {
			content: 'Что такое «реестр государственных закупок»? Реестр государственных закупок – это целая система различных сведений, касающихся процедуры госзаказа. В него включают информацию о закупаемых услугах или продукции, о заказчиках и поставщиках, о потребителях и об условиях проведения тендеров.';
			position: absolute;
			font-size: 12px;
			width: 300px;
			left: 40px;
			bottom: 38px;
			font-weight: normal;
			border-radius: 10px;
			pointer-events: none;
			padding: 4px;
			transition: 0.15s ease;
			background-color: var(--blue);
			overflow: hidden;
			opacity: 0;
		}
		&:hover {
			background-color: var(--yellow);
			color: #000;
			&::before {
				opacity: 1;
				color: #fff;
				padding: 8px;
			}
		}
	}
}
</style>
