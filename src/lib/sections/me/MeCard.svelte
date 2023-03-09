<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let title: string;
	export let text: string;
	export let icon: typeof SvelteComponent;
    export let active = false;
</script>

<div class="card" class:active on:click on:keydown >
	<div class="text">
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
	<div class="icon">
		<svelte:component this={icon} />
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		justify-content: space-between;
		flex: 1;
		gap: 1rem;

		background: $dark-gradient;
		padding: 2.5rem;
        border-radius: 1rem;

        cursor: pointer;

        filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5));
        
        transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;

        &:hover {
            filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5));
            transform: translateY(-0.25rem);
        }

        &.active {
            /* Stronger dropshadow on active than hover */
            /* filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)); */
            filter: drop-shadow(0.75rem 0.75rem 1.5rem rgba(0, 0, 0, 0.5));
            transform: translateY(-0.5rem);

            h3 {
                color: $green;
            }
        }
	}

	.icon {
		/* position: absolute; */
		top: 1rem;
		right: 2rem;

		width: 4.8rem;
		height: 4.8rem;

        color: $green;
	}

	.text {
		flex: 1;

		h3 {
			font-size: 2.8rem;
			font-weight: 400;

            margin-bottom: 0.3rem;

            transition: color 0.2s ease-in-out;
		}

		p {
			font-size: 2rem;
			font-weight: 300;
			color: $gray-800;
		}
	}
</style>
