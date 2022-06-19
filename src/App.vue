<template>
	<WebsiteHeader />

	<RouterView />

	<WebsiteFooter />
</template>

<script setup>
	import { RouterView } from 'vue-router'
	import WebsiteHeader from "@/components/WebsiteHeader.vue";
	import WebsiteFooter from "@/components/WebsiteFooter.vue";
</script>