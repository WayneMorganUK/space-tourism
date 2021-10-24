<script context="module">
	export const prerender = true;
</script>
<script lang='ts'>
	import * as json from './technology.json';
	import Navigation from '$lib/Navigation.svelte';
	import { fade } from 'svelte/transition';
	let technology = json.technology;
	let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;
	};
	import PageTransition from '$lib/PageTransition.svelte';
</script>
<PageTransition>

<section class="technology">
	<Navigation />

	<main id="main" class="grid-container grid-container--destination flow">
		<h1 class="numbered-title"><span aria-hidden="true">03</span> Space Technology</h1>
		{#key activeTabValue}
		<picture in:fade="{{delay:600,duration:1000}}" out:fade="{{duration:400}}">
			<img src={technology[activeTabValue].images.portrait} alt="the moon" />
		</picture>
		{/key}

		<div class="tab-list underline-indicators flex">
			{#each technology as item, index}
			<button
			on:click={handleClick(index)}
				class:active={activeTabValue===index}
				class="uppercase ff-sans-cond text-accent letter-spacing-2"
				>{item.name}</button
			>{/each}
		</div>
		{#key activeTabValue}
		<article in:fade="{{delay:420,duration:600}}" out:fade="{{duration:400}}" class="destination-info flow" >
			<h2 class="fs-600 uppercase ff-serif">{technology[activeTabValue].name}</h2>
			<p>{technology[activeTabValue].description}</p>
		</article>
		{/key}
	</main>
</section>
</PageTransition>
