// observer.js
import { onMounted, onUnmounted, provide, ref } from 'vue'

export function useIntersectionObserver(sections, updateActive) {
    let observer;

    const pauseObserver = ref(false);

	function updatePauseObserver(value) {
		pauseObserver.value = value;
	}

    provide('pauseObserver', updatePauseObserver);

    onMounted(() => {
        const mutationObserver = new MutationObserver((mutations, observer) => {
            if (document.getElementById('home') && document.getElementById('about') && document.getElementById('skills') && document.getElementById('projects')) {
                observer.disconnect();
                startIntersectionObserver();
            }
        })

        mutationObserver.observe(document, {childList: true, subtree: true});

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !pauseObserver.value) {
                    updateActive(entry.target.id)
                }
            })
        }

        observer = new IntersectionObserver(observerCallback, observerOptions);

        const startIntersectionObserver = () => {
            Object.keys(sections).forEach(section => {
                observer.observe(document.getElementById(section))
            })
        }
    })

    onUnmounted(() => {
        observer?.disconnect();
    })
}