<template>
    <main class="container mx-auto">
        <MainVue />
        <AboutVue />
        <SkillsVue />
        <PublicationsVue />
        <ProjectsVue />
    </main>
</template>

<script setup>
    import MainVue from '@/components/sections/MainVue.vue';
    import AboutVue from '@/components/sections/AboutVue.vue';
    import SkillsVue from '@/components/sections/SkillsVue.vue';
    import PublicationsVue from '@/components/sections/PublicationsVue.vue'
    import ProjectsVue from '@/components/sections/ProjectsVue.vue';
</script>