<template>
    <div class="main-section" id="home">
        <div class="main-section__title-container">
            <p class="main-section__text _top">Hello world!</p>
            <h1 class="main-section__text _title">I'm Tyler Hartleb</h1>
            <p class="main-section__text _bottom">Software developer</p>  
        </div>
          
        <div class="main-section__waves-container">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 100 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="wave-parallax">
                    <use href="#wave" x="0" y="0" />
                    <use href="#wave" x="0" y="3" />
                    <use href="#wave" x="0" y="5" />
                    <use href="#wave" x="0" y="8" />
                </g>
            </svg>
        </div>
    </div>
</template>

<style lang="scss">

    .main-section {
        padding-top: 6.5rem;
        margin-bottom: 8rem;
        height: 100%;
    }

    .main-section__text {
        @extend .text-spaced;

        &._top {
            font-size: $heading-md;
            font-weight: 100;
            margin-bottom: 0;

            @media (min-width: 568px) {
                font-size: $heading-lg;
            }
        }

        &._title {
            font-size: $heading-lg;

            @media (min-width: 568px) {
                font-size: $heading-xl;
            }
        }

        &._bottom {
            font-size: $heading-sm;
            text-transform: uppercase;

            @media (min-width: 568px) {
                font-size: $heading-md;
            }
        }
    }

    .main-section__waves-container {
        display: block;
        left: 50%;
        margin-bottom:-7px;
        margin-left: -50vw;
        margin-right: -50vw;
        position: relative;
        right: 50%;
        width: 100vw;
    }

    .wave-parallax > {
        use {
            animation: waves 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
            transform: translateX(0px);

            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    animation-delay: -#{$i * 1 + 1}s;
                    animation-duration: #{$i * 3 + 24}s;
                    fill: var(--color-wave-#{$i})
                }
            }

            &:nth-child(4) {
                animation-delay: -5s;
                animation-duration: 40s;
                fill: var(--color-wave-4)
            }
        }
    }

    @keyframes waves {
        0%{
            transform: translateX(-90px);
        }
        100%{
            transform: translateX(85px);
        }
    }
        
</style>


