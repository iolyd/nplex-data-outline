<script lang="ts" context="module">
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { expoInOut, expoOut } from 'svelte/easing';
	import DatumValue from './DatumValue.svelte';
	import { allCollapse, allExpand } from '$stores/cardsState';

	export let title: string;
	export let desc: string = undefined;
	export let values: string[] = undefined;

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

<section on:click={toggle} class:expandable={desc?.length || values?.length}>
	<div id="title">
		{title}
	</div>
	{#if expanded && (desc?.length || values?.length)}
		<div
			id="details"
			transition:slide={{ duration: 350, easing: expoOut }}
			on:click={(e) => e.stopPropagation()}
		>
			{#if desc}
				<div id="description">{desc}</div>
			{/if}
			{#if values}
				<div id="values">
					<p>Options&nbsp;:</p>
					{#each values as v}
						<DatumValue>{v}</DatumValue>
					{/each}
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
		border-radius: 1rem;
		transition: all 0.2s ease-out;
	}

	section:hover {
		background-color: var(--light-100);
		box-shadow: 0 1rem 6rem -2rem rgba(61, 41, 99, 0.2);
	}

	#details {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
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
		color: rgb(50, 44, 56);
	}

	#description {
		font-size: 1.15rem;
		font-family: var(--font-misc);
	}

	#values {
		display: block;
		padding: 0;
		font-size: 0.75rem;
		font-family: var(--font-misc);
	}

	#values p {
		text-indent: 1.7rem;
		color: var(--dark-100);
	}
</style>
