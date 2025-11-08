<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		src,
		alt,
		class: className = ''
	}: {
		src: string;
		alt: string;
		class?: string;
	} = $props();
</script>

<img {src} {alt} class={cn('h-full w-full rounded-md object-cover', className)} />
