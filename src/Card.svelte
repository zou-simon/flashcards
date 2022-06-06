<script>
    import { onMount } from "svelte";
    import { apiData, definitions, answerData } from "./store.js";

    export let word = '';
    export let showCardBack = false;

    onMount(async () => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
            .then((response) => response.json())
            .then((data) => {
                apiData.set(data);
            })
            .catch((error) => {
                return [];
            });
    });
</script>

{#if !showCardBack}
    {word}
{:else}
    {word}
    <ul>
        {#each $definitions as definition, key}
            <li>
                <input type="checkbox" bind:group={$answerData} name={word} value={word + '-' + key} />
                {definition}
            </li>
        {/each}
    </ul>
{/if}
