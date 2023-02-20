<script lang="ts">
	import labsIcon from '../assets/labs-icon.svg';
</script>

<nav>
	<div class="container">
		<a href="/" class="logo">
			<img src={labsIcon} alt="logo" />
			<span class="title">Helgesson <span class="thin">Labs</span></span>
		</a>
		<div class="links">
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		background-color: $dark-gray;
        width: 100%;

        position: sticky;
        top: 0;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: 58px;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 1.4rem;

		img {
			height: 40px;
		}

		.title {
			font-size: 2.4rem;
			font-weight: 400;
			color: $white;

            .thin {
                font-weight: 200;
            }
		}
	}

    .links {
        display: flex;
        gap: 2.4rem;

        a {
            font-size: 2rem;
            font-weight: 400;
            color: $white;
        }
    }
</style>
