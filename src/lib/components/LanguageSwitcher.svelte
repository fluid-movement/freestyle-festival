<script lang="ts">
	import { locale } from '$lib/i18n.svelte';

	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'de', label: 'Deutsch' }
	] as const;

	function switchLanguage(lang: 'en' | 'de') {
		locale.set(lang);
	}
</script>

<div>
	{#each languages as { code, label } (code)}
		<button
			onclick={() => switchLanguage(code)}
			class="rounded px-3 py-1 transition-colors {$locale === code
				? 'bg-primary text-primary-foreground'
				: 'bg-secondary hover:bg-secondary/80'}"
		>
			{label}
		</button>
	{/each}
</div>
