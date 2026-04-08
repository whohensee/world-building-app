<script lang="ts">
	import type { entity, ID } from '$lib/types';
	import { onMount } from 'svelte';

	interface Props {
		entity: entity;
		arr: entity[];
	}
	// eslint-disable-next-line no-import-assign
	const { entity, arr }: Props = $props();
	import { fly } from 'svelte/transition';

	const relatedEntities: entity[] = $state([]);

	function getRelatedNames(id: ID, entityArray: entity[]) {
		console.log(`Searching for ID: ${id}`);
		console.log(entityArray);
		const ents = entityArray.filter((entity) => {
			return entity.relatedTo.includes(id);
			// return true;
		});
		// const names = entityArray;
		// .map((entity) => {
		// 	return entity.name;
		// });
		return ents;
	}

	onMount(() => {
		const relEnts = getRelatedNames(entity.ID, arr);
		for (const ent of relEnts) {
			relatedEntities.push(ent);
		}
	});
</script>

<!-- Can only get the transition to fire if the div is removed or added -->
<div class="relative w-xl">
	<div
		in:fly={{ x: 500, duration: 800 }}
		out:fly={{ x: -500, duration: 800 }}
		class=" absolute inset-x-0 top-0 flex flex-col border border-black p-5"
	>
		<p>NAME: {entity.name}</p>
		<p>ID: {entity.ID}</p>
		<p>DESCRIPTION: {entity.description}</p>
		<p>
			RELATED:
			{#each relatedEntities as ent (ent.ID)}
				<u>{ent.name}</u>&nbsp
			{/each}
		</p>
	</div>
</div>
