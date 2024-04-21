<template>
	<div :data-theme="settings.currentTheme">
		<Navbar />

		<div class="hero py-10">
			<div class="hero-content text-center">
				<div class="max-w-1/2">
					<h1 class="text-5xl font-bold">quran(d)</h1>
					<p class="py-6"> Accelerate your Quran revision with automated testing. </p>
					<button class="btn btn-primary" @click="randVerse">Random Verse</button>
					<div v-if="verse">
						<h1 class="text-6xl font-black mt-8 mb-4 leading-loose">{{ verse.content }}</h1>
						<div>
							<button class="btn btn-neutral" @click="revealSurah = !revealSurah">{{
								revealSurah ? (verse?.surah ? surahNames[verse.surah - 1] : 'Reveal Surah') : 'Reveal Surah'
							}}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Settings />
	</div>
</template>

<script setup lang="ts">
import { type Verse, surahNames } from '~/utils';

const settings = useSettings();

useSeoMeta({
	title: 'quran(d)',
	description: 'Accelerate your Quran revision and memorisation with automated testing.',
	googleSiteVerification: 'UD_XqinTugXrZvPhrQiDIP4rXLF4rqh9HhfpTNR8ecI',
});

const verse: Ref<Verse | null> = ref(null);

const revealSurah = ref(false);
async function randVerse() {
	const data = settings.tabJuz
		? settings.juzSelected.map((x, i) => (x ? i + 1 : false)).filter((x) => x)
		: settings.surahsSelected.map((x, i) => (x ? i + 1 : false)).filter((x) => x);

	if (!settings.omitVerses[0]) settings.omitVerses[0] = 0;
	if (!settings.omitVerses[1]) settings.omitVerses[1] = 0;

	revealSurah.value = false;

	verse.value = await $fetch('/api/randVerse', {
		method: 'POST',
		body: {
			data,
			omitVerses: settings.omitVerses,
			byJuz: settings.tabJuz,
		},
	});
}
</script>
