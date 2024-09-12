<script lang="ts">
	import { fade } from '$lib/animations/fade';
	import type { CompanyEntity } from '$lib/domain/CompanyEntity';

	interface IProps {
		theme: 'light' | 'dark';
		company: CompanyEntity;
	}

	const { theme = 'light', company }: IProps = $props();
</script>

<div
	use:fade
	class:dark={theme === 'dark'}
	class:light={theme === 'light'}
	class="flex w-full max-w-blog flex-col items-center gap-2"
>
	<figure class="pointer-events-none flex h-12 w-12 select-none items-center justify-center">
		<img
			class="h-full w-full rounded-md object-cover"
			alt="{company.name} logo"
			src={company.logo}
		/>
	</figure>
	<h3 class="text-md text-center font-semibold">
		<a class="underline" href={company.url} target="_blank">{company.name}</a>
	</h3>
</div>

<style lang="scss">
	.light {
		& > h3 {
			@apply text-night;
		}
	}

	.dark {
		& > h3 {
			@apply text-silver;
		}
	}
</style>
