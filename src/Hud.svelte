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
</script>

<div>
    Mesto: {$currentCity?.name} <br>
    Počet chýb: {$mistakes} <br>
    Zostávajúce mestá: {$cities.length - $index} <br>
    <button on:click={reset}>Reset</button>
</div>

<style lang="scss">
    div{
        position: absolute;
        top: 0;
        left: 0;
        padding: 2%;
        button{
            margin-top: 5%;
        }
    }
</style>