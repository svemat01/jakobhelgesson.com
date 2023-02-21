<script lang="ts">
	import jakob from '$lib/assets/jakob.png';
	import divider from '$lib/assets/divider.svg';
</script>

<div class="hero">
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

	<img src={divider} alt="" class="divider" />
</div>

<style lang="scss">
	.hero {
		display: flex;
		justify-content: center;
		gap: 5rem;

		height: 865px;

		position: relative;
	}

	.title {
		margin-top: 16rem;

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
		width: 500px;
		height: 100%;
        aspect-ratio: 1/1;

        img {
            position: absolute;
			right: 3%;
            bottom: 2%;
			/* margin-left: auto;
			margin-right: auto; */
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

	.divider {
		position: absolute;
		bottom: 0;
		left: 0;

		width: 100%;
	}
</style>
