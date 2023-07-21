<section class="card">
    <slot />
    <div class="bg" />
</section>

<style lang="scss">
    .card {
		position: relative;
		border-radius: 1.8rem;
		padding: var(--card-padding, 2rem 3rem);
		overflow: hidden;
		grid-area: var(--card-grid-area, unset);

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			background-color: var(--card-bg, $text);
			opacity: var(--card-opacity, 0.03);
			border-radius: 1.8rem;
			z-index: -5;
		}
	}
</style>