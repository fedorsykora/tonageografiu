<script lang="ts">
    import {currentCity, mistakes, cities, index} from './stores';
</script>

<div>
    <p>Mesto: {$currentCity?.name}</p>
    <p>Počet chýb: {$mistakes}</p>
    <p>Zostávajúce mestá: {$cities.length - $index}</p>
</div>