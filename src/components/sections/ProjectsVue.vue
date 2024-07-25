<template>
    <div class="projects-section" id="projects">
        <h2 class="heading-title" v-html="'Projects'" />
        <ul class="projects__container">
            <li class="project__item _emotion">
                <Project :title="emotionInMotion.title" :summary="emotionInMotion.summary">
                    <template #info>
                        <p>
                            An elicitation study to gain a better understanding of user preferences for non-anthropomorphic 
                            robots should express emotions.
                        </p>
                        <ul class="links">
                            <li>
                                <a aria-label="(Opens in a new tab)" :href="emotionPaper" target="_blank">
                                    <i class="fa-solid fa-book fa-2xl button-link" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </Project>
            </li>
            <li class="project__item _kanban">
                <Project :title="kanban.title" :summary="kanban.summary">
                    <template #info>
                        <p>
                            This project is implemented using TypeScript and React, offering account management features. Users can create boards, share them with other accounts, and add cards to the boards for effective collaboration and organization.
                        </p>
                        <ul class="links">
                            <li>
                                <a aria-label="(Opens in a new tab)" href="https://github.com/tylerHartleb/Kanban-Project" target="_blank">
                                    <i class="fa-brands fa-github fa-2xl button-link" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </Project>
            </li>
            <li class="project__item _digital-library">
                <Project :title="digitalLibrary.title" :summary="digitalLibrary.summary">
                    <template #info>
                        <p>
                            This project is a vertical prototype implemented using Windows Presentation Foundation developed using a task-centered design approach. The primary purpose of this prototype is to provide information about a Library’s digital and physical offerings. For example, the mobile app provides information about a book; for physical books, this may include the physical location; for digital books, the availability.
                        </p>
                        <ul class="links">
                            <li>
                                <a aria-label="(Opens in a new tab)" href="https://github.com/tylerHartleb/Digital-Library-Prototype" target="_blank">
                                    <i class="fa-brands fa-github fa-2xl button-link" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </Project>
            </li>
            <li class="project__item _ar-app">
                <Project :title="arApp.title" :summary="arApp.summary">
                    <template #info>
                        <p>Our team explored the concept of using augmented reality to provide additional information to shopping experiences.
                            To prototype this concept we used Unity and 
                            <a aria-label="(Opens in a new tab)" href="https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/index.html" target="_blank">AR foundation's</a>
                            image and object detection to display the user interface.
                        </p>
                        <ul class="links">
                            <li>
                                <a aria-label="(Opens in a new tab)" :href="researchPaper" target="_blank">
                                    <i class="fa-solid fa-book fa-2xl button-link" />
                                </a>
                            </li>
                            <li>
                                <a aria-label="(Opens in a new tab)" href="https://github.com/tylerHartleb/CPSC-599-VR" target="_blank">
                                    <i class="fa-brands fa-github fa-2xl button-link" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </Project>
            </li>
            <li class="project__item _health-app">
                <Project :title="healthRegistry.title" :summary="healthRegistry.summary">
                    <template #info>
                        <p>My team developed a functional prototype of a national health registry. Current health registries are complex and fragmented, our goal was to improve this by building
                            a simple to use health registry for patients, and doctors that was available across numerous devices. To implement this we used React, and SQL to develop a website that interacted with 
                            our backend. Patients were able to sign in, and view their appointments, prescriptions and tests. Doctors were able to sign in and view and edit their patients information.
                        </p>
                        <ul class="links">
                            <li>
                                <a aria-label="(Opens in a new tab)" href="https://github.com/tylerHartleb/CPSC471" target="_blank">
                                    <i class="fa-brands fa-github fa-2xl button-link" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </Project>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import Project from '../Project.vue';
    import researchPaper from '@/assets/files/cpsc-599.pdf';
    import emotionPaper from '@/assets/files/cpsc-584.pdf';

    const { emotionInMotion } = reactive({
        emotionInMotion: {
            title: 'Emotion in Motion',
            summary: 'A research study to better understand general user preference for how non-anthropomorphic robots should express emotions.',
        }
    })

    const { kanban } = reactive({
        kanban: {
            title: 'Managerization',
            summary: 'A minimalistic project management system designed to aid the overall productivity and management of project-based work.'
        },

    })

    const { digitalLibrary } = reactive({
        digitalLibrary: {
            title: 'Digital Library Prototype',
            summary: 'A vertical prototype implemented in WPF using a task-centered approach.'
        }
    })

    const { arApp } = reactive({
        arApp: {
            title: 'AR shopping app',
            summary: 'Studied and developed an AR app in Unity to aid shopping experiences in retail.'
        }
    })

    const { healthRegistry } = reactive({
        healthRegistry: {
            title: 'Health registry',
            summary: 'Developed a prototype national health registry database and website, using React, and SQL.'
        }
    })
</script>

<style lang="scss">
    .projects-section {
        margin-bottom: 8rem;
    }

    .projects__container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .links {
        display: flex;
        gap: 1rem;

        li a {
            color: var(--color-button);

            &:hover {
                color: var(--color-button_hover);
            }
        }
    }    
</style>