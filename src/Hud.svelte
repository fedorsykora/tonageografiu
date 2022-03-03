<script lang="ts">
    import {currentCity, mistakes, cities, index, startTime} from './stores';
    import { reset } from './utils';
    
    let remaining: number;    
    let timer;
    let time: string;
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

<div id="instructions">
    <p>Shift + kurzor nad mestom = meno mesta</p>
</div>
<style lang="scss">
    div{
        position: absolute;
        top: 0;
        padding: 2%;
        &#scores{
            left: 0;
            button{
                margin-top: 5%;
            }
        }
        &#instructions{
            right: 0;
    
        }
    }
    #city{
        position: absolute;
        margin: 0 auto;
        left:0;
        right:0;
    }
</style>