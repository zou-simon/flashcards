<script>
  import { words } from './words.js';
  import Card from "./Card.svelte";

  export let deckNumber = 0;
  let numberCards = 10;
  let showCardBack = false;
  const toggleShowBack = () => showCardBack = !showCardBack;
  let word = getRandomWord();

  function getRandomWord() {
    return words[deckNumber][Math.floor(Math.random() * words[deckNumber].length)];
  }

  function changeCard() {
    numberCards--;
    if (numberCards > 0) {
      showCardBack = false;
      word = getRandomWord();
    }
  }
</script>

{#if numberCards > 0}
<Card {word} {showCardBack} />
  {#if !showCardBack}
  <button on:click={toggleShowBack}>Return card</button>
  {:else}
  <button on:click={changeCard}>Next card</button>
  {/if}
{/if}