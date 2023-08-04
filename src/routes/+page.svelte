<script>
	// import Diagonal from '$lib/components/Diagonal.svelte';
	// import BlogPosts from '$lib/sections/blog-posts/BlogPosts.svelte';
	// import Hero from '$lib/sections/hero/Hero.svelte';
	// import LatestWorks from '$lib/sections/latest-works/LatestWorks.svelte';
	import Me from '$lib/sections/me/Me.svelte';
	import Contact from '$lib/sections/contact/Contact.svelte';
	import IDo from '$lib/sections/iDo/IDo.svelte';
	import WhoIAm from '$lib/sections/whoIAm/WhoIAm.svelte';
	import Skills from '$lib/sections/skills/Skills.svelte';
</script>

<main>
	<Me />
	<Contact />
	<WhoIAm />
	<IDo />
	<Skills />
</main>

<style lang="scss">
	main {
		max-width: 1000px;
		width: calc(100% - 3rem);
		margin-inline: auto;
		margin-top: 5rem;
		margin-bottom: 5rem;

		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-template-rows: auto;
		grid-auto-rows: minmax(200px, auto);
		grid-template-areas:
			'me me me'
			'whoiam whoiam contact'
			'ido skills skills'
			'ido . .';

		@media (max-width: 880px) {
			grid-auto-rows: minmax(150px, auto);
			grid-template-areas:
				'me me'
				'whoiam whoiam'
				'ido contact'
				'ido .'
				'skills skills';
		}

		@media (max-width: 550px) {
			grid-template-areas:
				'me'
				'whoiam'
				'contact'
				'ido'
				'skills';
		}
	}
</style>
