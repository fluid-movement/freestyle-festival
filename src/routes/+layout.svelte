<script lang="ts">
	import '../app.css';
	import { locale } from '$lib/i18n.svelte';
	import type { Locale } from '$lib/i18n.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	// Set locale from server data immediately (no flash)
	locale.set(data.locale as Locale);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<Separator class="mb-8" />
	<main class="flex flex-1 flex-col">
		{@render children()}
	</main>
	<Separator />
	<Footer />
</div>
