<script lang="ts">
	import { categories, type CategoryKey } from '$data/categories';

	export let key: CategoryKey;
</script>

<article>
	<h2>{categories[key].title}</h2>
	<slot />
</article>

<style>
	article {
		max-width: 960px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1px;
		margin: 0 auto;
	}
</style>