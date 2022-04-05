<script lang="ts">
	export let title: string;
	export let desc: string;
	export let values: string[] = undefined;

	let expanded: boolean = false;
</script>

<section>
	<div id="title">{title}</div>
	<div id="description">{desc}</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		box-shadow: 0 1rem 4rem -2rem rgba(61, 41, 99, 0.2);
		padding: 2rem;
		background-color: rgb(254, 253, 255);
	}

	section:hover {
		background-color: white;
	}

	#title {
		font-size: 2rem;
		font-weight: 600;
		color: rgb(50, 44, 56);
	}

	#description {
		font-size: 1.5rem;
	}
</style>