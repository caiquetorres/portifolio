<script lang="ts">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Menphis2 from '$lib/components/menphis/Menphis2.svelte';
	import Menphis1 from '$lib/components/menphis/Menphis1.svelte';
	import Code from '$lib/components/Code.svelte';

	onMount(() => {
		new Typed('#engineer-name', {
			strings: ['Hi', "Hi, I'm Caique"],
			typeSpeed: 50,
			showCursor: false
		});
	});
</script>

<section
	id="home"
	class="home flex h-[55rem] max-h-screen w-full items-center justify-center bg-seasalt"
>
	<div class="relative flex h-full w-full max-w-content items-center justify-center">
		<Menphis1
			class="pointer-events-none absolute left-0 top-0 h-[15rem] w-[15rem] select-none opacity-[0.03] md:h-auto md:w-auto"
		/>
		<Menphis2
			class="pointer-events-none absolute bottom-0 right-0 h-[15rem] w-[15rem] select-none opacity-[0.03] md:h-auto md:w-auto"
		/>
		<div class=" flex w-[40rem] flex-col items-center justify-center gap-4 px-6 md:p-0">
			<div class="flex">
				<!-- svelte-ignore a11y_missing_content -->
				<h1
					id="engineer-name"
					class="min-h-9 text-center text-3xl font-semibold text-charcoal md:h-12 md:text-5xl"
				></h1>
			</div>
			<p class="text-center text-sm text-charcoal md:text-base">
				Dedicated to <em class="font-semibold not-italic text-cordovan">TypeScript</em>,
				<em class="font-semibold not-italic text-cordovan">Rust</em>, and other key technologies, I
				continuously enhance my expertise to create exceptional user experiences in software
			</p>
			<ul class="mb-10 flex space-x-2">
				<a href="https://github.com/caiquetorres" target="_blank">
					<GitHub class="text-charcoal duration-200 hover:text-cordovan" />
				</a>
				<a href="https://www.linkedin.com/in/caiquetorres" target="_blank">
					<Linkedin class="text-charcoal duration-200 hover:text-cordovan" />
				</a>
			</ul>
			<Code
				defaultCode="slideTo(section: &quot;About me&quot;)"
				on:click={() => {
					const el = document.getElementById('about');
					if (el) {
						window.scrollTo({
							top: el.offsetTop,
							behavior: 'smooth'
						});
					}
				}}
			/>
		</div>
	</div>
</section>

<style>
	.home {
		position: relative;
	}

	.home:after {
		@apply bg-charcoal;
		position: absolute;
		content: '';
		bottom: -1px;
		width: 100%;
		height: 3rem;
		clip-path: polygon(0% 0%, 0% 0px, 100% 100%, 0px 100%);
	}
</style>
