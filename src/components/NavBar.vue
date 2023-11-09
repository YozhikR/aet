<template>
	<header>
		<div class="navbar-container">
			<nav class="navbar">
				<div class="navbar__top">
					<button class="navbar__logo" @click="$router.push('/')">
						<div class="aet-logo">
							<img src="@/assets/images/aet-logo.svg" alt="AET" />
						</div>
						<h2>AlmatyElectroTrans</h2>
					</button>
					<div class="navbar__social">
						<div class="navbar__social-item">
							<a href="#"
								><img src="@/assets/images/icon-whatsapp.svg" alt="Whatsapp"
							/></a>
						</div>
						<div class="navbar__social-item">
							<a href="#"
								><img src="@/assets/images/icon-facebook.svg" alt="Facebook"
							/></a>
						</div>
						<div class="navbar__social-item">
							<a href="#"
								><img src="@/assets/images/icon-instagram.svg" alt="Instagram"
							/></a>
						</div>
						<div class="nav-lang">
							<input id="navLang" type="checkbox" />
							<label for="navLang">RU</label>
						</div>
					</div>
				</div>
				<div class="navbar__bottom">
					<ul class="navbar__links">
						<li>
							<button id="navMenu">
								<div class="nav-menu-icon">
									<span></span>
								</div>
								<span>Меню</span>
								<ul id="dropdown-menu">
									<li>
										<button @click="$router.push('/services')">Услуги</button>
									</li>
									<li>
										<button @click="$router.push('/carpark')">Автопарк</button>
									</li>
									<li>
										<button @click="$router.push('/helpful')">
											Полезная информация
										</button>
									</li>
									<li>
										<button @click="$router.push('/about')">О компании</button>
									</li>
									<li>
										<button @click="$router.push('/about')">Развитие</button>
									</li>
								</ul>
							</button>
						</li>
						<li>
							<button @click="$router.push('/documents')">Документы</button>
						</li>
						<li>
							<button @click="$router.push('/posts')">Новости</button>
						</li>
						<li>
							<button @click="$router.push('/transportationRules')">
								Правила перевозок
							</button>
						</li>
						<li>
							<button @click="$router.push('/bus-routes')">
								Расписание и маршруты
							</button>
						</li>
						<li>
							<button @click="$router.push('/contacts')">Контакты</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
	position: relative;
	background: var(--blue-opacity);
	z-index: 10;
}
.aet-logo {
	position: relative;
	margin-right: 16px;
	img {
		border-radius: 3px;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
	}
}
.navbar {
	padding: 16px 20px;
	border-radius: 0.9375rem;
	&-container {
		// max-width: 80rem;
		margin: 0 auto;
		padding: 0 10px;
	}
	&__top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
	}
	&__bottom {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			display: block;
			inset: 0 -50% auto -50%;
			height: 2px;
			background-color: var(--yellow);
		}
	}
	&__logo {
		display: flex;
		align-items: center;
		h2 {
			font-size: 20px;
			text-transform: uppercase;
			font-weight: bold;
			transition: 0.15s ease;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				display: block;
				right: 50%;
				left: 50%;
				bottom: 0;
				height: 2px;
				background-color: var(--yellow);
				transition: 0.15s ease;
			}
		}
		&:hover {
			h2 {
				color: var(--yellow);
				&::before {
					left: 0;
					right: 0;
				}
			}
		}
	}
	&__links {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 8px;
		padding: 15px 0 0;
		width: 100%;
		li {
			position: relative;
			margin-right: 10px;
			&::before {
				content: '';
				display: block;
				position: absolute;
				right: -25px;
				width: 4px;
				height: 8px;
				border-radius: 2px;
				background: var(--blue);
				top: 50%;
				transform: translateY(-50%);
			}
			&:last-of-type {
				&::before {
					display: none;
				}
			}
			button {
				color: #fff;
				font-weight: 600;
				text-align: center;
				font-size: 14px;
				padding: 7px 8px;
				transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
				position: relative;
				&::before {
					content: '';
					position: absolute;
					display: block;
					height: 1px;
					bottom: 0;
					left: 50%;
					right: 50%;
					background-color: var(--yellow);
					transition: 0.15s ease;
				}
				&:hover {
					&::before {
						left: 0;
						right: 0;
					}
				}
			}
		}
	}
	&__social {
		display: flex;
		&-item {
			border-radius: 50%;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 5px;
			margin: 0 16px;
			transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
			a {
				width: 28px;
				height: 28px;
			}
			&:hover {
				background-color: var(--blue);
			}
		}
	}
}
.nav-menu-icon {
	position: relative;
	width: 12px;
	height: 15px;
	margin-right: 10px;
	&::before,
	&::after,
	span {
		position: absolute;
		display: block;
		height: 2px;
		left: 0;
		right: 0;
		background-color: var(--yellow);
	}
	&::before {
		content: '';
		top: 1px;
		animation: menuBefore 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite
			alternate;
	}
	span {
		top: 6.5px;
		animation: menuSpan 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite
			alternate;
	}
	&::after {
		content: '';
		bottom: 1px;
		animation: menuAfter 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite
			alternate;
	}
	@keyframes menuBefore {
		0% {
			left: 40%;
			right: 40%;
		}
		50% {
			left: 10%;
			right: 10%;
		}
		100% {
			left: 15%;
			right: 15%;
		}
	}
	@keyframes menuSpan {
		0% {
			left: 0;
			right: 0;
		}
		50% {
			left: 10%;
			right: 10%;
		}
		100% {
			left: 40%;
			right: 40%;
		}
	}

	@keyframes menuAfter {
		0% {
			left: 30%;
			right: 30%;
		}
		50% {
			left: 0;
			right: 0;
		}
		100% {
			left: 40%;
			right: 40%;
		}
	}
}
#navMenu {
	font-weight: 900;
	position: relative;
	padding-right: 6px;
	display: flex;
	align-items: center;
	img {
		position: absolute;
		left: 0;
	}
}
/* Скрыть выпадающее меню по умолчанию */
#dropdown-menu {
	max-height: 0;
	overflow: hidden;
	transition: all 0.15s ease;
	position: absolute;
	background-color: var(--blue);
	width: min-content;
	top: 32px;
	left: -10px;
	right: -10px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	li {
		padding: 5px 10px;
		width: 100%;
		button {
			width: 100%;
		}
	}
}
#navMenu:active,
#navMenu:hover,
#navMenu:focus {
	#dropdown-menu {
		max-height: 500px;
	}
}

.nav-lang {
	width: 50px;
	margin-left: 10px;
}
</style>
