<script>
	import BlogPosts from '$lib/sections/blog-posts/BlogPosts.svelte';
import Hero from '$lib/sections/hero/Hero.svelte';
	import LatestWorks from '$lib/sections/latest-works/LatestWorks.svelte';
	import Me from '$lib/sections/me/Me.svelte';
</script>

<Hero />

<div class="section">
	<div class="wrapper container">
		<Me />
	</div>
</div>

<LatestWorks />

<BlogPosts />

<style lang="scss">
	.section {
		position: relative;
		isolation: isolate;

		margin-bottom: 4rem;

		&::before {
			content: '';
			background-color: $gray-350;

			position: absolute;
			z-index: -1;
			inset: 0;

			margin-inline: auto;
			transform: skewY(-2deg);
		}

		.wrapper {
			padding-block: 12rem;
		}
	}
</style>
