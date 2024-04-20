import fs from 'node:fs';
import { z } from 'zod';

import { Verse } from '~/utils';

const randVerseSchema = z.object({
	data: z.array(z.number().min(1)).min(1).default([30]),
	omitVerses: z.tuple([z.number().min(0), z.number().min(0)]).default([0, 0]),
	byJuz: z.boolean().default(true),
});

const quran = fs.readFileSync(`${process.cwd()}/public/quran.txt`, 'utf-8').toString().split('\n\n\n')[0];

const quranJuzAyahs = quran.split('\n\n').map((x, juz) =>
	x
		.split('\n')
		.map((y) => y.split('|'))
		.map((y) => ({ surah: parseInt(y[0]), number: parseInt(y[1]), content: y[2], juz: juz + 1 } as Verse))
);
const quranByJuz = (() => {
	const finalQuran: Verse[][][] = [];
	let currentJuz: Verse[][] = [];

	quranJuzAyahs.forEach((juz, j) => {
		let currentSurah: Verse[] = [];

		juz.forEach((verse, v) => {
			if (verse.number == 1 && v) {
				currentJuz.push(currentSurah);
				currentSurah = [];
			}
			currentSurah.push(verse);
		});
		currentJuz.push(currentSurah);
		finalQuran.push(currentJuz);
		currentJuz = [];
	});

	return finalQuran;
})();

const quranBySurahs = (() => {
	const lines = quranJuzAyahs.flat(2);
	const result: Verse[][] = [];

	let currentSurah: Verse[] = [];
	for (const l of lines) {
		if (l.number == 1 && currentSurah.length) {
			result.push(currentSurah);
			currentSurah = [];
		}
		currentSurah.push(l);
	}
	result.push(currentSurah);

	return result;
})();

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, (body) => randVerseSchema.safeParse(body));
	if (!body.success) throw body.error.issues;

	const { byJuz, data, omitVerses } = body.data;

	let flattened: Verse[];
	if (byJuz) {
		let selectedJuz = data.map((x) => quranByJuz[x - 1]);
		if (omitVerses[0]) selectedJuz = selectedJuz.map((x) => x.map((y) => y.slice(omitVerses[0])));
		if (omitVerses[1]) selectedJuz = selectedJuz.map((x) => x.map((y) => y.slice(0, -omitVerses[1])));

		flattened = selectedJuz.flat(3);
	} else {
		let selectedSurahs = data.map((x) => quranBySurahs[x - 1]);

		if (omitVerses[0]) selectedSurahs = selectedSurahs.map((x) => x.slice(omitVerses[0]));
		if (omitVerses[1]) selectedSurahs = selectedSurahs.map((x) => x.slice(0, -omitVerses[1]));

		flattened = selectedSurahs.flat(3);
	}
	const chosen = flattened[Math.floor(Math.random() * flattened.length)];

	chosen.content = chosen.content.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', '').trim();

	return chosen;
});
