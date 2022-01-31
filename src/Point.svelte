<script lang="ts">
    export let name: string;
    export let coords: number[];

    function handleClick(){
        //TODO
    }
</script>

<circle r="5" cx={coords[0]} cy={coords[1]} fill="red"/>