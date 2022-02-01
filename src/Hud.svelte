<script lang="ts">
    import {currentCity, mistakes, cities, index} from './stores';
</script>

<div>
    Mesto: {$currentCity?.name} <br>
    Počet chýb: {$mistakes} <br>
    Zostávajúce mestá: {$cities.length - $index}
</div>

<style lang="scss">
    div{
        position: absolute;
        top: 0;
        left: 0;
        padding: 2%;
    }
</style>