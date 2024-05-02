<script lang="ts">
	import { onMount } from 'svelte';

	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Leetcode from '$lib/components/icons/Leetcode.svelte';

	import '../app.css';

	interface ILink {
		href: string;
		name: string;
	}

	let { children } = $props();

	let darkBg = $state(false);
	const links = $state.frozen<ILink[]>([
		{ href: '/', name: 'Home' },
		{ href: '#about', name: 'About' }
	]);

	onMount(() => {
		darkBg = window.scrollY > 100;
	});

	function handleWindowScroll(): void {
		darkBg = window.scrollY > 100;
	}
</script>

<svelte:window on:scroll={handleWindowScroll} />

<header
	class:header-night={darkBg}
	class:header-seasalt={!darkBg}
	class="fixed z-10 flex h-16 w-full justify-center border-b-[1px] duration-100"
>
	<div class="flex h-full w-full max-w-content items-center justify-between p-6">
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

{@render children()}

<footer class="flex flex-col items-center justify-center bg-seasalt py-20 md:py-24">
	<ul class="flex space-x-3">
		<li>
			<a href="https://github.com/caiquetorres" target="_blank">
				<GitHub class="text-night transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/caiquetorres" target="_blank">
				<Linkedin class="text-night transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
		<li>
			<a href="https://leetcode.com/u/caiquetorres/" target="_blank">
				<Leetcode class="text-night transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
	</ul>
	<ul class="tems-center mt-4 flex space-x-2 md:space-x-4">
		{#each links as { href, name }}
			<li>
				<a {href} class="hover:text-md text-xs uppercase duration-100 md:text-sm">
					{name}
				</a>
			</li>
		{/each}
	</ul>
	<span class="mt-6 font-cursive">Created from scratch with ❤️ by Caique Torres </span>
</footer>

<style>
	.header-seasalt {
		@apply border-none bg-transparent text-night;
	}

	.header-night {
		@apply border-b-silver bg-night text-seasalt;
	}
</style>
