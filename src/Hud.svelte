<script lang="ts">
    import {currentCity, mistakes, cities, index, startTime} from './stores';
    import { reset } from './utils';
    
    let remaining: number;    
    let timer;
    let time: string = "00:00";
    function createTimer(){
        console.log("create timer");
        timer = setInterval(() => {
            time = new Date(new Date().getTime() - $startTime.getTime()).toTimeString().slice(3,8);
        }, 1000);
    }


    createTimer();
    $: {
        remaining = $cities.length - $index;
        console.log(`${remaining} = ${$cities.length} - ${$index}`);
        if($cities.length != 0 && remaining == 0) clearInterval(timer);
    }
</script>

<p id="city">Mesto: <b>{$currentCity?.name || "owo"}</b></p>
<div id="scores">
    Počet chýb: {$mistakes} <br>
    Zostávajúce mestá: {remaining} <br>
    Čas: {time} <br>
    <button on:click={e=>{
        reset();
        createTimer();
    }}>Reset</button> <br>
    {#if remaining == 0}
    <b style="color: green">You win</b>
    {/if}
</div>

<style lang="scss">
    div, p{
        position: fixed;
        background-color: rgba(51, 51, 51, 0.15);
    }
    div{
        padding: .5%;
        button{
            margin-top: 5%;
        }
    }
    p{
        top: 0;
        left: 0;
        transform: translateX(calc(50vw - 50%));
    }
</style>