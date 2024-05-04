<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from '$lib/animations/fade';
	import Code from '$lib/components/Code.svelte';
	import Memphis2 from '$lib/components/memphis/Memphis2.svelte';

	async function downloadResume(): Promise<void> {
		const a = document.createElement('a');
		a.href = '/api/files/resumes/resume_en_us.pdf';
		a.download = 'Resume_en_US.pdf';
		a.click();
		a.remove();
	}
</script>

<section id="about" class="section-night">
	<div
		use:fade
		class="relative flex h-full w-full max-w-content flex-col items-center justify-center"
	>
		<div class="pointer-events-none absolute h-full w-full text-cordovan opacity-20">
			<Memphis2
				class="absolute bottom-[-3rem] left-[1rem] h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem]"
			/>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="mb-4 text-2xl font-semibold uppercase text-seasalt md:text-3xl">About</h2>
			<div class="h-1 w-[5rem] rounded-full bg-cordovan"></div>
		</div>
		<div class="text relative mt-8 flex w-full max-w-blog flex-col items-center justify-center">
			<p class="w-full text-justify font-sans text-sm leading-8 text-silver">
				As a <strong class="font-semibold text-seasalt">Computer Engineer</strong> and programmer, I
				have a constant pursuit of improving my knowledge in all stages of software development, encompassing
				different types, such as applications and games. My main goal is to create exceptional experiences
				while simultaneously expanding my studies and professional growth within the company I am a part
				of.
			</p>
			<p class="mt-8 w-full text-justify font-sans text-sm font-medium leading-8 text-silver">
				I always maintain a continuous commitment to learning and share my findings and developments
				on my GitHub. There, you can find projects in
				<strong class="font-semibold text-seasalt">TypeScript</strong>,
				<strong class="font-semibold text-seasalt">JavaScript</strong>,
				<strong class="font-semibold text-seasalt">Svelte</strong>,
				<strong class="font-semibold text-seasalt">C#</strong>, and
				<strong class="font-semibold text-seasalt">Rust</strong>.
			</p>
		</div>
		<div class="mt-8 flex w-full flex-col items-center justify-center gap-6">
			<Code
				onclick={downloadResume}
				class="w-full max-w-none md:w-[30rem]"
				defaultCode="downloadResume(format: ”pdf”, lang: ”en-US”)"
			/>
			<h4 class="text-md mt-16 text-silver">Wanna know more of me?</h4>
			<Code
				class="z-10 w-full max-w-none md:w-[30rem]"
				defaultCode="goTo(page: &quot;Experience&quot;)"
				onclick={() => goto('/experience')}
			/>
		</div>
	</div>
</section>
