<template>
    <div class="project_wrapper _ar-shopping-tool">
        <Card :small="true" :title="title">
            <template #body>
                <p class="project-card__summary center" v-html="summary" />
            </template>
            <template #controls v-if="showAdditionalInfo">
                <button class="button-primary" @click="openModal()">
                    More details
                </button>
            </template>
        </Card>

        <Modal v-if="showAdditionalInfo" @closed="modalClosed()" :display="showModal">
            <template #body>
                <slot name="info" />
            </template>
        </Modal>
    </div>
</template>

<script setup>
    import { ref, useSlots, computed } from 'vue'

    import Card from './Card.vue';

    import Modal from './Modal.vue';

    const slots = useSlots()

    const showAdditionalInfo = computed(() => slots.info)

    // Setup logic

    const { title, summary } = defineProps({
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        }
    })

    // Modal logic

    const showModal = ref(false)

    function openModal() {
        showModal.value = true
    }

    function modalClosed() {
        showModal.value = false
    }
</script>

<style lang="scss">

    .project-card__title {
        margin: 0 1rem;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

</style>