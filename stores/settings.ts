export const useSettings = defineStore('settings', {
	state: () => ({
		tabJuz: true,
		juzSelected: new Array(30).fill(false) as boolean[],
		surahsSelected: new Array(114).fill(false) as boolean[],
		omitVerses: [0, 3] as [number, number],
		currentTheme: 'dracula',
	}),
});
