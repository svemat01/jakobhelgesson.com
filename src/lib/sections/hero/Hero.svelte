<script lang="ts">
	import jakob from '$lib/assets/jakob.png';
	import Triangles from './Triangles.svelte';
</script>

<section class="hero">
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

			<Triangles />
		</div>

		<div class="portrait">
			<div class="bg" />
			<img src={jakob} alt="" />
		</div>
	</div>
</section>

<style lang="scss">
	.hero {
		position: relative;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		gap: 5rem;

		height: 865px;
		width: calc(100% - 6rem);
		margin-inline: auto;

		.title {
			margin-top: 16rem;

			display: flex;
			flex-direction: column;

			h1 {
				font-size: 8.2rem;
				font-weight: 600;
				color: $white;

				.fancy {
					color: $green;
				}
			}

			h2 {
				font-size: 3.2rem;
				font-weight: 400;
				color: $light-gray;
			}
		}

		.portrait {
			position: relative;
			max-width: 500px;
			height: 100%;
			aspect-ratio: 1/1;

			img {
				position: absolute;
				right: 3%;
				bottom: 0;
			}

			.bg {
				position: absolute;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;

				background-color: $green;

				width: 400px;
				height: 100%;
			}
		}

		@media screen and (max-width: 1200px) {
			gap: 2rem;

			height: 600px;

			.title {
				margin-top: 8rem;

				h1 {
					font-size: 7.2rem;
				}

				h2 {
					font-size: 2.8rem;
				}
			}

			.portrait {
				width: 400px;

				img {
					width: 400px;
					right: 5%;
				}

				.bg {
					width: 300px;
				}
			}
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;
			align-items: center;

			height: auto;

			.title {
				margin-top: 4rem;

				h1 {
					font-size: 7.2rem;
				}

				h2 {
					font-size: 2.8rem;
				}
			}

			.portrait {
				display: contents;

				img {
					position: static;
					width: 100%;
					max-width: 45rem;
					max-height: 60rem;

					object-fit: cover;
					object-position: top;
				}

				.bg {
					display: none;
				}
			}
		}

		@media screen and (max-width: 550px) {
			.title {
				h1 {
					font-size: 5.2rem;
				}

				h2 {
					font-size: 2.2rem;
				}
			}

			.portrait {
				img {
					max-width: 35rem;
					max-height: 45rem;
				}
			}
		}

		@media screen and (max-height: 550px) {
			.title {
				height: 90vh;
				margin-top: 2rem;
			}
		}
	}
</style>
