<script lang="ts">
    
    export let name: string;
    export let coords: number[];
    export let revealed: boolean = false;
    export let tempRevealed:boolean = false;
    
    import { MAX_TRIES } from './constants';
    import { get } from 'svelte/store';
    import {cities, index, currentCity, mistakes, cm} from './stores';
    
    let misattributions: number; //misattributions of this point
    let shaking:boolean;
    function handleClick(){
        if(!revealed){
            if (name == $currentCity.name){
                console.log("success!")
                reveal()
            } else{
                $mistakes += 1;
                $cm += 1
                //shake
                shaking = true;
                setTimeout(()=>shaking=false, 700);//has to be a multiple of animation duration
                //reveal temporarily
                tempRevealed = true;
                setTimeout(()=>tempRevealed=false,1000);

                console.log(`you were wrong ${$cm} times`);
                navigator.vibrate(200);
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
    function reset(){
        misattributions = 0;
        revealed = false;
    }

    $cities.push({name, reveal, reset});
</script>

<circle class="back" cx={coords[0]} cy={coords[1]} on:click={handleClick} fill="transparent" stroke="transparent"/>
<circle cx={coords[0]} cy={coords[1]} class='front {(function(){
    if(revealed){
        if(misattributions==0) return "holeinone";
        else if(misattributions<=MAX_TRIES) return "problematic";
        else return"worthyofimprovement";
    }
    else return "";
})()}' class:shaking={shaking}/>
{#if revealed||tempRevealed} <text x={coords[0]} y={coords[1]}>{name}</text> {/if}

<style lang="scss">
    circle{
        r: 5px;
        &.front{
            fill: rgb(255, 255, 255);
            stroke: black;
            transition: .2s;
            @media (pointer:coarse){
                r: 10px;
            }
            pointer-events: none;
            &.holeinone{
                fill: green;
            }
            &.problematic{
                fill: yellow;
            }
            &.worthyofimprovement{
                fill: red;
            }
        }
        &.back{
            @media (hover: hover){
                &:hover + .front{
                    fill: black;
               }   
            }
            @media (pointer:coarse){
                r: 20px;
            }
        }
    }
    text{
        user-select: none;
        text-shadow: 0px 0px 15px #fff;
        fill:#fff;
        pointer-events: none;
    }
    .shaking{
        animation: shake .5s infinite both steps(100, jump-both); 
    }
    @keyframes shake{
        $deviation: .2%;
        0%{
            transform: translateX(0%);
        }
        25%{
            transform: translateX($deviation);
        }
        50%{
            fill: red;
        }
        75%{
            transform: translateX(-$deviation);
        }
        100%{
            transform: translateX(0%);
        }
    }
    
</style>