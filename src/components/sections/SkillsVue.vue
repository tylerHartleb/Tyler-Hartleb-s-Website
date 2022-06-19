l<template>
    <div class="skills-section" id="skills">
        <h2 class="heading-title" v-html="'Skills'" />
        <ul class="skills__container">
            <li v-for="{ title, skills } in skillsList" :key="title">
                <Card :title="title">
                    <template #body>
                        <ul>
                            <li class="skills-card__item" v-for="{skill, svg} in skills">
                                <img class="skill-card__image" :src="svg" aria-hidden="true">
                                <span v-html="skill" />
                            </li>
                        </ul>
                    </template>
                </Card>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import Card from '../Card.vue';

    const skillsList = ref([
        {
            title: 'Front-end',
            skills: [
                { skill: 'HTML', svg: new URL('../../assets/images/frontend/html.svg', import.meta.url).href },
                { skill: 'CSS', svg: new URL('../../assets/images/frontend/css.svg', import.meta.url).href },
                { skill: 'JavaScript', svg: new URL('../../assets/images/frontend/javascript.svg', import.meta.url).href },
                { skill: 'Vue.js', svg: new URL('../../assets/images/frontend/vue.svg', import.meta.url).href },
                { skill: 'React', svg: new URL('../../assets/images/frontend/react.svg', import.meta.url).href },
                { skill: 'SASS / SCSS', svg: new URL('../../assets/images/frontend/scss.svg', import.meta.url).href },
            ]
        },
        {
            title: 'Back-end',
            skills: [
                { skill: 'Java', svg: new URL('../../assets/images/backend/java.svg', import.meta.url).href },
                { skill: 'Python', svg: new URL('../../assets/images/backend/python.svg', import.meta.url).href },
                { skill: 'C++', svg: new URL('../../assets/images/backend/c.svg', import.meta.url).href },
                { skill: 'Haskell', svg: new URL('../../assets/images/backend/haskell.svg', import.meta.url).href },
            ]
        },
        {
            title: 'Other',
            skills: [
                { skill: 'Node.js', svg: new URL('../../assets/images/other/node.svg', import.meta.url).href },
                { skill: 'Git / GitHub', svg: new URL('../../assets/images/other/git.svg', import.meta.url).href },
                { skill: 'Azure', svg: new URL('../../assets/images/other/azure.svg', import.meta.url).href },
                { skill: 'Figma', svg: new URL('../../assets/images/other/figma.svg', import.meta.url).href}
            ]
        }
    ])

</script>

<style lang="scss">

    .skills-section {
        margin-bottom: 8rem;
    }

    .skills__container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .skills-card__item {
        align-items: center;
        display: flex;
        margin-bottom: 2rem;
    }

    .skill-card__image {
        margin-right: 1rem;
    }

</style>