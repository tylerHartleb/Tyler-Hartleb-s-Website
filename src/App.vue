<template>
	<WebsiteHeader />

	<RouterView />

	<WebsiteFooter />
</template>

<script setup>
	import { RouterView } from 'vue-router'
	import { useThemeStore } from '@/stores/theme';
	import { onMounted } from 'vue'

	import WebsiteHeader from "@/components/WebsiteHeader.vue";
	import WebsiteFooter from "@/components/WebsiteFooter.vue";

	const theme = useThemeStore();

	function genRandomInRange(range) {
		return Math.floor(Math.random() * range);
	}

	onMounted(() => {
		const rand = genRandomInRange(theme.numThemes);
		theme.setTheme(rand);
	});

</script>