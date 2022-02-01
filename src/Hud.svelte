<script lang="ts">
    import {currentCity, mistakes, cities, index, cm} from './stores';

    function reset(){
        for(const city of $cities){
            city.reset();
        }
        $cities.sort((a,b)=>Math.random()-0.5);
        $mistakes = 0;
        $index = 0;
        $cm = 0;
    }
    let remaining: number;
    $: remaining = $cities.length - $index;
</script>

<p id="city">Mesto: <b>{$currentCity?.name || "owo"}</b></p>
<div id="scores">
    Počet chýb: {$mistakes} <br>
    Zostávajúce mestá: {remaining} <br>
    <button on:click={reset}>Reset</button> <br>
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