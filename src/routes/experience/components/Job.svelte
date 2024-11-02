<script lang="ts">
	import type { JobEntity } from '$lib/domain/JobEntity';
	import { fade } from '$lib/animations/fade';

	interface IProps {
		theme: 'light' | 'dark';
		job: JobEntity;
	}

	const { theme = 'light', job }: IProps = $props();
	let startDate = $derived(
		`${job.range?.start.toLocaleString('en-US', { month: 'short' })} ${job.range?.start.getFullYear()}`
	);
	let endDate = $derived.by(() => {
		if (job.range?.end) {
			return `${job.range?.end.toLocaleString('en-US', { month: 'short' })} ${job.range?.end.getFullYear()}`;
		} else {
			return 'Present';
		}
	});
</script>

<div
	use:fade
	class:dark={theme === 'dark'}
	class:light={theme === 'light'}
	class="flex w-full max-w-blog flex-col items-center"
>
	<strong class="text-md text-center font-semibold">{job.name}</strong>
	{#if job.range}
		<span class="text-sm text-cordovan">{startDate} - {endDate}</span>
	{/if}
	{#if job.description}
		<p class="mt-2 text-justify text-sm leading-7 md:leading-8">{job.description}</p>
	{/if}
</div>

<style lang="scss">
	.light {
		& > strong,
		& > p {
			@apply text-night;
		}
	}

	.dark {
		& > strong,
		& > p {
			@apply text-silver;
		}
	}
</style>
