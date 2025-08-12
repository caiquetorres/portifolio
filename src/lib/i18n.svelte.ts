import translations from './translations';

type T = typeof translations;
type L = keyof T;
type K = keyof T[L];

let currentLocale: L = $state((localStorage.getItem('locale') as L) ?? 'en');

export function getLocale() {
	return currentLocale;
}

export function setLocale(locale: L) {
	currentLocale = locale;
	localStorage.setItem('locale', locale);
}

function translate(locale: L, key: K, vars?: Record<string, string>) {
	let text = translations[locale][key] as string;

	if (vars) {
		Object.keys(vars).map((k) => {
			const regex = new RegExp(`{{${k}}}`, 'g');
			text = text.replace(regex, vars[k]);
		});
	}

	return text;
}

export let t = (key: K, vars?: Record<string, string>) => {
	return translate(currentLocale, key, vars);
};
