import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import en from '$lib/locales/en.json';
import de from '$lib/locales/de.json';

export type Locale = 'en' | 'de';
type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = Record<Locale, Record<string, TranslationValue>>;

const translations: Translations = {
	en: en as Record<string, TranslationValue>,
	de: de as Record<string, TranslationValue>
};

// Get initial locale from cookie or browser
function getInitialLocale(): Locale {
	if (browser) {
		const cookies = document.cookie.split(';');
		const localeCookie = cookies.find((c) => c.trim().startsWith('locale='));
		if (localeCookie) {
			const value = localeCookie.split('=')[1];
			if (value === 'en' || value === 'de') {
				return value;
			}
		}
		// Fallback to browser language
		const browserLang = navigator.language.split('-')[0];
		return browserLang === 'de' ? 'de' : 'de';
	}
	return 'en';
}

// Create a custom writable that syncs with cookies
function createLocaleStore() {
	const { subscribe, set } = writable<Locale>(getInitialLocale());

	return {
		subscribe,
		set: (value: Locale) => {
			if (browser) {
				// Set cookie with 1 year expiry
				document.cookie = `locale=${value}; path=/; max-age=31536000; SameSite=Lax`;
			}
			set(value);
		}
	};
}

export const locale = createLocaleStore();

function getNestedValue(obj: Record<string, TranslationValue>, path: string): string {
	const keys = path.split('.');
	let value: TranslationValue = obj;

	for (const key of keys) {
		if (typeof value === 'object' && value !== null && key in value) {
			value = value[key];
		} else {
			return path;
		}
	}

	return typeof value === 'string' ? value : path;
}

export const t = derived(locale, ($locale) => {
	return (key: string): string => {
		return getNestedValue(translations[$locale], key);
	};
});
