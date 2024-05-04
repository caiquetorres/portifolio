<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.scss';

	let { children } = $props();

	let darkBg = $state(false);

	onMount(() => {
		darkBg = window.scrollY > 100;
	});

	function handleWindowScroll() {
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
				<li>
					<a href="/" class="hover:text-md text-xs uppercase duration-100 md:text-sm">Home</a>
				</li>
				<li>
					<a href="#about" class="hover:text-md text-xs uppercase duration-100 md:text-sm"
						>About me</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>

{@render children()}

<style lang="scss">
	.header-seasalt {
		@apply border-none bg-transparent text-night;
	}

	.header-night {
		@apply border-b-silver bg-night text-seasalt;
	}
</style>
