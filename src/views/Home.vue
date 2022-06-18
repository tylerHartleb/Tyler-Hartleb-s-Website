<template>
    <main class="container mx-auto">
        <MainVue />
        <AboutVue />
        <SkillsVue />
        <ProjectsVue />
    </main>
</template>

<script setup>
    import MainVue from '@/components/sections/MainVue.vue';
    import AboutVue from '@/components/sections/AboutVue.vue';
    import SkillsVue from '@/components/sections/SkillsVue.vue';
    import ProjectsVue from '@/components/sections/ProjectsVue.vue';
</script>