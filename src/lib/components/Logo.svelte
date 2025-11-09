<script lang="ts">
	import { cn } from '$lib/utils';
	import logo from '$lib/assets/logo.png';
	import { resolve } from '$app/paths';

	let {
		class: className = '',
		width = 'w-18'
	}: {
		class?: string;
		width?: string;
	} = $props();
</script>

<a href={resolve('/')} class={cn('inline-block', className)}>
	<img src={logo} alt="Frisbee Festival Munich Logo" class={cn('h-auto', width)} />
</a>
