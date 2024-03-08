<template>
	<p>
		Image one is a default HTML img tag, image two is an NuxtImg tag.
	</p>
	<p>
		And my <code>nuxt.config.ts</code> file is like this, I use ipx for provider in both local development environment and Vercel production environment. 
	</p>
	<pre>
		<code>
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
	],
	image: {
		provider: 'ipx'	
	}
})
		</code>
	</pre>
	<div>
		<p>Image one</p>
		<pre><code>&lt;img style="width: 300px" src="public/nuxtImage.png" /&gt;</code></pre>
		<img style="width: 300px" src="public/nuxtImage.png" />
	</div>
	<div>
		<p>Image two</p>
		<pre><code>&lt;NuxtImg width="300" src="nuxtImage.png" /&gt;</code></pre>
		<NuxtImg width="300" src="nuxtImage.png" />
	</div>
</template>
<style scoped>
	p, pre {
		margin-left: 10px;
	}

	div {
		width: 500px;
		border: solid 1px black;
		margin-bottom: 10px;
	}
</style>
