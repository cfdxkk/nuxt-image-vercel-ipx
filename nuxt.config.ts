export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
	],
	image: {
		provider: 'ipx',
		domains: ['i2.100024.xyz'],
		dir: '/'
	}
})
