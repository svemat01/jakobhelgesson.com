<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<Card --card-grid-area="ido">
	<span slot="title">What I Do</span>
	<div class="list">
		<div class="item">
			<h2>Frontend</h2>
			<p>
				I specialize in frontend development using Svelte and React, crafting engaging
				user interfaces with clean code and modern tools.
			</p>
		</div>
		<div class="item">
			<h2>Backend</h2>
			<p>
				I excel in building robust backend systems with Golang and implementing RESTful APIs for
				seamless communication with the frontend.
			</p>
		</div>
		<div class="item">
			<h2>DevOps</h2>
			<p>
				I am proficient in DevOps practices, designing efficient CI/CD pipelines and managing
				container orchestration with Kubernetes and HashiCorp Nomad.
			</p>
		</div>
	</div>
</Card>

<style lang="scss">
	.list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 2rem;
	}

	.item {
		h2 {
			font-size: 1.8rem;
			font-weight: 500;
			color: $primary-dimmed;
			margin-bottom: 0.25rem;
		}

		p {
			font-size: 1.6rem;
			line-height: 1.25;
			color: $text-dimmed;
		}
	}
</style>
