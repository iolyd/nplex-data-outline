<script lang="ts">
</script>

<button {...$$restProps} on:click>
	<slot />
</button>

<style>
	button {
		height: 2.5rem;
		padding: 0 1rem;
		margin: 5px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 1rem;
		color: var(--accent-700);
		background-color: var(--light-300);
		box-shadow: 0 0 2px var(--accent-100);
		transition: all 0.15s ease-out;
	}

	:hover:not(:disabled) {
		color: var(--dark-900);
		background-color: var(--accent-700);
		box-shadow: 0 1em 1.5em -1em var(--accent-500);
	}

	:disabled {
		cursor: default;
		opacity: 0.5;
	}
</style>
