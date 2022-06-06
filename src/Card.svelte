<script>
    import { onMount } from "svelte";
    import { apiData, definitions } from "./store.js";

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
    <ul>
        {#each $definitions as definition}
            <li>
                {definition}
            </li>
        {/each}
    </ul>
{/if}
