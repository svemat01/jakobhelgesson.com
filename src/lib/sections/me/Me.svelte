<script>
	import labsIcon from '$lib/assets/labs-icon.svg';
	import jakob from '$lib/assets/jakob.png';
	import Card from '$lib/components/Card.svelte';
</script>

<Card --card-padding="0" --card-grid-area="me">
	<div class="wrapper">
		<div class="title">
			<h1>
				Jakob <br />
				<span class="fancy">Helgesson</span>
			</h1>
			<h2>
				Full-Stack & DevOps Consultant <br />
				Born in Sweden, Working Globally
			</h2>
		</div>

		<div class="portrait">
			<div class="bg" />
			<img src={jakob} alt="" />
		</div>

		<div class="brand">
			<img src={labsIcon} alt="logo" />
			<span class="brand-title">Helgesson <span class="thin">Labs</span></span>
		</div>
	</div>
</Card>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-areas:
			'title portrait'
			'brand portrait';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto;

		max-height: 620px;
        padding: 0 3rem;

		@media (max-width: 880px) {
			grid-template-areas:
				'title'
				'portrait';
			grid-template-columns: 1fr;
			justify-items: center;
			max-height: unset;
            padding: 0 2rem;
		}
	}

	.title {
		grid-area: title;

		margin-top: 5rem;

		display: flex;
		flex-direction: column;

		h1 {
			font-size: 6.4rem;
			font-weight: 600;
			color: $text;

			.fancy {
				color: $primary;
			}
		}

		h2 {
			font-size: 2.4rem;
			font-weight: 400;
			color: $text;
			opacity: 0.8;
		}

		@media (max-width: 550px) {
			h1 {
				font-size: 4.8rem;
			}
			h2 {
				font-size: 2rem;
			}
		}
	}

	.portrait {
		grid-area: portrait;
		position: relative;
		display: flex;
		height: 100%;
		overflow: hidden;

		img {
			height: 100%;
			max-height: 90%;

			margin: auto;
			margin-bottom: 0;
			object-fit: cover;
			object-position: top;
		}

		.bg {
			position: absolute;
			left: 0;
			right: 0;
			z-index: -1;
			margin-left: auto;
			margin-right: auto;

			background-color: $primary;

			width: 100%;
			max-width: 250px;
			height: 110%;
			transform: rotate(3deg) translateX(5%) translateY(-5%);
		}

		@media (max-width: 880px) {
			height: 100%;
			width: 100%;
			max-height: 60rem;
			max-width: 45rem;
			position: unset;
			img {
				margin-top: 2rem;
				max-height: 100%;
				width: 100%;
			}
			.bg {
				max-width: unset;
				transform: unset;

				max-height: 10rem;
				width: 120%;
				bottom: 0;
				bottom: 10rem;
				transform: rotate(-3deg) translateX(-10%);
			}
		}

		@media (max-width: 550px) {
			img {
				max-height: 42rem;
				max-width: 35rem;
			}

			.bg {
				display: none;
			}
		}
	}
	.brand {
		grid-area: brand;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		gap: 1.4rem;

		img {
			height: 40px;
		}

		.brand-title {
			font-size: 2.4rem;
			font-weight: 400;
			color: $text;

			.thin {
				font-weight: 200;
			}
		}

		@media (max-width: 880px) {
			position: absolute;
			top: 2rem;
			right: 3rem;
			writing-mode: vertical-rl;
			opacity: 0.5;

			img {
				transform: rotate(80deg);
			}
		}

		@media (max-width: 550px) {
			display: none;
		}
	}
</style>
