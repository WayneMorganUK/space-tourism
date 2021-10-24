<script context="module">
	export const prerender = true;
	export const load = async ({ page }) => ({
	  props: {
		key: page.path,
	  },
	})

</script>
<script lang='ts'>
	import Navigation from '$lib/Navigation.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
</script>
<PageTransition>
<section class=" bg-home-mobile sm:bg-home-tablet md:bg-home-desktop">
	<Navigation />
	<div class="grid-container grid-container--home">
		<div>
			<h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
				So, you want to travel to
				<span class="d-block fs-900 ff-serif text-white">Space</span>
			</h1>
			<p>
				Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
				out of this world experience!
			</p>
		</div>
		<div>
			<a href="/destination" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
		</div>
	</div>
</section>
</PageTransition>
