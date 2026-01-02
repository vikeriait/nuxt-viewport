import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import type { ViewportPluginOptions } from '@vikeriait/vue-viewport'

export type ModuleOptions = ViewportPluginOptions

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-viewport',
    configKey: 'viewport',
  },

  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.viewport = defu(nuxt.options.runtimeConfig.public.viewport, options)

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
