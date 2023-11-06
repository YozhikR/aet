<template>
	<footer class="footer">
		<div class="container">
			<a
				class="chat-whatsapp"
				target="_blank"
				href="https://wa.me/77057157029?text=Здравствуйте,"
			>
				<img src="~@/assets/images/icon-whatsapp.svg" alt="Chat on WhatsApp" />
			</a>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
	position: relative;
	height: 200px;
	margin-top: 30px;
	background: linear-gradient(#0b0132 80%, #000 100%);
}
.chat-whatsapp {
	position: fixed;
	right: 10%;
	bottom: 20%;
	width: 64px;
	height: 64px;
	padding: 10px;
	background-color: green;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}
</style>
