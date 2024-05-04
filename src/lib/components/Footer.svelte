<script lang="ts">
	import GitHub from './icons/GitHub.svelte';
	import Leetcode from './icons/Leetcode.svelte';
	import Linkedin from './icons/Linkedin.svelte';

	interface IProps {
		theme?: 'dark' | 'light';
	}

	const { theme = 'light' }: IProps = $props();
	const isDark = $derived(theme === 'dark');
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
		class="tems-center mt-4 flex space-x-2 md:space-x-4"
	>
		<li>
			<a href="/" class="hover:text-md text-xs uppercase duration-100 md:text-sm">Home</a>
		</li>
		<li>
			<a href="#about" class="hover:text-md text-xs uppercase duration-100 md:text-sm">About me</a>
		</li>
	</ul>
	<span class:text-night={!isDark} class:text-silver={isDark} class="mt-6 font-cursive">
		Created from scratch with ❤️ by Caique Torres
	</span>
</footer>
