<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="show" class="modal__backdrop">
                <div class="modal__wrapper">
                    <div class="modal__container">
                        <div class="modal__header">
                            <button aria-label="Close modal" class="modal__close-btn" @click="closeModal()">
                                <i class="fa-solid fa-xmark fa-2xl" />
                            </button>
                        </div>

                        <slot name="body" />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const props = defineProps({
        display: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['closed'])

    const show = ref(false)

    function openModal() {
        show.value = true;
    }

    function closeModal() {
        show.value = false;
        emit('closed')
    }

    watch(() => props.display, (display) => {
        if (display) {
            openModal()
        } else {
            closeModal()
        }
    })
</script>

<style lang="scss">

    .modal__backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        height: 100vh;
        height: 100dvh;
        left: 0;
        position: fixed;
        top: 0;
        transition: opacity 0.3s ease;
        width: 100vw;
        width: 100dvw;
        z-index: 9998;
    }

    .modal__wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal__container {
        background-color: var(--color-background);
        border-radius: 5px;
        //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        margin: 0px auto;
        padding: 20px 30px;
        transition: all 0.3s ease;
        width: 50dvw;
        width: 50vw;
    }

    .modal__header {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 1rem;
    }

    .modal__close-btn {
        display: flex;
        color: var(--color-text);
        justify-content: center;
    }

    // Transition styles
    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>