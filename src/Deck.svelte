<script>
  import { words } from "./words.js";
  import Card from "./Card.svelte";

  export let deckNumber = 0;
  let showCardBack = false;
  const toggleShowBack = () => (showCardBack = !showCardBack);
  let word = getRandomWord();

  function getRandomWord() {
    return words[deckNumber][
      Math.floor(Math.random() * words[deckNumber].length)
    ];
  }

  let unique = {};
  function restart() { unique = {} } // Force restart component for fetch in ouMount

  function changeCard() {
    showCardBack = false;
    word = getRandomWord();
    restart();
  }
</script>

{#key unique}
<Card {word} {showCardBack} />
{/key}
{#if !showCardBack}
  <button on:click={toggleShowBack}>Return card</button>
{:else}
  <button on:click={changeCard}>Next card</button>
{/if}
