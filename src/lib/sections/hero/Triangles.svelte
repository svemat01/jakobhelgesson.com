<div class="triangles">
	{#each Array(4) as _, index}
		<div class="triangle">
			<svg viewBox="0 0 201 179">
				<path
					d="M83.1865 10.9395C90.8876 -2.37767 110.112 -2.37767 117.814 10.9395L197.645 148.988C205.355 162.321 195.733 179 180.331 179H20.669C5.26678 179 -4.35495 162.321 3.35548 148.988L83.1865 10.9395Z"
					style:fill="var(--color, #FFFFFF)"
				/>
				<!-- <path
					d="M82.7011 13.1425C93.3576 -3.49946 117.672 -3.49946 128.328 13.1425L206.003 134.446C217.549 152.477 204.6 176.144 183.189 176.144H27.8396C6.42899 176.144 -6.51954 152.477 5.02621 134.446L82.7011 13.1425Z"
					style:fill="var(--color, #FFFFFF)"
				/> -->
			</svg>
		</div>
	{/each}
</div>

<style lang="scss">
	.triangles {
		@media screen and (min-width: 900px) and (max-width: 1599px) {
			position: static;
			height: 64px;
			width: 100%;

			display: flex;
			gap: 1rem;

			margin-top: 2.5rem;

			&:hover:has(.triangle:hover) {
				.triangle {
					transform: translateX(2rem);
				}
			}
		}

		@media screen and (min-width: 1600px) {
			position: absolute;
			top: 0;
			left: 50%;

			transform: translate(-50%, 0);

			width: 100%;
			max-width: 1200px;
			height: 100%;
		}
	}

	.triangle {
		display: none;

		transition: transform 0.4s ease-in-out;

		@media screen and (min-width: 900px) {
			position: static;
			display: block;
			width: 48px;
			height: fit-content;

			transform: rotate(90deg);

			&:nth-child(1) {
				--color: #37ff8b;
			}

			&:nth-child(2) {
				--color: #3772ff;
			}

			&:nth-child(3) {
				--color: #fa9f42;
			}

			&:nth-child(4) {
				--color: #ff3772;
			}
		}

		@media screen and (min-width: 1200px) {
			width: 64px;
		}

		@media screen and (min-width: 1600px) {
			position: absolute;
			&:nth-child(1) {
				display: block;

				top: 65%;
				left: -5%;
				right: auto;
				bottom: auto;

				width: 200px;
				--color: #37ff8b;

				transform: translate(-50%, -50%) rotate(-20deg);

				&:hover {
					transform: translate(-60%, -50%) rotate(-25deg) scale(1.1);
				}
			}

			&:nth-child(2) {
				display: block;

				top: 20%;
				bottom: auto;
				left: auto;
				right: -16%;

				width: 150px;
				--color: #3772ff;

				transform: translate(-50%, -50%) rotate(10deg);

				&:hover {
					transform: translate(-50%, -60%) rotate(5deg) scale(1.1);
				}
			}

			&:nth-child(3) {
				display: block;

				top: 50%;
				bottom: auto;
				left: auto;
				right: -20%;

				width: 130px;
				--color: #fa9f42;

				transform: translate(-50%, -50%) rotate(-30deg);

				&:hover {
					transform: translate(-50%, -40%) rotate(-35deg) scale(1.1);
				}
			}

			&:nth-child(4) {
				display: block;

				top: 80%;
				bottom: auto;
				left: auto;
				right: -11%;

				width: 120px;
				--color: #ff1654;

				transform: translate(-50%, -50%) rotate(-13deg);

				&:hover {
					transform: translate(-40%, -50%) rotate(-18deg) scale(1.1);
				}
			}
		}
	}
</style>
