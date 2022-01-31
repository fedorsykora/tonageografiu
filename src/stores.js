import {writable/*, derived*/} from 'svelte/store';

export const index = writable(0);
export const cities = writable([]);
export const mistakes = writable(0);
/*export const citiesLen = derived(cities, $cities => {
    return $cities.length;
});*/