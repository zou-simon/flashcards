<script>
	export let src = './flashcard-clipart.png';
	import Flashcards from "./Flashcards.svelte";

	let start = false;
</script>

<main>
	{#if start}
		<Flashcards />
	{:else}
		<img {src} alt="Logo" >
		<h1>Flashcards</h1>

		<button on:click={() => (start = true)}>Start</button>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: #f7f7f7;
	}

	img {
		width: 50%;
		padding: 0px;
		margin-top: 60px;
	}
	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 3em;
	}

	button {
		width: 10%;
		padding: 15px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #c0f2fd;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
