<script lang="ts">
	import labsIcon from '../assets/labs-icon.svg';
</script>

<footer>
	<div class="container">
		<div class="logo">
			<img src={labsIcon} alt="Helgesson Labs Logo" />
			<span class="title">Helgesson <span class="thin">Labs</span></span>
		</div>
		<!-- <div class="links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div> -->
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: $gray-350;
		width: 100%;
		height: 13rem;

		margin-top: 10rem;

		padding: 2rem 0;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;

		max-width: 1200px;
		width: 100%;

		margin: 0 auto;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 1.4rem;

		.title {
			font-size: 2.4rem;
			font-weight: 400;
			color: $gray-900;

			.thin {
				font-weight: 200;
			}
		}

		img {
			height: 40px;
		}
	}
</style>
