<template>
    <div class="projects-section" id="projects">
        <h2 class="heading-title" v-html="'Projects'" />
        <ul class="projects__container">
            <li class="project__item _ar-app">
                <Project :title="arApp.title" :summary="arApp.summary">
                    <template #info>
                        <p>Lorem ipsum</p>
                    </template>
                </Project>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    import Project from '../Project.vue';

    const { arApp } = reactive({
        arApp: {
            title: 'AR shopping app',
            summary: ' Studied and developed an AR app in Unity to aid shopping experiences in retail'
        }
    })

</script>

<style lang="scss">
    .projects-section {
        margin-bottom: 8rem;
    }
</style>