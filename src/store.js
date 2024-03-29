import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const definitions = derived(apiData, ($apiData) => {
    return $apiData ?
        $apiData.map(word => word.meanings
            .map(meaning => meaning.definitions
                .map(objet => objet.definition)).flat()).flat()
        : [];
});

export const selectedDeck = writable();

export const answerData = writable([]);