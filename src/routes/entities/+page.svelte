<script lang="ts">
	import EntityDisplay from '$lib/components/EntityDisplay.svelte';
	import { entities } from '$lib/data/basicEntities';

	let current_index = $state(0);
	let total_shown = $state(0);
	function next_index() {
		if (current_index == entities.length - 1) {
			current_index = 0;
		} else {
			current_index += 1;
		}
		total_shown += 1;
	}
</script>

<div class="flex flex-col items-center">
	<h1>The entity browser page</h1>

	<div
		class="flex h-100 w-screen flex-col items-center overflow-x-hidden border-t-16 border-b-16 border-taupe-600 bg-black font-terminal text-2xl text-green-700"
	>
		<button class="border border-black p-1" onclick={next_index}>Next</button>
		<!-- This little "trick" keeps svelte transitions from borking if
		 the button is spammed N-1 times or less, where N is the number of total
		 conditionals here. -->
		{#if total_shown % 4 == 0}
			<EntityDisplay entity={entities[current_index]} />
		{:else if total_shown % 4 == 1}
			<EntityDisplay entity={entities[current_index]} />
		{:else if total_shown % 4 == 2}
			<EntityDisplay entity={entities[current_index]} />
		{:else if total_shown % 4 == 3}
			<EntityDisplay entity={entities[current_index]} />
		{/if}
	</div>
</div>
