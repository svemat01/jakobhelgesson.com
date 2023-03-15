<div class="section">
	<div class="wrapper container">
		<slot />
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
			transform: skewY(var(--skew-y, -2deg));
		}

		.wrapper {
			/* padding-block: 12rem; */
			padding-top: var(--padding-top, 12rem);
			padding-bottom: var(--padding-bottom, 12rem);
		}
	}
</style>