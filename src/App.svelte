<script>
	import Flashcards from './Flashcards.svelte';

	let start = false;
</script>

<main>
	{#if start}
	<Flashcards />
	{:else}
	<button on:click={() => start = true}>Start</button>
	{/if}
</main>