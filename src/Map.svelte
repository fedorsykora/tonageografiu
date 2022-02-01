<script lang="ts">
    import MapBackground from './MapBackground.svelte';
    import City from './City.svelte';
    import {onMount} from 'svelte';
    import { reset } from './utils';

    let d:{ [name: string]: number[] } = {
        "Bratislava": [67, 577],
        "Pezinok": [109, 525],
        "Senec": [145, 548],
        "Malacky": [38, 451],

        "Trnava": [195, 493],
        "Hlohovec": [244, 469],
        "Piešťany": [258, 402],
        "Senica": [136, 372],
        "Skalica": [101, 304],
        "Galanta": [227, 557],
        "Dunajská Streda": [186, 635],

        "Myjava": [191, 337],
        "Nové Mesto nad Váhom": [257, 340],
        "Trenčín": [311, 285],
        "Bánovce nad Bebravou": [365, 350],
        "Ilava": [366, 249],
        "Partizánske": [399, 393],
        "Považská Bystrica": [419, 200],
        "Púchov": [390, 198],

        "Prievidza": [470, 337],
        "Topoľčany": [348, 415],
        "Nitra": [324, 520],
        "Šaľa": [268, 571],
        "Komárno": [332, 729],
        "Nové Zámky": [343, 641],
        "Levice": [458, 551],
        "Zlaté Moravce": [409, 484],
        
        "Čadca": [504, 67],
        "Kysucké Nové Mesto": [504, 114],
        "Žilina": [491, 155],
        "Bytča": [444, 151],
        "Turčianske Teplice": [523, 292],
        "Martin": [551, 217],
        "Ružomberok": [639, 215],
        "Liptovský Mikuláš": [719, 212],
        "Dolný Kubín": [640, 161],
        "Tvrdošín": [706, 107],
        "Námestovo": [677, 82],

        "Žarnovica": [489, 445],
        "Žiar nad Hronom": [528, 406],
        "Banská Štiavnica": [531, 456],
        "Krupina": [578, 504],
        "Veľký Krtíš": [650, 550],
        "Zvolen": [593, 409],
        "Banská Bystrica": [597, 345],
        "Brezno": [735, 323],
        "Detva": [669, 419],
        "Poltár": [771, 465],
        "Lučenec": [735, 511],
        "Rimavská Sobota": [833, 493],
        "Revúca": [859, 368],

        "Rožňava": [962, 388],
        "Spišská Nová Ves": [972, 267],
        "Gelnica": [1062, 306],
        "Košice": [1147, 355],
        "Trebišov": [1265, 393],
        "Michalovce": [1320, 340],
        "Sobrance": [1391, 345],

        "Prešov": [1145, 246],
        "Levoča": [973, 234],
        "Vranov nad Topľou": [1261, 292],
        "Humenné": [1312, 271],
        "Snina": [1383, 246],
        "Medzilaborce": [1319, 132],
        "Stropkov": [1255, 168],
        "Svidník": [1233, 117],
        "Bardejov": [1156, 125],
        "Stará Ľubovňa": [999, 130],
        "Kežmarok": [931, 194],
        "Poprad": [902, 224],
        "Sabinov": [1105, 203],
        //"Košice": [50,50]
    };
    
    onMount(reset);
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1489.49 739.6" style="enable-background:new 0 0 1489.49 739.6;" xml:space="preserve">
    <MapBackground/>
    {#each Object.entries(d).sort((a,b) => Math.random()-0.5) as [name, coords]}
        <City name={name} coords={coords}/>
    {/each}
</svg>
<p>Pôvodná mapa: <a href="https://commons.wikimedia.org/wiki/File:Slovensko_okresy.svg">Liqid1010</a>, CC0, via Wikimedia Commons</p>