<script lang="ts">
	import GitHub from './icons/GitHub.svelte';
	import Leetcode from './icons/Leetcode.svelte';
	import Linkedin from './icons/Linkedin.svelte';

	interface IProps {
		theme?: 'dark' | 'light';
	}

	interface ILink {
		href: string;
		name: string;
	}

	const { theme = 'light' }: IProps = $props();
	const isDark = $derived(theme === 'dark');
	const links: ILink[] = [
		{ href: '/', name: 'Home' },
		{ href: '/#about', name: 'About' },
		{ href: 'experience', name: 'Experience' }
	];
</script>

<footer
	class:bg-seasalt={!isDark}
	class:bg-night={isDark}
	class="flex flex-col items-center justify-center py-20 md:py-24"
>
	<ul class:text-night={!isDark} class:text-silver={isDark} class="flex space-x-3">
		<li>
			<a href="https://github.com/caiquetorres" target="_blank">
				<GitHub class="transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/caiquetorres" target="_blank">
				<Linkedin class="transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
		<li>
			<a href="https://leetcode.com/u/caiquetorres/" target="_blank">
				<Leetcode class="transition-colors duration-100 hover:text-cordovan" />
			</a>
		</li>
	</ul>
	<ul
		class:text-night={!isDark}
		class:text-silver={isDark}
		class="tems-center mt-4 flex flex-col gap-2 md:flex-row"
	>
		{#each links as { href, name }}
			<li class="flex justify-center">
				<a {href} class="hover:text-md text-xs uppercase md:text-sm">{name}</a>
			</li>
		{/each}
	</ul>
	<span class:text-night={!isDark} class:text-silver={isDark} class="mt-6 text-center font-cursive">
		Created from scratch with ❤️ by Caique Torres
	</span>
</footer>
