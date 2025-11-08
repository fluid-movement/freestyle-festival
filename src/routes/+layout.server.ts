import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const locale = cookies.get('locale') || 'en';
	return {
		locale: locale === 'de' ? 'de' : 'en'
	};
};
