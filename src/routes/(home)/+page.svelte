<script lang="ts">
	import About from './components/About.svelte';
	import Home from './components/Home.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#2F4550" />
</svelte:head>

<main class="flex flex-col items-center overflow-y-auto overflow-x-hidden">
	<Home />
	<About />
</main>
