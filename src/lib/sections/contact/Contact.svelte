<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<Card --card-grid-area="contact">
	<h1>
		<!-- <div class="icon"><FaBook /></div> -->
		Contact
	</h1>
	<!-- Make a list of email discord twitter github using ul li -->
	<div class="contact-list">
		<a href="mailto:jakob@helgesson.dev" target="_blank" rel="noreferrer">
			<div class="icon"><FaEnvelope /></div>
			<span> jakob@helgesson.dev </span>
		</a>
		<a href="https://discord.gg/2YJY7Q6" target="_blank" rel="noreferrer">
			<div class="icon"><FaDiscord /></div>
			<span>jabh</span>
		</a>
		<a href="https://github.com/svemat01" target="_blank" rel="noreferrer">
			<div class="icon"><FaGithub /></div>
			<span>svemat01</span>
		</a>
	</div>
</Card>

<style lang="scss">
	h1 {
		font-size: 2.4rem;
		font-weight: 400;

		margin-bottom: 1rem;
	}

	.contact-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		/* padding: 1.4rem 1.6rem; */

		font-size: 1.8rem;

		a {
			display: flex;
			align-items: center;
			gap: 0.65rem;

			.icon {
				color: $accent;
				opacity: 0.5;
				width: 2.2rem;
				height: 2.2rem;
				transition: opacity 0.2s ease-in-out;
			}

			span {
				opacity: 0.8;
				transition: opacity 0.2s ease-in-out;
			}

			&:hover {
				.icon {
					opacity: 1;
				}

				span {
					opacity: 1;
				}
			}
		}
	}
</style>
