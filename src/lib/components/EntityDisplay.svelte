<script lang="ts">
	const { entity } = $props();
	import { fly } from 'svelte/transition';
</script>

<!-- Can only get the transition to fire if the div is removed or added -->
<div class="relative w-xl">
	<div
		in:fly={{ x: 500, duration: 800 }}
		out:fly={{ x: -500, duration: 800 }}
		class=" absolute inset-x-0 top-0 flex flex-col items-center border border-black p-5"
	>
		<p>NAME: {entity.name}</p>
		<p>DESCRIPTION: {entity.description}</p>
	</div>
</div>
