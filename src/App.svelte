<script lang="ts">
	import Map from './Map.svelte';
	import Hud from './Hud.svelte';

	let allRevealed: boolean;
</script>


<main>
	<!--<nav>
		<Link to="/">Home</Link>
		<Link to="/x">owo</Link>
	</nav>-->
	<nav>
		<label for="allRevealed">Správne riešenia</label>
		<input type="checkbox" name="allRevealed" id="allRevealed" bind:checked={allRevealed}>
	</nav>
	<Hud/>
	<Map allRevealed={allRevealed}/>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		@media (min-width: 640px) {
			max-width: none;
		}
	}


	nav {
		position: absolute;
		bottom: 0;
		right:0;

		& > * {
			display: inline;
		}

	}
</style>