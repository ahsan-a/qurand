export default function () {
	return useState('settings', () =>
		reactive({
			tabJuz: ref(true),
			settingsOpen: ref(true),
			juzSelected: ref(new Array(30).fill(false)),
			surahsSelected: ref(new Array(114).fill(false)),
		})
	);
}
