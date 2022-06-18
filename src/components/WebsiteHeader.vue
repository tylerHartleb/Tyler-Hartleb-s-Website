<template>
	<header class="header" ref="root">
		<div class="container mx-auto header__container">
			<h1 class="heading-md header__title">
				<span class="text-bold">Tyler</span>
				<span class="light-text">h</span>
			</h1>

			<div v-if="isMobile" class="header__nav-btn-container">
				<button class="header__nav-btn" aria-label="Open navigation" @click="toggleNav()">
					<span />
					<span />
				</button>
			</div>
			
			<transition name="slide">
				<nav v-if="!isMobile || navOpen" class="header-nav">
					<ul class="nav__container">
						<li v-for="(item, key) in navList" :key="key">
							<button class="nav__item" :class="['_' + key, {'_active' : item.active}]" @click="updateActive(key), toggleNav(), scrollToViewAdjusted(key);" v-html="key" />
						</li>
					</ul>
					<div class="active-marker" />
				</nav>
			</transition>
		</div>
	</header>
</template>

<script setup>
	import { nextTick, onMounted, ref, inject, watch } from 'vue';
	import { useBreakpoints } from '../scripts/breakpoints';
	import { useEventListener } from '../scripts/event';
 
	const root = ref(null);

	// Width logic

	const { windowWidth, isMobile } = useBreakpoints();

	async function resizeWidth() {
		await nextTick()
		if (windowWidth.value > 768) {
			root.value.querySelector('.active-marker').style.width = calculateWidth(activeElement.value) + 'px';
			moveActiveMarker(activeElement.value);
		}
	}

	useEventListener(window, 'resize', resizeWidth);

	// Navigation

	const { navList, updateActive } = inject('navigation');

	const activeElement = inject('read-only-active-element');

	const pauseObserver = inject('pauseObserver');

	watch(activeElement, async (newValue) => {
		await nextTick();

		await moveActiveMarker(newValue);
	})

	// Mobile functionality

	const navOpen = ref(false)

	function toggleNav() {
		if (!isMobile.value) return

		const navBtn = root.value.querySelector('.header__nav-btn')

		navBtn.classList.toggle('_active')
		navOpen.value = !navOpen.value

		if (navBtn.classList.contains("_active")) {
			root.value.style.backgroundColor = '#1D1D1F';
			root.value.style.color = '#ffffff'
		} else {
			root.value.style.backgroundColor = 'var(--color-background)';
			root.value.style.color = 'var(--color-text)';
		}
	}

	// Desktop functionality

	async function moveActiveMarker(title) {
		var precedingWidths = 0

		Object.keys(navList).every(nav => {
			if (nav === title) return false

			precedingWidths += calculateWidth(nav)

			return true
		})

		const marker = root.value.querySelector('.active-marker')
		marker.style.width = calculateWidth(title) + 'px'
		marker.style.left = precedingWidths + 'px'
	}

	function calculateWidth(classString) {
		const element = root.value.querySelector('._' + classString)
		return element.scrollWidth
	}

	async function scrollToViewAdjusted(element) {
		pauseObserver(true);
		await smoothScroll(document.getElementById(element));
		pauseObserver(false);
	}

	function smoothScroll(element) {
		const elementPosition = element.getBoundingClientRect().top
		const headerOffset = root.value.scrollHeight;
		const targetPosition = elementPosition + window.pageYOffset - headerOffset;
	
		window.scrollTo({
			top: targetPosition,
			behavior: "smooth"
		});

		return new Promise((resolve) => {
			const failed = setTimeout(() => {
				resolve();
			}, 250);

			const scrollHandler = () => {
				const bottomOfScreen = document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight
				if (window.pageYOffset === targetPosition || bottomOfScreen) {
					window.removeEventListener("scroll", scrollHandler);
					clearTimeout(failed);
					resolve();
				}
			}

			if (self.pageYOffset === targetPosition) {
				clearTimeout(failed);
				resolve();
			} else {
				window.addEventListener("scroll", scrollHandler);
			}
		})
	}

	onMounted(() => {
		if (!isMobile.value) root.value.querySelector('.active-marker').style.width = calculateWidth('home') + 'px'
	})
</script>

<style lang="scss">
	@use 'src/assets/typography' as *;

	$font-size-nav: 1.125rem;


	.header {
		background-color: var(--color-background);
		color: var(--color-text);
		transition: background-color 0.2s, color 0.2s linear;
		position: sticky;
		top: 0;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		z-index: 99;
	}

  	.header__container {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		position: sticky;
	}

	.header__title {
		flex: 50%;

		@media (min-width: 768px) {
			flex: unset;
		}
	}

	.header__nav-btn-container {
		display: flex;
		flex: 50%;
		justify-content: flex-end;
	}
	
	.header__nav-btn {
        align-items: center;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
		gap: 4px;
        height: 36px;
        justify-content: center;
        width: 36px;

		span {
			background-color: var(--color-text);
			height: 2px;
			transition: margin 0.2s, transform 0.2s linear;
			width: 25px;
    	}

		&._active {
			gap: 0px;

			span {
				background-color: #ffffff;
				margin: -1px;

				&:nth-child(1) {
					transform: rotate(-45deg);
				}

				&:nth-child(2) {
					transform: rotate(45deg);
				}
			}
		}
	}

	nav {
		border-top: 1px solid #424245;
		display: flex;
		flex: 100%;
		justify-content: center;
		height: 12rem;
		margin-top: 8px;
		padding-top: 0.5rem;
		position: relative;

		@media (min-width: 768px) {
			border: none;
			flex: unset;
			height: auto;
			margin: 0;
			padding: 0;
		}
	}

  	.nav__container {
		align-items: flex-start;
		display: flex;
		top: 0;
		gap: 8px;
		width: 80%;
		flex-direction: column;

		li {
			border-bottom: 1px solid #424245;
			width: 100%;

			&:last-child {
				border: none;
			}
		}

		@media (min-width: 768px) {
			align-items: center;
			background-color: var(--nav-color);
			border-radius: 30px;
			flex-direction: row;
			gap: 0px;
			width: auto;

			li {
				border: none;
				width: auto;
			}
		}
  	}

  	.nav__item {
		color: #f5f5f7;
		padding-bottom: 0.25rem;
		text-align: left;
		width: 100%;

		@media (min-width: 768px) {
			align-items: center;
			color: var(--color-text);
			border-radius: 30px;
			display: flex;
			font-size: $font-size-nav;
			justify-content: center;
			padding: 0.5rem 1.5rem;
			position: relative;
			text-decoration: none;

			&:hover {
				text-decoration: none;
				color: var(--color-text);
			}

			&:focus-visible {
				outline-color: var(--color-button);
				outline-style: solid;
				outline-width: medium;
			}

			&._active {
				color: var(--color-text_inverted);
				transition: color 0.2s ease-in;
				z-index: 2;

				&:focus-visible {
					outline-offset: 3px;
				}
			}
		}
  	}

	.active-marker {
		display: none;

		@media (min-width: 768px) {
			display: block;
			background-color: var(--color-button);
			border-radius: 30px;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			transition: all 0.2s ease-in;
			z-index: 1;
		}
	}

	// Transitions
	.slide-enter-active,
	.slide-leave-active {
		transition: height 0.2s ease-in-out;
		overflow: hidden;
	}

	.slide-enter-from,
	.slide-leave-to {
		height: 0;
	}
</style>
