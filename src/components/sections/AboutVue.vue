<template>
    <div class="about-section" id="about">
        <h2 class="heading-title about-section__title" v-html="'About me'" />
        <p class="about-section__text">
            My name is Tyler Hartleb, I am a fourth year Computer Science Honours student at the University of Calgary. I am currently working at WestJet as a front-end developer intern, implementing responsive designs using modern JavaScript frameworks.
        </p>
        <a class="button-primary" aria-label="(Opens in a new tab)" href="" target="_blank" v-html="'Resume'" />
    </div>
</template>

<style lang="scss">

    .about-section {
        margin-bottom: 8rem;
    }

    .about-section__text {
        margin-bottom: 2rem;
    }

</style>