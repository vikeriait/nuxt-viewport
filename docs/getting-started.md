# Getting Started

## Installation

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @vikeriait/nuxt-viewport
```

## Configuration

Add the module to your `nuxt.config.ts`. For detailed configuration options, please refer to the [Core Library Documentation](https://vue-viewport.vikeria.it/guide/configuration.html).

```typescript
export default defineNuxtConfig({
  modules: ['@vikeriait/nuxt-viewport'],
  viewport: {
    // Options here
  }
})
```

## Usage

The module exposes the functionality of `@vikeriait/vue-viewport`. For detailed API documentation, configuration options, and advanced usage, please refer to the [Core Library Documentation](https://vue-viewport.vikeria.it).

### Directive

```vue
<template>
  <div v-viewport:slide-up>
    I will animate when I enter the viewport!
  </div>
</template>
```

### Composable

```vue
<script setup>
const { isInView } = useViewport()
</script>
```
