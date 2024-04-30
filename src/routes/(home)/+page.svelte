<script lang="ts">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';
	import Linkedin from '$lib/components/Linkedin.svelte';
	import GitHub from '$lib/components/GitHub.svelte';

	interface ILink {
		href: string;
		component: typeof GitHub | typeof Linkedin;
	}

	const links: ILink[] = [
		{ href: 'https://github.com/caiquetorres', component: GitHub },
		{ href: 'https://www.linkedin.com/in/caiquetorres', component: Linkedin }
	];

	onMount(() => {
		new Typed('#engineer-name', {
			strings: ['Hi', "Hi, I'm Caique"],
			typeSpeed: 50,
			showCursor: false
		});
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#F9F9F9" />
</svelte:head>

<main class="flex flex-col items-center">
	<section class="relative flex h-screen w-full items-center justify-center bg-seasalt">
		<span class="profession absolute w-full text-center uppercase text-charcoal opacity-5">
			Software Engineer
		</span>
		<div class="flex items-center justify-center">
			<div class=" flex w-[40rem] flex-col items-center justify-center space-y-4">
				<div class="flex">
					<!-- svelte-ignore a11y_missing_content -->
					<h1 id="engineer-name" class="h-12 text-5xl font-bold text-charcoal"></h1>
				</div>
				<p class="text-center text-charcoal">
					Dedicated to <em class="font-semibold not-italic text-cordovan">TypeScript</em>,
					<em class="font-semibold not-italic text-cordovan">Rust</em>, and other key technologies,
					I continuously enhance my expertise to create exceptional user experiences in software
				</p>
				<div class="flex space-x-2">
					{#each links as { href, component }}
						<a {href} target="_blank">
							<svelte:component this={component} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<section class="h-screen w-full bg-charcoal"></section>
</main>

<style>
	.profession {
		pointer-events: none;
		user-select: none;
		font-size: 14rem;
		font-weight: 600;
		line-height: 10rem;
		letter-spacing: -1.5rem;
	}
</style>
