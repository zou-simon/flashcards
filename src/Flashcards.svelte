<script>
    import { selectedDeck } from './store.js';
    import Deck from './Deck.svelte';
	
    export let src = '../assets/img/pointed_star.png';

    let selected;

    selectedDeck.subscribe(value => {
		selected = value;
	});
</script>

<main> 

    {#if selectedDeck != undefined}
    <Deck deckNumber={selectedDeck} />
    {:else}
    <button on:click={() => selectedDeck = 0}>1</button>
    <button on:click={() => selectedDeck = 1}>2</button>
    <button on:click={() => selectedDeck = 2}>3</button>
    {/if}

    <div>
        <h1>Select a deck of cards</h1>
        <div class="desks">
            <div class="desk deck1">
                <img {src} alt="deck 1" >
                <h2>Deck 1</h2>
            </div>
            <div class="desk deck2">
                <img {src} alt="deck 2" >
                <h2>Deck 1</h2>
            </div>
            <div class="desk deck3">
                <img {src} alt="deck 3" >
                <h2>Deck 1</h2>
            </div>
        </div>
    </div>
</main>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

  div .desks{
		display: flex;
		text-align: center;
		padding: 2em;
		margin: 20px;
	}

	div.desks .desk{
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 4em;
		margin: 20px;
	}
	div.desks .deck1{
		background-color: #E5BABA;
	}
	div.desks .deck2{
		background-color: #89D3EB;
	}
	div.desks .deck3{
		background-color: #8580BF;
	}
	img{
		width: 50%;
		padding:30px;
		margin-top:20px;
	}
	h1 {
		color: black;	
		text-transform: uppercase;
		font-size: 3em;
	}

	h2 {
		color: black;	
		font-size: 2em;
		padding:20px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
