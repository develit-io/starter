import path from 'path'
import { defineProject, defineConfig, coverageConfigDefaults } from 'vitest/config'
import configGlobal from './vitest.config.mjs'

const configService = {
  resolve: {
    alias: {
      '#imports': path.resolve(__dirname, './.nitro/types/nitro-imports.d.ts'),
      '~': path.resolve(__dirname, './server'),
    },
  },
}

export default defineProject({ ...defineConfig({
    test: {
      coverage: {
        provider: 'istanbul',
        thresholds: {
          100: true,
        },
        exclude: [
          '**/commitlint.config.*',
          ...coverageConfigDefaults.exclude,
        ],
        excludeAfterRemap: true,
      },
    },
  }), ...configService })
