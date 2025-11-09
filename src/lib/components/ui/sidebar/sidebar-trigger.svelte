<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils.js';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import type { ComponentProps } from 'svelte';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	variant="ghost"
	size="lg"
	class={cn('', className)}
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	{...restProps}
>
	<MenuIcon />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
