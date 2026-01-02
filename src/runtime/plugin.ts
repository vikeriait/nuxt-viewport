import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import ViewportPlugin from '@vikeriait/vue-viewport'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.viewport
  nuxtApp.vueApp.use(ViewportPlugin, config)
})
