<script>
	import Code from '$lib/components/Code.svelte';
</script>

<section
	id="about"
	class="flex h-[55rem] max-h-screen w-full flex-col items-center justify-center gap-8 bg-charcoal"
>
	<h2 class="text-3xl font-semibold uppercase text-seasalt">About me</h2>
	<div class="relative flex w-full max-w-blog flex-col items-center justify-center gap-4">
		<p class="text-justify font-sans text-sm leading-7 text-seasalt">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et fermentum lorem. Aenean
			pharetra, dui a dictum pretium, quam felis pellentesque tortor, molestie lobortis neque risus
			nec neque. Vivamus eget tortor et arcu gravida dictum. Vestibulum elit nulla, dictum id
			gravida in, pharetra a ligula. Praesent tincidunt euismod felis vitae ullamcorper. Mauris nec
			rutrum est. Donec id lectus urna. Proin maximus mauris a nunc sollicitudin, id porta odio
			vulputate. Proin eget mauris magna. Aenean vitae arcu sit amet ante condimentum elementum.
			Praesent ut libero id orci cursus tincidunt.
		</p>
		<p class="text-justify font-sans text-sm leading-7 text-seasalt">
			Fusce pulvinar nisi orci, in tristique nunc placerat in. Duis at fermentum massa. Maecenas ut
			erat ex. Curabitur gravida posuere pellentesque. Vestibulum sit amet felis nunc. Nam ut neque
			erat. Maecenas faucibus et felis eu tincidunt. Suspendisse sit amet nunc massa. Curabitur
			hendrerit nisl id congue blandit. Nam ullamcorper augue ac libero lacinia, vitae dapibus
			turpis scelerisque.
		</p>
	</div>
	<div class="flex w-full justify-center gap-2">
		<Code defaultCode="downloadResume()" />
		<Code defaultCode="slideTo(section: &quot;My Experience&quot;)" />
	</div>
</section>
