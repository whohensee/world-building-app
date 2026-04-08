<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const mainImage = document.querySelector<HTMLImageElement>('#mainImage');
		const mainSVG = document.querySelector<SVGSVGElement>('#mainSVG');
		if (mainImage) {
			console.log(`${mainImage.height}`);
			mainSVG?.setAttribute('height', String(mainImage.height));
		}
	});
</script>

<div class="relative w-4xl">
	<div class="absolute">
		<img src="/Hiveworld.jpg" alt="pic of the hiveworld" id="mainImage" />
	</div>

	<svg
		id="mainSVG"
		class="absolute w-4xl"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		// This should be the dimensions where the regions were set
		// while height/width which controls viewPORT should be desired values
		viewBox="0 0 672 469"
	>
		<rect width="100%" height="100%" fill="red" fill-opacity="50%" />
		<a href="https://developer.mozilla.org/" target="_blank">
			<circle class="region" cx="312" cy="230" r="40" fill="green" />
			<!-- <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> -->
		</a>
	</svg>
</div>

<style>
	.region {
		fill-opacity: 20%;
	}

	.region:hover {
		fill-opacity: 80%;
	}
</style>
