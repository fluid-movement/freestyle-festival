<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		children,
		class: className = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class={cn('container-custom grid grid-cols-1 gap-8 md:grid-cols-2', className)}>
	{@render children()}
</div>
