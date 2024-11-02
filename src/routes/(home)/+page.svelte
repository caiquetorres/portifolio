<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import About from "./components/About.svelte";
  import Home from "./components/Home.svelte";
</script>

<svelte:head>
  <meta name="theme-color" content="#151922" />
</svelte:head>

<Header />

<div class="flex w-full flex-col">
  <main class="flex flex-col items-center overflow-y-auto overflow-x-hidden">
    <Home />
    <About />
  </main>
</div>

<Footer />
