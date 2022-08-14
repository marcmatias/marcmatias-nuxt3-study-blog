import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: 'UA-232324681-1',
        },
    }, nuxtApp.$router)
})