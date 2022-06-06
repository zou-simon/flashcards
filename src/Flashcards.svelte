<script>
    export let src = "./pointed-star.png";
    import { selectedDeck } from "./store.js";
    import Deck from "./Deck.svelte";

    let selected;

    selectedDeck.subscribe((value) => {
        selected = value;
    });
</script>

{#if selected != undefined}
    <Deck deckNumber={selected} />
{:else}
    <h1>Select a deck of cards</h1>

    <div class="desks">
        <div class="desk deck1" on:click={() => selectedDeck.set(0)}>
            <img {src} alt="Deck 1" />
            <h2>Deck 1</h2>
        </div>
        <div class="desk deck2" on:click={() => selectedDeck.set(1)}>
            <img {src} alt="Deck 2" />
            <h2>Deck 2</h2>
        </div>
        <div class="desk deck3" on:click={() => selectedDeck.set(2)}>
            <img {src} alt="Deck 3" />
            <h2>Deck 3</h2>
        </div>
    </div>
{/if}

<style>
    .desks {
        display: flex;
        text-align: center;
        padding: 2em;
        margin: 20px;
    }

    .desk {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 4em;
        margin: 20px;
    }

    .deck1 { background-color: #e5baba; }
    .deck2 { background-color: #89d3eb; }
    .deck3 { background-color: #8580bf; }

    img {
        width: 50%;
        padding: 30px;
        margin-top: 20px;
    }

    h1 {
        color: black;
        text-transform: uppercase;
        font-size: 3em;
    }
</style>
