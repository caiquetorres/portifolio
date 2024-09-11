<script lang="ts">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Code from '$lib/components/Code.svelte';
	import Leetcode from '$lib/components/icons/Leetcode.svelte';
	import Menphis1 from '$lib/components/memphis/Memphis1.svelte';
	import Memphis3 from '$lib/components/memphis/Memphis3.svelte';
	import { fade } from '$lib/animations/fade';

	onMount(() => {
		new Typed('#engineer-name', {
			strings: ['Hi', "Hi, I'm an Engineer", "Hi, I'm Caique"],
			typeSpeed: 50,
			backSpeed: 35,
			showCursor: false
		});
	});
</script>

<section
	id="home"
	class="home flex h-[55rem] max-h-screen w-full items-center justify-center bg-seasalt"
>
	<div use:fade class="relative flex h-full w-full max-w-content items-center justify-center">
		<div class="pointer-events-none absolute h-full w-full text-charcoal opacity-20">
			<Memphis3 class="absolute left-0 top-0 h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem]" />
			<Menphis1
				class="absolute bottom-[-5.25rem] right-0 h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem]"
			/>
		</div>
		<div class="flex w-[40rem] flex-col items-center justify-center gap-4 px-6 md:p-0">
			<div class="flex">
				<!-- svelte-ignore a11y_missing_content -->
				<h1
					id="engineer-name"
					class="min-h-9 text-center text-3xl font-semibold text-night md:h-12 md:text-5xl"
				></h1>
			</div>
			<p class="text-center text-sm text-night md:text-base">
				Dedicated to <em class="font-semibold not-italic text-cordovan">TypeScript</em>,
				<em class="font-semibold not-italic text-cordovan">Go</em>, and other key technologies, I
				continuously enhance my expertise to create exceptional softwares
			</p>
			<ul class="mb-10 flex space-x-3">
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
			<Code
				defaultCode="slideTo(section: &quot;About&quot;)"
				onclick={() => {
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
