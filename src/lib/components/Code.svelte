<script lang="ts">
	import { onMount } from 'svelte';

	import Play from './icons/Play.svelte';

	import 'highlight.js/styles/hybrid.css';

	export let defaultCode: string;

	let contentEl: HTMLElement;
	$: c = ($$restProps.class || '') + ' ';

	onMount(() => {
		contentEl.textContent = defaultCode;
	});
</script>

<div class={c + 'w-full max-w-[30rem] overflow-hidden rounded-lg bg-[#313131]'}>
	<div class="flex items-center justify-between gap-4 px-4 py-2">
		<span class="select-none text-xs text-seasalt">script</span>
		<button on:click class="flex rounded bg-[#006DB1] p-2 text-xs text-seasalt hover:bg-[#02598F]">
			<Play class="mr-2 text-seasalt" />
			<span class="select-none">Run code</span>
		</button>
		<button
			on:click={() => {
				contentEl.innerHTML = defaultCode;
			}}
			class="select-none rounded bg-[#006DB1] p-2 text-xs text-seasalt hover:bg-[#02598F]"
		>
			Reset
		</button>
	</div>
	<div class="bg-[#1C1C1C] px-4 py-2">
		<div class="flex text-seasalt">
			<span class="mr-4 select-none opacity-20">1</span>
			<div
				bind:this={contentEl}
				contenteditable="true"
				class="font-code w-full text-sm outline-none"
			></div>
		</div>
	</div>
</div>
