<script lang="ts">
    import {currentCity, mistakes} from './stores';
</script>

<p>Mesto: {$currentCity?.name}</p>
<p>Počet chýb: {$mistakes}</p>
