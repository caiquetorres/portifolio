<script lang="ts">
	import { onMount } from 'svelte';

	interface ILink {
		href: string;
		name: string;
	}

	let shouldShow = $state(false);
	let bodyOverflow = $derived(shouldShow ? 'hidden' : 'auto');
	let isDark = $state(false);
	const links: ILink[] = [
		{ href: '/', name: 'Home' },
		{ href: '/#about', name: 'About' },
		{ href: 'experience', name: 'Experience' }
	];
	onMount(() => {
		isDark = window.scrollY > 0;
		const media = window.matchMedia('(min-width: 640px)');
		const listener = () => {
			if (shouldShow && window.innerWidth >= 640) {
				shouldShow = false;
			}
		};
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	});

	$effect(() => {
		document.body.style.overflow = bodyOverflow;
	});

	/**
	 * Shows or closes the menu modal.
	 */
	function toggleShouldShow() {
		shouldShow = !shouldShow;
	}

	/**
	 * Says whether the header should have its background dark.
	 */
	function handleWindowScroll() {
		isDark = window.scrollY > 0;
	}
</script>

<svelte:window onscroll={handleWindowScroll} />

<header
	class:header-night={isDark}
	class:header-seasalt={!isDark}
	class="fixed z-10 flex h-16 w-full justify-center border-b-[1px] duration-100"
>
	<div class="flex h-full w-full max-w-content items-center justify-between p-6">
		<a href="/">
			<strong class="select-none text-2xl font-semibold">CT</strong>
		</a>
		<nav class="hidden sm:block">
			<ul class="flex h-full items-center space-x-4">
				{#each links as { href, name }}
					<li>
						<a {href} class="hover:text-md text-xs uppercase duration-100 md:text-sm">{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<button class="block sm:hidden" onclick={toggleShouldShow}>_ _ _</button>
	</div>
</header>

{#if shouldShow}
	<div class="fixed z-20 block h-screen w-screen overflow-auto bg-night p-6 sm:hidden">
		<button class="text-silver" onclick={toggleShouldShow}>Close</button>
		<ul class="tems-center mt-4 flex flex-col gap-2">
			{#each links as { href, name }}
				<li class="flex justify-center text-silver">
					<a {href} class="hover:text-md text-xs uppercase md:text-sm">{name}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style lang="scss">
	.header-seasalt {
		@apply border-none bg-transparent text-night;
	}

	.header-night {
		background-image: url('$lib/images/grain.png');
		@apply border-b-silver bg-night text-seasalt;
	}
</style>
