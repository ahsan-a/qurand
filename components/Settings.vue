<template>
	<div
		id="settings"
		class="mx-auto artboard artboard-demo md:flex-row bg-base-200 mt-2 w-full xl:w-1/2 p-5 md:justify-evenly h-full md:items-start mb-10"
	>
		<div class="md:h-full mt-6">
			<div class="">
				<h1 class="text-lg font-semibold">Omit Verses from Surahs</h1>
				<div class="flex flex-row mt-2 items-center justify-between">
					From Start:
					<input
						type="text"
						@keydown="checkDigit"
						class="ml-3 input input-sm input-bordered w-full max-w-12 text-white text-center"
						maxlength="1"
						v-model.number="settings.omitVerses[0]"
					/>
				</div>
				<div class="flex flex-row mt-2 items-center justify-between">
					From End:
					<input
						type="text"
						@keydown="checkDigit"
						class="ml-3 input input-sm input-bordered w-full max-w-12 text-white text-center"
						maxlength="1"
						v-model.number="settings.omitVerses[1]"
					/>
				</div>

				<!-- Themes -->
				<div class="dropdown mx-auto w-full">
					<div tabindex="0" role="button" class="btn">
						Theme
						<svg
							width="12px"
							height="12px"
							class="h-2 w-2 fill-current opacity-60 inline-block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 2048 2048"
						>
							<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
						</svg>
					</div>
					<ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-48 overflow-auto">
						<li v-for="theme in themes">
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								:aria-label="theme"
								:value="theme"
								@click="settings.currentTheme = theme"
							/>
						</li>
					</ul>
				</div>
				<p class="text-sm font-semibold text-center">This site uses Vercel Analytics.</p>
			</div>
		</div>
		<div class="md:ml-5 w-fit border-base-300 h-full mt-6">
			<div role="tablist" class="tabs tabs-bordered">
				<a role="tab" class="tab" :class="{ 'tab-active': settings.tabJuz }" @click="settings.tabJuz = true">Select Juz</a>
				<a role="tab" class="tab" :class="{ 'tab-active': !settings.tabJuz }" @click="settings.tabJuz = false">Select Surah(s)</a>
			</div>
			<div class="mt-4">
				<div v-if="settings.tabJuz">
					<div class="mx-auto w-fit mt-2">
						<button class="btn btn-sm btn-primary mr-3" @click="settings.juzSelected = settings.juzSelected.map((_) => true)"
							>Select all</button
						>
						<button class="btn btn-sm btn-neutral" @click="settings.juzSelected = settings.juzSelected.map((_) => false)">Deselect all</button>
					</div>
					<div class="columns-2 mt-2 mx-auto">
						<div v-for="(_, i) in settings.juzSelected" class="flex my-1 items-center justify-center"
							><div class="inline-block mr-3">Juz {{ i + 1 }}: </div
							><input type="checkbox" v-model="settings.juzSelected[i]" class="checkbox inline-block"
						/></div>
					</div>
				</div>
				<div v-else>
					<div class="mx-auto w-fit mt-2">
						<button class="btn btn-sm btn-primary mr-3" @click="settings.surahsSelected = settings.surahsSelected.map((_) => true)"
							>Select all</button
						>
						<button class="btn btn-sm btn-neutral" @click="settings.surahsSelected = settings.surahsSelected.map((_) => false)"
							>Deselect all</button
						>
					</div>
					<div class="columns-2 lg:columns-3 mt-2 mx-auto py-4">
						<div
							v-for="(_, i) in settings.surahsSelected"
							@click="settings.surahsSelected[i] = !settings.surahsSelected[i]"
							class="min-h-max py-1.5 flex items-center justify-between hover:cursor-pointer"
							><div class="mr-3 text-sm">Surah {{ surahNames[i] }} </div
							><input type="checkbox" v-model="settings.surahsSelected[i]" class="checkbox"
						/></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { themes } from '~/utils';
const settings = useSettings();
settings.juzSelected[29] = true;

function checkDigit(event: KeyboardEvent) {
	if (event.key.length === 1 && isNaN(Number(event.key))) event.preventDefault();
}
</script>
