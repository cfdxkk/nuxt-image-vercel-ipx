<template>
	<div>
		<p>This demo is running in Vercel now.</p>
		<p>Image one is a default HTML img tag, image two is an NuxtImg tag with static image file in /public, image three is an NuxtImg tag with image file from internet.</p>
		<p>And my <code>nuxt.config.ts</code> file is like this, I use ipx for provider in both local development environment and Vercel production environment.</p>
		<pre>
			<code>
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
	],
	image: {
		provider: 'ipx',
		domains: ['i2.100024.xyz'],
	}
})
			</code>
		</pre>
	</div>

</template>