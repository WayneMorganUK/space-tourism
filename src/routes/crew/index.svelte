<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import * as json from './crew.json';
	import Navigation from '$lib/Navigation.svelte';
	import { fade } from 'svelte/transition';
	let crew = json.crew;
	let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;
	};
	import PageTransition from '$lib/PageTransition.svelte';
</script>
<PageTransition>

<section class="crew">
	<Navigation />

	<main id="main" class="grid-container grid-container--crew flow">
		<h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

		<div class="dot-indicators flex">
			{#each crew as crewMember, index}
				<button on:click={handleClick(index)}>
					<span class="sr-only">The {crewMember.role}</span>
				</button>
			{/each}
		</div>
		{#key activeTabValue}
		<article in:fade="{{delay:600,duration:1000}}" out:fade="{{duration:400}}" class="crew-details flow">
			<header class="flow flow--space-small">
				<h2 class="fs-600 ff-serif uppercase">{crew[activeTabValue].role}</h2>
				<p class="fs-700 uppercase ff-serif">{crew[activeTabValue].name}</p>
			</header>
			<p>{crew[activeTabValue].bio}</p>
		</article>
		{/key}
		{#key activeTabValue}
		<picture in:fade="{{delay:600,duration:1000}}" out:fade="{{duration:400}}" id="crew-image">
			<source srcset={crew[activeTabValue].images.webp} type="image/webp" />
			<img src={crew[activeTabValue].images.png} alt={crew[activeTabValue].name} />
		</picture>
		{/key}
	</main>
</section>
</PageTransition>