<template>
	<Navbar />
	<Settings />
	<div id="Randomise" class="mx-auto w-full lg:w-1/2 p-6">
		<div class="w-full flex justify-center">
			<button class="btn btn-primary" @click="randAyah">Random Ayah</button>
		</div>
	</div>
</template>

<script setup lang="ts">
async function randAyah() {}
</script>
