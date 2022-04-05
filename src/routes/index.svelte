<script>
	import '../app.css';
	import DataCard from '$components/DataCard.svelte';
</script>

<aside>
	<ul>
		<li>test</li>
		<li>test</li>
		<li>test</li>
		<li>test</li>
		<li>test</li>
		<li>test</li>
	</ul>
</aside>
<main>
	<DataCard
		title="Propriétaire"
		desc=""
	/>
	<DataCard
		title="Usage"
		desc="test"
	/>
	<DataCard
		title="Typologie"
		desc=""
	/>
</main>

<style>
	aside {
		display: block;
		width: 250px;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden auto;
		padding: 120px;
		background-color: aliceblue;
	}
</style>