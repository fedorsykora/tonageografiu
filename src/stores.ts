import {writable, derived, readable, Writable, Readable} from 'svelte/store';

type City = {
    name: string,
    reveal: Function,
    reset: Function
}

export const index: Writable<number> = writable(0);
export const cities: Writable<City[]> = writable([]);
export const currentCity: Readable<City>= derived([cities, index], ([$cities, $index])=>$cities[$index]);
export const mistakes: Writable<number> = writable(0);
export const cm: Writable<number> = writable(0); //current misattributions
{
    let ccVal: City;
    currentCity.subscribe(val=>ccVal=val)
    cm.subscribe(cmVal => {
        console.log("updated", cmVal);
        if(cmVal > 2) ccVal.reveal();
    });
}
/*export const citiesLen = derived(cities, $cities => {
    return $cities.length;
});*/