export function resolveFileSrc(url) {
    return new URL('/src/assets/files/' + url, import.meta.url).href
}