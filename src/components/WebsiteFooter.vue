<template>
    <footer>
        <div class="container mx-auto footer-container">
            <ul class="footer__socials">
                <li v-for="{href, name} in socials" :key="name">
                    <a :href="href" aria-label="(Opens in a new tab)" target="_blank" >
                        <i class="fa-brands fa-2xl" :class="`fa-${name}`" />
                    </a>
                </li>
                <li>
                    <a href="mailto: tyler@hartleb.ca" aria-label="(Opens in mail client)" target="_blank" >
                        <i class="fa-solid fa-2xl fa-envelope" />
                    </a>
                </li>
            </ul>
            <span class="footer__name" v-html="'Tyler Hartleb'" />
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';

    const socials = ref([
        { href: 'https://twitter.com/tyler_hartleb', name: 'twitter'},
        { href: 'https://github.com/tylerHartleb', name: 'github'},
    ])

</script>

<style lang="scss" scoped>
    footer {
        background-color: #1D1D1F;
    }

    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: #D2D2D2;
        }
    }

    .footer-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        width: 100%;
        padding-bottom: 2rem;
        padding-top: 1rem;
    }

    .footer__socials {
        display: flex;
        gap: 3rem;
    }

    .footer__name {
        @extend .text-spaced;

        color: white;
        text-transform: uppercase;
    }
</style>