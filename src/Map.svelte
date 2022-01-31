<script lang="ts">
    import MapBackground from './MapBackground.svelte';
    import Point from './Point.svelte';
    import {cities} from './stores';

    let d:{ [name: string]: number[] } = {
        "Košice": [50,50]
    };
    
    $cities = Object.keys(d);
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1489.49 739.6" style="enable-background:new 0 0 1489.49 739.6;" xml:space="preserve">
    <MapBackground/>
    {#each Object.entries(d) as [name, coords]}
        <Point name={name} coords={coords}/>
    {/each}
</svg>
<a href="https://commons.wikimedia.org/wiki/File:Slovensko_okresy.svg">Liqid1010</a>, CC0, via Wikimedia Commons