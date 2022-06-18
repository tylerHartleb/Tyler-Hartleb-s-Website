<template>
	<WebsiteHeader />

	<RouterView />

	<WebsiteFooter />
</template>

<script setup>
	import { provide, reactive, readonly, ref } from 'vue';
	import { RouterView } from 'vue-router'
	import { useIntersectionObserver } from './scripts/observer';

	import WebsiteHeader from "@/components/WebsiteHeader.vue";
	import WebsiteFooter from "@/components/WebsiteFooter.vue";

	// Website navigation functionality
	const sections = {
		'home': { element: '.main-section', active: true },
		'about': { element: '.about-section', active: false },
		'skills': { element: '.skills-section', active: false},
		'projects': { element: '.projects-section', active: false}
	}

	const navList = reactive(sections);

	const activeElement = ref('home');

	function updateActive(title) {
		navList[activeElement.value].active = false;
		navList[title].active = true;
		activeElement.value = title;
	}

	useIntersectionObserver(navList, updateActive);

	provide('navigation', {
		navList, 
		updateActive
	});

	provide('read-only-active-element', readonly(activeElement));
</script>