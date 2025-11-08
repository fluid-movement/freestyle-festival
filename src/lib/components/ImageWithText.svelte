<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		src,
		height = 'h-96',
		overlay = true,
		children,
		class: className = ''
	}: {
		src: string;
		height?: string;
		overlay?: boolean;
		children: Snippet;
		class?: string;
	} = $props();

	const backgroundStyle = overlay 
		? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${src}')`
		: `url('${src}')`;
</script>

<div 
	class={cn('flex items-center justify-center overflow-hidden px-4 text-center', height, className)}
	style="background-image: {backgroundStyle}; background-size: cover; background-position: center;"
>
	{@render children()}
</div>
