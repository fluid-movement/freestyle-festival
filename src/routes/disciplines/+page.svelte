<script lang="ts">
	import { resolve } from '$app/paths';
	import Grid from '$lib/components/Grid.svelte';
	import { t } from '$lib/i18n.svelte';

	type ValidRoute = Parameters<typeof resolve>[0];
</script>

{#snippet card(title: string, href: ValidRoute)}
	<a href={resolve(href)}>
		<div
			class="flex min-h-100 items-center justify-center rounded-md bg-stone-200 transition-all duration-500 ease-in-out hover:scale-102 hover:bg-stone-300"
		>
			<h2>{title}</h2>
		</div>
	</a>
{/snippet}

<h1 class="container-custom mb-12 text-center">{$t('disciplines.title')}</h1>
<Grid>
	<div class="flex flex-col items-center justify-center">
		<h2>{$t('disciplines.card.title')}</h2>
		<p>{$t('disciplines.card.content')}</p>
	</div>
	{@render card('Freestyle Frisbee', '/disciplines/freestyle')}
	{@render card('Disc Golf', '/disciplines/disc-golf')}
	{@render card('Double Disc Court', '/disciplines/double-disc-court')}
</Grid>
