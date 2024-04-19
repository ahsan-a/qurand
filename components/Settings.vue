<template>
	<div id="settings" class="mx-auto artboard bg-base-200 mt-2 w-full lg:w-1/2 artboard-demo p-6">
		<div class="w-full flex">
			<h1 class="text-4xl font-bold flex-1">Settings</h1>
			<button class="btn btn-square flex-none" @click="settingsOpen = !settingsOpen">
				<svg
					clip-rule="evenodd"
					fill-rule="evenodd"
					stroke-linejoin="round"
					stroke-miterlimit="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="fill-base-content size-14 m-auto h-full align-middle"
				>
					<path
						d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
					/>
				</svg>
			</button>
		</div>
		<div class="w-fit mt-2" v-if="settingsOpen">
			<div role="tablist" class="tabs tabs-bordered w-">
				<a role="tab" class="tab" :class="{ 'tab-active': tabJuz }" @click="tabJuz = true">Select Juz</a>
				<a role="tab" class="tab" :class="{ 'tab-active': !tabJuz }" @click="tabJuz = false">Select Surah(s)</a>
			</div>
			<div class="mt-4">
				<div v-if="tabJuz">
					<h2 class="text-2xl font-bold text-center">Select Juz</h2>
					<div class="mx-auto w-fit mt-2">
						<button class="btn btn-sm btn-primary mr-3" @click="juzSelected = juzSelected.map((_) => true)">Select all</button>
						<button class="btn btn-sm btn-neutral" @click="juzSelected = juzSelected.map((_) => false)">Deselect all</button>
					</div>
					<div class="columns-2 mt-2 mx-auto">
						<div v-for="(_, i) in juzSelected" class="flex h-8 items-center justify-center"
							><div class="inline-block mr-3">Juz {{ i + 1 }}: </div
							><input type="checkbox" v-model="juzSelected[i]" class="checkbox inline-block"
						/></div>
					</div>
				</div>
				<div v-else>
					<h2 class="text-2xl font-bold text-center">Select Surah</h2>
					<div class="mx-auto w-fit mt-2">
						<button class="btn btn-sm btn-primary mr-3" @click="surahsSelected = surahsSelected.map((_) => true)">Select all</button>
						<button class="btn btn-sm btn-neutral" @click="surahsSelected = surahsSelected.map((_) => false)">Deselect all</button>
					</div>
					<div class="columns-2 mt-2 mx-auto">
						<div v-for="(_, i) in surahsSelected" class="flex h-8 items-center justify-center"
							><div class="inline-block mr-3">Surah {{ surahNames[i] }} </div
							><input type="checkbox" v-model="surahsSelected[i]" class="checkbox inline-block"
						/></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const tabJuz = ref(true);
const settingsOpen = ref(true);
const juzSelected: Ref<boolean[]> = ref(new Array(30).fill(false));
const surahsSelected: Ref<boolean[]> = ref(new Array(114).fill(false));
</script>
