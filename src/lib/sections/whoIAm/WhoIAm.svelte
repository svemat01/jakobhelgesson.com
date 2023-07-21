<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<Card --card-grid-area="whoiam">
	<h1>A Passionate Full-Stack Developer and DevOps Specialist</h1>
	<p>
		From a young age, I knew that my passion for software engineering would one day become my
		career. As a full-stack developer and DevOps specialist, I've had the pleasure of working on a
		wide range of projects over the years, ranging from personal endeavors to professional
		collaborations.
	</p>
</Card>

<style lang="scss">
	h1 {
		/* padding: 1rem 1.6rem; */
		/* make a box shadow as a sharp 1px bottom border */
		/* box-shadow: 0 1px 1px 0 #fefdf940; */
		font-size: 2.4rem;
		font-weight: 400;

        margin-bottom: 1rem;
	}

	p {
        font-size: 1.8rem;
        opacity: 0.8;
        line-height: 1.25;
    }
</style>
