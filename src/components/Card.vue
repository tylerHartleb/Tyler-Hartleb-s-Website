<template>
    <div class="card" :class="{'_small': small}">
        <div class="card__container">
            <h3 class="heading-md card__title" v-html="title" />
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script setup>
    const { small, title } = defineProps({
        small: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        }
    })
</script>

<style lang="scss">
    @use 'src/assets/functions';

    .card {
        background-color: var(--color-background);
        border-color: var(--nav-color);
        border-radius: 20px;
        height: functions.relative(500px);
        padding: 1rem;
        width: functions.relative(300px);

        @media (min-width: 1200px) {
            height: functions.relative(545px);
            width: functions.relative(360px);
        }

        &._small {
            height: functions.relative(345px);
            width: functions.relative(260px);
        }
    }

    .card__container {
        margin: 0 1rem;
    }

    .card__title {
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
</style>