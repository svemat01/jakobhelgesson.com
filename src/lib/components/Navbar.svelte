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
			href: '/#'
		},
		{
			label: 'Projects',
			href: '/#'
		},
		{
			label: 'Contact',
			href: '/#'
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

		navbarListHeight = navbarList.offsetHeight;
	});

	let timer: number;
	const onResize = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			navbarListHeight = navbarList.offsetHeight;
		}, 100) as unknown as number;
	};

	let navbarList: HTMLElement;
	let navbarListHeight = 500;
</script>

<svelte:window on:resize={onResize} />

<nav>
	<div class="container">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="main" on:click={handleMobileIconClick}>
			<p
				class="brand"
				on:click={(e) => {
					e.stopPropagation();
				}}
			>
				<img src={labsIcon} alt="logo" />
				<span class="title">Helgesson <span class="thin">Labs</span></span>
			</p>
			<MenuButton active={showMobileMenu} />
		</div>
		<ul
			class="navbar-list"
			class:mobile={showMobileMenu}
			bind:this={navbarList}
			style:--navbar-list-height="{navbarListHeight}px"
		>
			{#each navItems as item}
				<li>
					<a href={item.href} on:click={handleMobileIconClick}>{item.label}</a>
				</li>
			{/each}
		</ul>
		<div class="line" class:mobile={showMobileMenu} />
	</div>
</nav>

{#if showMobileMenu}
	<div class="overlay" on:click={handleMobileIconClick} />
{/if}

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
		/* width: calc(100% - 4rem); */
		padding: 0 2rem;
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

		li {
			width: 100%;
		}

		a {
			display: block;

			font-size: 2rem;
			font-weight: 400;

			color: $white;
			width: 100%;

			text-align: center;
		}
	}

	.line {
		position: absolute;
		top: 64px;
		transform: translateX(-100%);

		width: 100%;

		transition: all 0.3s ease-in-out;
	}

	@media screen and (max-width: 900px) {
		.container {
			flex-direction: column;
			align-items: center;

			padding: 0;

			position: relative;
			overflow-x: clip;

			.main {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 64px;

				z-index: 100;

				padding-top: 1.2rem;
				padding-bottom: 0.8rem;
				padding-inline: 2rem;

				background-color: $dark-gray;
			}
		}

		.brand {
			margin-left: auto;
		}

		.navbar-list {
			position: absolute;
			top: calc(64px - var(--navbar-list-height));

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.6rem;

			padding: 1.6rem 0;

			width: 100%;
			height: fit-content;

			background-color: $dark-gray;

			transition: all 0.3s ease-in-out;

			&.mobile {
				top: 64px;
			}
		}

		.line {
			border-top: $green 3px dashed;
			&.mobile {
				transform: translateX(0);
			}
		}

		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			background-color: rgba(0, 0, 0, 0.5);

			z-index: 99;

			transition: all 0.3s ease-in-out;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
