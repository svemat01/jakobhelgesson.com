<script>
	import Hero from '$lib/sections/hero/Hero.svelte';
	import Me from '$lib/sections/me/Me.svelte';
</script>

<Hero />

<div class="section">
	<div class="wrapper">
		<Me />
		<!-- <Projects /> -->
	</div>
</div>

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
			width: calc(100% - 6rem);
			max-width: 1300px;

			margin-inline: auto;
			padding-block: 12rem;
		}
	}
</style>
