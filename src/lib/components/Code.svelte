<script lang="ts">
	import { onMount } from 'svelte';
	import Play from './icons/Play.svelte';

	interface Props {
		defaultCode: string;
		class?: string;
		onclick?: () => void;
	}

	let { ...props }: Props = $props();
	let contentEl: HTMLElement;
	let cls = $derived(props['class'] || '');

	onMount(() => reset());

	function reset() {
		contentEl.textContent = props.defaultCode;
	}
</script>

<div class={cls + ' w-full max-w-[30rem] overflow-hidden rounded-lg bg-[#313131]'}>
	<div class="flex items-center justify-between gap-4 px-4 py-2">
		<span class="select-none justify-self-start text-xs text-silver">script</span>
		<button
			onclick={props.onclick}
			class="flex rounded bg-[#006DB1] p-2 text-xs text-seasalt hover:bg-[#02598F]"
		>
			<Play class="mr-2 text-seasalt" />
			<span class="select-none">Run code</span>
		</button>
		<button
			onclick={reset}
			class="pointer-events-none select-none rounded bg-[#006DB1] p-2 text-xs text-seasalt opacity-50 hover:bg-[#02598F]"
		>
			Reset
		</button>
	</div>
	<div class="bg-[#1C1C1C] px-4 py-2">
		<div class="flex text-silver">
			<span class="mr-4 select-none opacity-20">1</span>
			<div
				bind:this={contentEl}
				class="flex w-full items-center font-code text-sm outline-none"
			></div>
		</div>
	</div>
</div>
