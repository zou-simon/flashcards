<script>
    import Deck from './Deck.svelte';

    let selectedDeck;
</script>

{#if selectedDeck != undefined}
<Deck deckNumber={selectedDeck} />
{:else}
<button on:click={() => selectedDeck = 0}>1</button>
<button on:click={() => selectedDeck = 1}>2</button>
<button on:click={() => selectedDeck = 2}>3</button>
{/if}