<script lang="ts">
    export let name: string;
    export let coords: number[];
    import {cities, index/*, citiesLen*/} from './stores';

    function handleClick(){
        console.log("click");
        //console.log($citiesLen)
        if (name == $cities[$index]){
            console.log("success!")
            $index += 1;
        } else{
            console.log("you are wrong");
        }
    }
</script>

<circle on:click={handleClick} r="5" cx={coords[0]} cy={coords[1]} fill="red"/>