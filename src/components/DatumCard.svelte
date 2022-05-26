<script lang="ts" context="module">
</script>

<script lang="ts">
	import type { ProjectsDatum } from '$data/projectsData';
	import { slide } from 'svelte/transition';
	import { expoInOut, expoOut } from 'svelte/easing';
	import DatumValue from './DatumValue.svelte';
	import { allCollapse, allExpand } from '$stores/cardsState';

	export let datum: ProjectsDatum;

	export let expanded: boolean = false;

	function toggle() {
		expanded = !expanded;
		if (expanded) {
			allCollapse.set(false);
		} else {
			allExpand.set(false);
		}
	}

	$: if ($allExpand) {
		expanded = true;
	}
	$: if ($allCollapse) {
		expanded = false;
	}
</script>

<section
	on:click={toggle}
	class:expandable={datum.description?.length || datum.enum?.length}
	class:required={datum.required}
>
	<div id="title">
		{datum.title}
		{#if datum.required}
			<span id="asterisk">*</span>
		{/if}
	</div>
	{#if expanded && (datum.description?.length || datum.enum?.length)}
		<div
			id="details"
			transition:slide={{ duration: 350, easing: expoOut }}
			on:click={(e) => e.stopPropagation()}
			class:multiple={datum.multiple}
		>
			{#if datum.description}
				<div id="description">{datum.description}</div>
			{/if}
			{#if datum.enum}
				<div id="values">
					<p>Options&nbsp;:</p>
					<div>
						{#each datum.enum as v}
							<DatumValue>{v}</DatumValue>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 3rem;
		margin: 0 12px;
		border-radius: 1rem;
		transition: all 0.2s ease-out;
		z-index: 0;
	}

	section:hover {
		background-color: var(--light-100);
		box-shadow: 0 1rem 6rem -2rem rgba(61, 41, 99, 0.2);
	}

	.expandable #title {
		cursor: pointer;
	}

	.expandable:hover #title {
		user-select: none;
		color: var(--accent-900);
	}

	#title {
		font-size: 2rem;
		font-weight: 600;
		color: var(--dark-500);
	}

	#asterisk {
		color: var(--accent-500);
	}

	#details {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
		border-radius: 1.5rem;
	}

	#details.multiple {
		border: 2px solid var(--light-500);
		padding: 1rem;
	}

	#details.multiple::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0.5rem;
		left: 0.5rem;
		border-radius: 1.5rem;
		border: 2px solid var(--light-500);
		border-left-color: transparent;
		border-top-color: transparent;
	}

	#description {
		font-size: 1.15rem;
	}

	#values {
		display: block;
		padding: 0;
	}

	#values p {
		display: inline-block;
		padding: 0.5rem 1rem;
		margin-left: 0.25rem;
		border-radius: 0.5rem;
		color: var(--dark-100);
		font-size: 0.8rem;
		font-weight: 600;
		background-color: var(--light-700);
	}
</style>
