<script>
	import '../app.css';

	let selectedIdx = 0;
	const links = [
		{ href: '/', name: 'Home' }
		// { href: '#about', name: 'About' },
		// { href: '#project', name: 'Projects' },
		// { href: '#experience', name: 'Experience' }
	];
</script>

<header class="relative z-10 flex w-full justify-center bg-transparent lg:absolute">
	<div class="flex w-full max-w-content justify-between p-3 lg:px-0">
		<strong class="text-3xl font-semibold text-charcoal">CT</strong>
		<nav>
			<ul class="flex h-full items-center space-x-4">
				{#each links as { href, name }, i}
					<li>
						<a
							{href}
							class={i === selectedIdx
								? 'font-semibold text-cordovan'
								: 'font-normal text-charcoal'}
							on:click={() => (selectedIdx = i)}
						>
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<slot />
