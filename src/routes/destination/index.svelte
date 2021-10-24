<script context="module">
	export const prerender = true;
</script>
<script lang="ts">
	import * as json from './destination.json';
	import Navigation from '$lib/Navigation.svelte';
	import { fade } from 'svelte/transition';
	let destination = json.destination;
	let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;
	};
	import PageTransition from '$lib/PageTransition.svelte';
</script>
<PageTransition>

<section class="destination">
	<Navigation />

	<main id="main" class="grid-container grid-container--destination flow">
		<h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
		{#key activeTabValue}
		<picture in:fade="{{delay:600,duration:1000}}" out:fade="{{duration:400}}">
			<source srcset={destination[activeTabValue].images.webp} type="image/webp" />
			<img src={destination[activeTabValue].images.png} alt="the moon" />
		</picture>
		{/key}

		<div class="tab-list aria-selected underline-indicators flex">
			{#each destination as planet, index}
			<button on:click={handleClick(index)} class:active={activeTabValue===index} class="selected uppercase ff-sans-cond text-accent letter-spacing-2">{planet.name}</button>
		{/each}
	</div>
	{#key activeTabValue}
		<article  in:fade="{{delay:600,duration:1000}}" out:fade="{{duration:400}}" class="destination-info flow">
			<h2 class="fs-800 uppercase ff-serif">{destination[activeTabValue].name}</h2>
			<p>{destination[activeTabValue].description}</p>
			<div class="destination-meta flex">
				<div>
					<h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
					<p class="ff-serif uppercase">{destination[activeTabValue].distance}</p>
				</div>
				<div>
					<h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
					<p class="ff-serif uppercase">{destination[activeTabValue].travel}</p>
				</div>
			</div>
		</article>
		{/key}
	</main>
</section>
</PageTransition>
