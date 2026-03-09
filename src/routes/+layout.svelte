<script lang="ts">
	import '../app.css';
	import Moon from '@lucide/svelte/icons/Moon';
	import Sun from '@lucide/svelte/icons/Sun';
	import { page } from '$app/state';

	const { children } = $props();
	let darkTheme = $state(true);
	const currentPage = $derived(page.url.pathname);
	$effect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="h-full w-full">
	<button
		class="absolute top-[5px] right-[5px]"
		onclick={() => {
			darkTheme = !darkTheme;
		}}
	>
		{#if darkTheme}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>
	<nav class="flex items-center justify-center px-4 pt-4">
		<a href="/" class={currentPage === '/' ? 'active' : ''}
			><button class="nav-button">About</button></a
		>
		<a href="/blog" class={currentPage.includes('blog') ? 'active' : ''}>
			<button class="nav-button">Blog</button></a
		>
		<a href="/contact" class={currentPage === '/contact' ? 'active' : ''}
			><button class="nav-button">Contact</button></a
		>
	</nav>
	{@render children()}
</div>

<style lang="postcss">
	@reference "../app.css";
	.nav-button {
		@apply mx-2 h-12 w-48 transform rounded-md border p-1 shadow-sm shadow-primary transition-all duration-300 hover:scale-105 hover:bg-primary;
	}
	.active button {
		@apply bg-primary;
	}
</style>
