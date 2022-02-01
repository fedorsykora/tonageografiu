<script lang="ts">
    
    export let name: string;
    export let coords: number[];
    export let revealed: boolean = false;

    import { get } from 'svelte/store';
    import {cities, index, currentCity/*, citiesLen*/, mistakes, cm} from './stores';

    
    let misattributions: number; //misattributions of this point
    function handleClick(){
        console.log("click");
        //console.log($citiesLen)
        if(!revealed){
            if (name == $currentCity.name){
                console.log("success!")
                $index += 1;
                reveal()
            } else{
                $mistakes += 1;
                $cm += 1
                console.log("you are wrong", $cm);
            }
        }
    }
    function reveal(){
        console.log("revealing")
        misattributions = get(cm);
        $cm = 0;
        $index += 1;
        revealed = true;
    }

    $cities.push({name, reveal});
</script>

<circle on:click={handleClick} r="5" cx={coords[0]} cy={coords[1]} class={(function(){
    if(revealed){
        if(misattributions==0) return "holeinone";
        else if(misattributions<=4) return "problematic";
        else return"worthyofimprovement";
    }
    else return "";
})()}/>
{#if revealed} <text x={coords[0]} y={coords[1]}>{name}</text> {/if}

<style lang="scss">
    circle{
        fill: rgb(255, 255, 255);
        stroke: black;
        transition: .2s;
        &:hover{
            fill: black;
        }
    }
    .holeinone{
        fill: green;
    }
    .problematic{
        fill: yellow;
    }
    .worthyofimprovement{
        fill: red;
    }
    text{
        user-select: none;
    }
</style>