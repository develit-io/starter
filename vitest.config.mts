import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: ['services/*', 'packages/*', 'apps/*'],
    coverage: {
      provider: 'istanbul',
      thresholds: {
        100: true,
      },
      exclude: [
        '**/commitlint.config.*',
        'services/**/dist',
        ...coverageConfigDefaults.exclude,
      ],
      excludeAfterRemap: true,
    },
  },
})
