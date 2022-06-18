import { ref, computed } from 'vue'
import { useEventListener } from './event'

export function useBreakpoints() {

    // Window width

    const windowWidth = ref(window.innerWidth)

    useEventListener(window, 'resize', () => {
        windowWidth.value = window.innerWidth
    })

    // Breakpoints

    const isBreakpointXL = computed(() => windowWidth.value >= 1200)

    const isBreakpointLG = computed(() => windowWidth.value >= 768)

    // Mobile or desktop

    const isMobile = computed(() => windowWidth.value < 768)
    
    return { windowWidth, isBreakpointXL, isBreakpointLG, isMobile }
}