<template>
	<SomeDirections/>

	<div class="image-box">
		<p>Image one</p>
		<pre><code>&lt;img style="width: 300px" src="public/nuxtImage.png" /&gt;</code></pre>
		<img style="width: 300px" src="public/nuxtImage.png" />
	</div>

	<div class="image-box">
		<p>Image two</p>
		<pre><code>&lt;NuxtImg width="300" src="_ipx/nuxtImage.png" /&gt;</code></pre>
		<NuxtImg width="300" src="_ipx/nuxtImage.png" />
	</div>

	<div class="image-box">
		<p>Image three</p>
		<pre><code>&lt;NuxtImg width="300" src="https://i2.100024.xyz/2024/03/08/irvlgw.webp" /&gt;</code></pre>
		<NuxtImg width="300" src="https://i2.100024.xyz/2024/03/08/irvlgw.webp" />
	</div>
</template>

<style scoped>
	p, pre {
		margin-left: 10px;
	}

	.image-box {
		float: left;
		width: 500px;
		height: 250px;
		border: solid 1px black;
		margin-bottom: 10px;
		margin-right: 10px;
	}
</style>
