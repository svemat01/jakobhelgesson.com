<script lang="ts">
	import { onMount } from 'svelte';

	import labsIcon from '../assets/labs-icon.svg';
	import MenuButton from './MenuButton.svelte';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About',
			href: '/about'
		},
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (e: MediaQueryListEvent) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<nav>
	<div class="container">
		<div class="main">
			<a href="/" class="brand">
				<img src={labsIcon} alt="logo" />
				<span class="title">Helgesson <span class="thin">Labs</span></span>
			</a>
			<MenuButton active={showMobileMenu} handleClick={handleMobileIconClick} />
		</div>
		<ul class="navbar-list" class:mobile={showMobileMenu}>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	nav {
		background-color: $dark-gray;
		width: 100%;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);

		position: sticky;
		top: 0;
		z-index: 100;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		/* height: 64px; */
		min-height: 64px;
		max-width: 1200px;
		width: calc(100% - 4rem);
		margin: 0 auto;

		.main {
			display: contents;
		}
	}

	.brand {
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

	.navbar-list {
		display: flex;
		gap: 2.4rem;

		a {
			font-size: 2rem;
			font-weight: 400;
			color: $white;
		}
	}

	@media screen and (max-width: 900px) {
		.container {
			flex-direction: column;
			align-items: center;

			.main {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;

				padding-top: 1.2rem;
				padding-bottom: 0.8rem;
			}
		}

		.brand {
			margin-left: auto;
		}

		.navbar-list {
			display: none;
			flex-direction: column;
			align-items: center;
			gap: 1.6rem;

			margin-top: 1rem;
			margin-bottom: 1.6rem;

			width: 100%;

			&.mobile {
				display: flex;
			}
		}
	}
</style>
