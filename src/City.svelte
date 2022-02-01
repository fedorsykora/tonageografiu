<script lang="ts">
    
    export let name: string;
    export let coords: number[];
    export let revealed: boolean = false;
    
    import { get } from 'svelte/store';
    import {cities, index, currentCity/*, citiesLen*/, mistakes, cm} from './stores';
    //import {tweened} from 'svelte/motion';
    
    
    let misattributions: number; //misattributions of this point
    let shaking:boolean;
    function handleClick(){
        console.log("click");
        //console.log($citiesLen)
        if(!revealed){
            if (name == $currentCity.name){
                console.log("success!")
                reveal()
            } else{
                $mistakes += 1;
                $cm += 1
                shaking = true;
                setTimeout(()=>shaking=false, 700);//has to be a multiple of animation duration
                console.log("you are wrong", $cm);
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

<circle on:click={handleClick} r="5" cx={coords[0]} cy={coords[1]} class={(function(){
    if(revealed){
        if(misattributions==0) return "holeinone";
        else if(misattributions<=4) return "problematic";
        else return"worthyofimprovement";
    }
    else return "";
})()} class:shaking={shaking}/>
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
        text-shadow: 0px 0px 15px #fff;
        fill:#fff;
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