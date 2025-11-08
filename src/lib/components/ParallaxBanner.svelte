<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		src,
		alt,
		speed = 0.5,
		height = 'h-96',
		children,
		class: className = ''
	}: {
		src: string;
		alt: string;
		speed?: number;
		height?: string;
		children?: Snippet;
		class?: string;
	} = $props();

	let scrollY = $state(0);
	let banner: HTMLDivElement;
	let bannerTop = $state(0);

	onMount(() => {
		if (!browser) return;

		const updateBannerPosition = () => {
			if (banner) {
				bannerTop = banner.offsetTop;
			}
		};

		updateBannerPosition();

		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', updateBannerPosition);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateBannerPosition);
		};
	});

	let offset = $derived((scrollY - bannerTop) * speed);
	let transform = $derived(`translateY(${offset}px)`);
</script>

<div bind:this={banner} class={cn('relative overflow-hidden', height, className)}>
	<img
		{src}
		{alt}
		style="transform: {transform};"
		class="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
	/>
	{#if children}
		<div class="relative z-10 flex h-full items-center justify-center">
			{@render children()}
		</div>
	{/if}
</div>
