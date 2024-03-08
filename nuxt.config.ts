export default defineNuxtConfig({
  devtools: { enabled: false },
	modules: [
    '@nuxt/image',
  ],
	image: {
		provider: 'ipx'	
	}
})
