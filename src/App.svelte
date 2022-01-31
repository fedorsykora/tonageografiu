<script lang="ts">
	import Map from './Map.svelte';
	import Hud from './Hud.svelte';
</script>

<main>
	<Hud/>
	<Map/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>