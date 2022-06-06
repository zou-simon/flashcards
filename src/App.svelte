<script>
	import Flashcards from './Flashcards.svelte';
	export let src = '../assets/img/flashcard-clipart.png';

	let start = false;
</script>

<main>
	<img {src} alt="logo" >
	<h1>Flashcards</h1>
	{#if start}
	<Flashcards />
	{:else}
	<button on:click={() => start = true}>Start</button>
	{/if}
</main>

<style>
	main{
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: #f7f7f7;
	}

	img{
		width: 50%;
		padding:0px;
		margin-top:60px;
	}
	h1 {
		color: black;	
		text-transform: uppercase;
		font-size: 3em;
	}

	button{
		width: 10%;
		padding:15px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #C0F2FD;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
