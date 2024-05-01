<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';

	let darkBg = false;

	const links = [
		{ href: '/', name: 'Home' }
		// { href: '#about', name: 'About' },
		// { href: '#project', name: 'Projects' },
		// { href: '#experience', name: 'Experience' }
	];

	onMount(() => {
		darkBg = window.scrollY > 100;
	});
</script>

<svelte:window on:scroll={() => (darkBg = window.scrollY > 100)} />

<header
	class:header-charcoal={darkBg}
	class:header-seasalt={!darkBg}
	class="fixed z-10 flex h-16 w-full justify-center duration-100"
>
	<div class="flex h-full w-full max-w-content items-center justify-between p-3">
		<a href="/">
			<strong class="select-none text-2xl font-semibold">CT</strong>
		</a>
		<nav>
			<ul class="flex h-full items-center space-x-2 md:space-x-4">
				{#each links as { href, name }}
					<li>
						<a {href} class="hover:text-md text-xs uppercase duration-100 md:text-sm">
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<slot />

<style>
	.header-seasalt {
		@apply bg-transparent text-charcoal;
	}

	.header-charcoal {
		@apply bg-charcoal text-seasalt;
	}
</style>
