<script lang="ts">
	import EntityDisplay from '$lib/components/EntityDisplay.svelte';

	const rogues = [
		{
			name: 'Evil Jim',
			location: 'The Ninth Circle of Hell',
			faction: 'The Voidspawn',
			description: 'Big n mean and bad.'
		},
		{
			name: 'Goomba',
			location: 'Mushroom Kingdom',
			faction: 'Minions of Bowser',
			description: 'round with lil feet. bouncy'
		},
		{
			name: 'Goomba2',
			location: 'Mushroom Kingdom2',
			faction: 'Minions of Bowser2',
			description: 'round with lil feet. bouncy2'
		}
	];

	let current_index = $state(0);
	let total_shown = $state(0);
	function next_index() {
		if (current_index == rogues.length - 1) {
			current_index = 0;
		} else {
			current_index += 1;
		}
		total_shown += 1;
	}
</script>

<div class="flex flex-col items-center">
	<h1>The entity browser page</h1>

	<button class="border border-black p-1" onclick={next_index}>Next</button>
	<!-- This little "trick" keeps svelte transitions from borking if
     the button is spammed N-1 times or less, where N is the number of total
     conditionals here. -->
	{#if total_shown % 4 == 0}
		<EntityDisplay entity={rogues[current_index]} />
	{:else if total_shown % 4 == 1}
		<EntityDisplay entity={rogues[current_index]} />
	{:else if total_shown % 4 == 2}
		<EntityDisplay entity={rogues[current_index]} />
	{:else if total_shown % 4 == 3}
		<EntityDisplay entity={rogues[current_index]} />
	{/if}
</div>
