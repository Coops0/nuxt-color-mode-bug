export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
    ],
    colorMode: {
        storage: 'cookie',
        preference: 'light',
        fallback: 'light',
    },
    compatibilityDate: '2024-09-11',
});
