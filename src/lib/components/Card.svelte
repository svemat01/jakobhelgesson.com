<section class="card">
	<slot name="root">
		<h1><slot name="title">NO TITLE</slot></h1>
		<div class="content"><slot>NO CONTENT</slot></div>
	</slot>
	<div class="bg" />
</section>

<style lang="scss">
	$border-radius: 1.8rem;
	.card {
		position: relative;
		border-radius: $border-radius;
		overflow: hidden;
		grid-area: var(--card-grid-area, unset);
		height: 100%;

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			background-color: var(--card-bg, $text);
			opacity: var(--card-opacity, 0.03);
			border-radius: $border-radius;
			z-index: -5;
		}
	}

	h1 {
		font-size: 2rem;
		font-weight: 500;

		padding: var(--card-title-padding, var(--card-padding, $card-padding));
		/* margin-bottom: 1rem; */
		border-bottom: $card-divider;
	}

	.content {
		font-size: 1.6rem;
		line-height: 1.4;
		color: $text-dimmed;

		padding: var(--card-content-padding, var(--card-padding, $card-padding));
	}
</style>
