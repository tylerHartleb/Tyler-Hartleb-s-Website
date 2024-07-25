<template>
    <div class="about-section" id="about">
        <h2 class="heading-title about-section__title" v-html="'About me'" />
        <p class="about-section__text">
            My name is Tyler Hartleb, and I hold an Honours degree in Computer Science from the University of Calgary. I am currently working at WestJet as a software developer, where I implement responsive designs and develop innovative solutions using modern JavaScript frameworks. In my free time, I enjoy building computers and exploring the latest advancements in technology.
        </p>
        <a class="button-primary" aria-label="(Opens in a new tab)" :href="resume" target="_blank" v-html="'Resume'" />
    </div>
</template>

<script setup>
    import resume from '@/assets/files/resume.pdf'
</script>

<style lang="scss">

    .about-section {
        margin-bottom: 8rem;
    }

    .about-section__text {
        margin-bottom: 2rem;
    }

</style>