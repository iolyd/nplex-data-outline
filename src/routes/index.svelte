<script>
	import '../app.css';
	import DatumCard from '$components/DatumCard.svelte';
	import { placeData, projectData } from '$data/projectsData';
	import { allCollapse, allExpand } from '$stores/cardsState';
	import Button from '$components/Button.svelte';

	function collapseAll() {
		allExpand.set(false);
		allCollapse.set(true);
	}

	function expandAll() {
		allCollapse.set(false);
		allExpand.set(true);
	}
</script>

<aside>
	<Button on:click={collapseAll} disabled={$allCollapse}>- Réduire tous</Button>
	<Button on:click={expandAll} disabled={$allExpand}>+ Ouvrir tous</Button>
</aside>
<main>
	<h2>Descripteurs du lieu</h2>
	{#each placeData as datum}
		<DatumCard {datum} />
	{/each}
	<h2>Descripteurs du cadre bâti</h2>
	{#each placeData as datum}
		<DatumCard {datum} />
	{/each}
	<h2>Descripteurs du projet</h2>
	{#each projectData as datum}
		<DatumCard {datum} />
	{/each}
</main>

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		display: block;
		margin: 1rem;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 0px;
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
		height: auto;
		border: 1px solid var(--light-900);
	}
</style>
