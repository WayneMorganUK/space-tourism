<script lang='ts'>
	import { page } from '$app/stores';
	</script>

<header class="primary-header flex">
	<div>
		<img src="/shared/logo.svg" alt="space tourism logo" class="logo" />
	</div>
	<button class="mobile-nav-toggle" aria-controls="primary-navigation">
		<span class="sr-only" aria-expanded="false">Menu</span>
	</button>

	<nav>
		<ul class="primary-navigation underline-indicators flex">
			<li class:active={$page.path === '/'}>
				<a class="ff-sans-cond uppercase text-white letter-spacing-2" sveltekit:prefetch href="/"
					><span>00</span>Home</a
				>
			</li>
			<li class:active={$page.path === '/destination'}>
				<a class="ff-sans-cond uppercase text-white letter-spacing-2"sveltekit:prefetch href="/destination"
					><span>01</span>Destination</a
				>
			</li>
			<li class:active={$page.path === '/crew'}>
				<a class="ff-sans-cond uppercase text-white letter-spacing-2" sveltekit:prefetch href="/crew"
					><span>02</span>Crew</a
				>
			</li>
			<li class:active={$page.path === '/technology'}>
				<a class="ff-sans-cond uppercase text-white letter-spacing-2" sveltekit:prefetch href="/technology"
					><span>03</span>Technology</a
				>
			</li>
		</ul>
	</nav>
</header>
