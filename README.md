# Nuxt Viewport

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A lightweight, high-performance Vue 3 directive and composable to detect when elements enter the viewport, featuring "Smart Presets", automatic margin compensation for smooth reveals, and seamless Tailwind CSS integration.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://nuxt-viewport.vikeria.it)
- [📚 &nbsp;Core Library Docs](https://vue-viewport.vikeria.it)

## Features

- ⚡️ **Lightweight & High Performance**: Uses `IntersectionObserver` for optimal performance.
- 🎯 **Smart Presets**: Pre-configured animations for common use cases.
- 📐 **Automatic Margin Compensation**: Smooth reveals without layout shifts.
- 🎨 **Tailwind CSS Integration**: Seamlessly works with your design system.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @vikeriait/nuxt-viewport
```

That's it! You can now use Nuxt Viewport in your Nuxt app ✨

## Configuration

You can configure the module in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@vikeriait/nuxt-viewport'],
  viewport: {
    // Options here
  }
})
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@vikeriait/nuxt-viewport/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@vikeriait/nuxt-viewport

[npm-downloads-src]: https://img.shields.io/npm/dm/@vikeriait/nuxt-viewport.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@vikeriait/nuxt-viewport

[license-src]: https://img.shields.io/npm/l/@vikeriait/nuxt-viewport.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@vikeriait/nuxt-viewport

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com