import nitroCloudflareBindings from 'nitro-cloudflare-dev'

export default defineNitroConfig({
  preset: 'cloudflare_module',
  srcDir: 'server',
  compatibilityDate: '2025-01-28',
  imports: {
    dirs: [
      'server/types/**',
    ],
  },
  experimental: {
    tasks: true,
    asyncContext: true,
  },
  modules: [nitroCloudflareBindings],
  minify: false,
  typescript: {
    strict: true,
  },
  rollupConfig: {
    external: ['cloudflare:workers'],
  },
})
