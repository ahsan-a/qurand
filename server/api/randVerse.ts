import fs from 'node:fs';
import path from 'node:path';
import { surahs } from '~/utils/quranData';

// prettier-ignore

const quran = fs.readFileSync(`${process.cwd()}/public/quran.txt`, 'utf-8').toString().split('\n\n\n')[0].split('\n\n');

export default defineEventHandler(async (event) => {
	return quran.length;
});
