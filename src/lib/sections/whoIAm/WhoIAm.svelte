<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<Card --card-grid-area="whoiam">
	<span slot="title">Who I am</span>
	<h2>A Passionate Full-Stack Developer and DevOps Specialist</h2>
	<p>
		From a young age, I knew that my passion for software engineering would one day become my
		career. As a full-stack developer and DevOps specialist, I've had the pleasure of working on a
		wide range of projects over the years, ranging from personal endeavors to professional
		collaborations.
	</p>
</Card>

<style lang="scss">
	/* h1 { */
		/* padding: 1rem 1.6rem; */
		/* make a box shadow as a sharp 1px bottom border */
		/* box-shadow: 0 1px 1px 0 #fefdf940; */
		/* font-size: 2rem;
		font-weight: 500;

        padding: $card-padding;
		border-bottom: $card-divider;
	} */

	h2 {
		font-size: 1.8rem;
		font-weight: 500;
		color: $primary-dimmed;
		margin-bottom: 0.25rem;
	}

	p {
        /* font-size: 1.6rem;
        opacity: 0.8;
        line-height: 1.25;
		padding: $card-padding; */
    }
</style>
