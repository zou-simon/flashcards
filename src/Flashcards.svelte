<script>
    import { selectedDeck } from './store.js';
    import Deck from './Deck.svelte';

    let selected;

    selectedDeck.subscribe(value => {
		selected = value;
	});
</script>

{#if selected != undefined}
<Deck deckNumber={selected} />
{:else}
<button on:click={() => selectedDeck.set(0)}>1</button>
<button on:click={() => selectedDeck.set(1)}>2</button>
<button on:click={() => selectedDeck.set(2)}>3</button>
{/if}