<script lang="ts">
	import { locale } from '$lib/i18n.svelte';
	import type { Locale } from '$lib/i18n.svelte';
	import Button from './ui/button/button.svelte';

	const languages = [
		{ code: 'de', label: 'Deutsch' },
		{ code: 'en', label: 'English' }
	] as const;

	function switchLanguage(lang: Locale) {
		locale.set(lang);
	}
</script>

<div class="flex gap-4">
	{#each languages as { code, label } (code)}
		<Button onclick={() => switchLanguage(code)} variant={$locale === code ? 'default' : 'outline'}>
			{label}
		</Button>
	{/each}
</div>
