l<template>
    <div class="skills-section" id="skills">
        <h2 class="heading-title" v-html="'Skills'" />
        <ul class="skills__container">
            <li v-for="{ title, skills } in skillsList" :key="title">
                <Card :title="title">
                    <template #body>
                        <ul>
                            <li class="skills-card__item" v-for="{skill, svg} in skills">
                                <img class="skill-card__image" :src="resolveImageSrc(svg)" aria-hidden="true">
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
                { skill: 'HTML', svg: 'frontend/html.svg' },
                { skill: 'CSS', svg: 'frontend/css.svg' },
                { skill: 'JavaScript', svg: 'frontend/javascript.svg' },
                { skill: 'Vue.js', svg: 'frontend/vue.svg' },
                { skill: 'React', svg: 'frontend/react.svg' },
                { skill: 'SASS / SCSS', svg: 'frontend/scss.svg' },
            ]
        },
        {
            title: 'Back-end',
            skills: [
                { skill: 'Java', svg: 'backend/java.svg' },
                { skill: 'Python', svg: 'backend/python.svg' },
                { skill: 'C++', svg: 'backend/c.svg' },
                { skill: 'Haskell', svg: 'backend/haskell.svg' },
            ]
        },
        {
            title: 'Other',
            skills: [
                { skill: 'Node.js', svg: 'other/node.svg' },
                { skill: 'Git / GitHub', svg: 'other/git.svg' },
                { skill: 'Azure', svg: 'other/azure.svg' },
                { skill: 'Figma', svg: 'other/figma.svg'}
            ]
        }
    ])

    function resolveImageSrc(url) {
        return new URL('../../assets/images/' + url, import.meta.url).href
    }

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