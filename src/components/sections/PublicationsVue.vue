<template>
    <div class="publications-section" id="publications">
        <h2 class="heading-title" v-html="'Publications'" />

        <ul class="publications__container accordion" id="publications-accordion">
            <li class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Exploring Magic Interactions for Collaboration in Virtual Reality Learning Factory
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#publications-accordion">
                    <div class="accordion-body">
                        <strong>Hartleb, T.,</strong> Kim, H., Zhao, R., Aqlan, F., & Yang, H. (2023). Exploring Magic Interactions for Collaboration in Virtual Reality Learning Factory. ASEE Annual Conference and Exposition, Conference Proceedings.
                    </div>
                </div>
            </li>

            <li class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Behavioral Modeling of Collaborative Problem Solving in Multiplayer Virtual Reality Manufacturing Simulation Games
                    </button>
                </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Kim, H., <strong>Hartleb, T.,</strong> Bello, K., Aqlan, F., Zhao, R., and Yang, H. (October 10, 2023). "Behavioral Modeling of Collaborative Problem Solving in Multiplayer Virtual Reality Manufacturing Simulation Games." ASME. J. Comput. Inf. Sci. Eng. March 2024; 24(3): 031006. <a href="https://doi.org/10.1115/1.4063089" target="_blank">https://doi.org/10.1115/1.4063089</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use 'src/assets/functions';
    
    .publications-section {
        margin-bottom: 8rem;
    }

    .publications__container .accordion-item {
        background-color: var(--color-background);
        border-color: var(--nav-color);
        color: var(--color-text);

        .accordion-header .accordion-button {
            background-color: var(--color-background);
            color: var(--color-text);
            
            &:not(.collapsed) {
                background-color: var(--color-button);
                color: var(--color-button-text);
            }

            &::after {
                $color-text: black;
                $color-button: white;
                --bs-accordion-btn-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$color-text}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
                --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$color-button}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");

                @media (prefers-color-scheme: dark) {
                    $color-text_inverted: white;

                    --bs-accordion-btn-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$color-text_inverted}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
                }
            }
        }
    }
</style>
