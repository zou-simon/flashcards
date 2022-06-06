<script>
    import { onMount } from "svelte";
    import { apiData, definitions, answerData } from "./store.js";

    export let word = "";
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
    <h1>Question</h1>

    <div class="card">
        <p>
            What is/are the definition(s) of <span class="bold">{word}</span>?
        </p>
    </div>
{:else}
    <h1>Answer</h1>

    <p>Definition of {word}</p>
    <ul>
        {#each $definitions as definition, key}
            <li>
                <input
                    type="checkbox"
                    bind:group={$answerData}
                    name={word}
                    value={word + "-" + key}
                />
                {definition}
            </li>
        {/each}
    </ul>
{/if}

<style>
    h1 {
        text-align: center;
        padding: 2em 0em 1em 0;
        margin: 5px;
        color: black;
        text-transform: uppercase;
        font-size: 3em;
    }

    .card {
        background-color: #e7ed9f;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 350px;
        padding: 4em;
        margin: 20px auto;
    }

    p {
        color: black;
        font-size: 2em;
        padding: 10px;
        text-align: center;
    }

    .bold {
        font-weight: bold;
    }

    ul {
        list-style-type: none;
    }
</style>
