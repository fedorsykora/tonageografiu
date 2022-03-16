<script lang="ts">
	import Map from './Map.svelte';
	import Hud from './Hud.svelte';
	import Eye from './Eye.svelte';

	let allRevealed: boolean;
</script>


<main>
	<!--<nav>
		<Link to="/">Home</Link>
		<Link to="/x">owo</Link>
	</nav>-->
	<nav><Eye on:click="{() => allRevealed = !allRevealed}"/></nav>
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
		width: 5%;
		position: fixed;
		bottom: 0;
		right:0;
	}
</style>