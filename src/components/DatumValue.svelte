<script lang="ts">
</script>

<div>
	<span>
		<slot />
	</span>
</div>

<style>
	div {
		position: relative;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		font-size: 1rem;
		font-family: var(--font-main);
		padding-inline: 1.5rem;
		border: 1px solid var(--accent-100);
		border-radius: 1.25rem;
		margin: 5px;
		color: var(--accent-700);
		transition: all 0.15s ease-out;
	}

	div:hover {
		color: var(--dark-500);
		background-color: var(--accent-100);
	}

	span {
		cursor: default;
		position: relative;
		top: -1px;
		letter-spacing: 0.5px;
	}
</style>
