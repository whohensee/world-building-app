<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import { resolve } from '$app/paths';

	const path_home = resolve('/');
	const path_map = resolve('/map');
	const path_datasheet = resolve('/datasheet');
	const path_entities = resolve('/entities');
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-center gap-1">
	<a class="border border-black p-1" href={path_home} aria-label="home">home</a>
	<a class="border border-black p-1" href={path_map} aria-label="map">map</a>
	<a class="border border-black p-1" href={path_datasheet} aria-label="datasheet">datasheet</a>
	<a class="border border-black p-1" href={path_entities} aria-label="entities">entities</a>
</nav>
{@render children()}
