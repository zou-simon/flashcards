<script>
  import { words } from './words.js';
  import Card from "./Card.svelte";

  let numberCards = 10;
  let showCardBack = false;
  const toggleShowBack = () => showCardBack = !showCardBack;
  let word = words[Math.floor(Math.random() * words.length)];

  function changeCard() {
    numberCards--;
    if (numberCards > 0) {
      showCardBack = false;
      word = words[Math.floor(Math.random() * words.length)];
      console.log(word)
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