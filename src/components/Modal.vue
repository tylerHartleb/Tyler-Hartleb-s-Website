<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="show" class="modal" ref="modal" tabindex="-1" @keydown.esc="closeModal()">
                <FocusTrap :active="show">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button aria-label="Close" class="modal__close-btn" @click="closeModal()">
                                    <i class="fa-solid fa-xmark fa-2xl" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body">
                                <slot name="body" />
                            </div>
                        </div>
                    </div>
                </FocusTrap>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    import { ref, watch, nextTick } from 'vue'
    import { FocusTrap } from 'focus-trap-vue'

    const props = defineProps({
        display: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['closed'])

    const show = ref(false)

    const modal = ref(null)

    async function openModal() {
        document.body.classList.add('_no-scroll');
        show.value = true;
        await nextTick();
        modal.value.focus();
    }

    function closeModal() {
        document.body.classList.remove('_no-scroll');
        show.value = false;
        emit('closed');
    }

    watch(() => props.display, (display) => {
        if (display) {
            openModal();
        } else {
            closeModal();
        }
    })
</script>

<style lang="scss">

    .modal {
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
    }

    .modal-dialog-scrollable .modal-content {
        max-height: 75%;
    }

    .modal-content {
        background-color: var(--color-background);
        border-radius: 5px;
    }

    .modal-header {
        border: none;
        justify-content: flex-end;
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