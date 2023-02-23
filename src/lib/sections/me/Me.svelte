<script lang="ts">
	import MeCard from './MeCard.svelte';
	import DiCode from 'svelte-icons/di/DiCode.svelte';
	import DiDatabase from 'svelte-icons/di/DiDatabase.svelte';
	import DiTerminal from 'svelte-icons/di/DiTerminal.svelte';
	import { fly } from 'svelte/transition';
	import type { SvelteComponent } from 'svelte';

	const entries = {
		'Front-End': {
			title: 'Front-End',
			text: 'I develop smart and user-friendly interfaces using Svelte & React',
			icon: DiCode,
			card: true
		},
		'Back-End': {
			title: 'Back-End',
			text: 'Various different back-ends for your applications needs using Go or Typescript',
			icon: DiDatabase,
			card: true
		},
		DevOps: {
			title: 'DevOps',
			text: 'I can help you with your CI/CD pipelines and server management',
			icon: DiTerminal,
			card: true
		},
		default: {
			title: 'About me',
			text: "From a young age, I knew that my passion for software engineering would one day become my career. As a full-stack developer and DevOps specialist, I've had the pleasure of working on a wide range of projects over the years, ranging from personal endeavors to professional collaborations.\n\nFrom a young age, I knew that my passion for software engineering would one day become my career. As a full-stack developer and DevOps specialist, I've had the pleasure of working on a wide range of projects over the years, ranging from personal endeavors to professional collaborations.",
			icon: DiCode,
			card: false
		}
	} satisfies Record<
		string,
		{
			title: string;
			text: string;
			icon: typeof SvelteComponent;
			card: boolean;
		}
	>;

	let activeCard = 'default';

	const cardClick = (card: string) => {
		console.log({ card, activeCard });
		if (activeCard === card) {
			activeCard = 'default';
		} else {
			activeCard = card;
		}
	};
</script>

<h1>About</h1>
<section class="me">
	<div class="wid">
		<p class="intro">What I do</p>
		<div class="cards">
            {#each Object.entries(entries) as [key, value]}
                {#if value.card}
                    <MeCard
                        title={value.title}
                        text={value.text}
                        icon={value.icon}
                        active={activeCard === key}
                        on:click={() => cardClick(key)}
                    />
                {/if}
            {/each}
		</div>
	</div>
	<div class="am">
		<p class="intro">About me</p>

        {#each Object.entries(entries) as [key, value]}
            {#if activeCard === key}
                <div class="am-text" transition:fly>
                    <h2>{value.title}</h2>
                    <p class="text">{value.text}</p>
                </div>
            {/if}
        {/each}
	</div>
</section>

<style lang="scss">
	h1 {
		font-size: 4rem;
		font-weight: 500;
		margin-bottom: 2rem;

		color: $green;
		/* text-align: center; */
	}

	.me {
		display: flex;
		gap: 12rem;

		> div {
			width: 50%;
		}

		@media screen and (max-width: 1200px) {
			gap: 6rem;
		}

		@media screen and (max-width: 900px) {
			flex-direction: column-reverse;
			gap: 4rem;

			> div {
				width: 100%;
			}
		}
	}

	p.intro {
		color: $light-gray;
		font-size: 2.4rem;

		&:first-of-type {
			margin-bottom: 1.8rem;
		}
	}

	.wid {
		display: flex;
		flex-direction: column;

		.cards {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 2.5rem;

			flex: 1;
		}
	}
	.am {
		display: grid;
		grid-auto-rows: min-content;

		.intro {
			height: fit-content;
		}

		h2 {
			font-size: 4rem;
			font-weight: 500;
			margin-bottom: 1.8rem;
		}

		.am-text {
			grid-row-start: 2;
			grid-column-start: 1;
		}

		.text {
			font-size: 2rem;
			line-height: 1.5;
			margin-bottom: 2rem;

			color: $light-gray;
            white-space: pre-line
		}
	}
</style>
