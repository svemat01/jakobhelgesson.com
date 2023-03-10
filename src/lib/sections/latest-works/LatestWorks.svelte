<script>
	import SectionHeader from '$lib/components/SectionHeader.svelte';

</script>
<section class="lastest-works container">
	<SectionHeader header="Latest works" subHeader="Recent projects that reflect my passion for coding" />

	<div class="projects">
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione eligendi libero ullam
			atque consequatur impedit id reprehenderit reiciendis possimus dolorum consectetur qui officia
			voluptate ipsa error, officiis ut unde.
		</div>
		<div>
			Repudiandae, saepe odit? Autem possimus, earum officia consequuntur vitae harum totam illo
			perspiciatis officiis hic fugiat consectetur saepe error ea quibusdam modi corporis tempore.
			Nam similique ut numquam facere nesciunt.
		</div>
		<div>
			Nostrum error dolor saepe esse aut illo? Reprehenderit esse assumenda, minima incidunt autem
			itaque nesciunt quis dolore. Consequuntur nihil modi recusandae fugit, voluptatem ullam
			voluptate nesciunt quisquam. Ipsa, a error?
		</div>
	</div>
</section>

<style lang="scss">
	.lastest-works {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

        margin-top: 4rem;
		padding: 2rem 0;

		h2 {
			font-size: 2.4rem;
			font-weight: 400;

			color: $gray-800;

			margin-bottom: 1.6rem;
		}

		h3 {
			font-size: 3.6rem;
			font-weight: 500;
			text-align: center;

			max-width: 75rem;

			margin-bottom: 5rem;
		}

		.projects {
			display: grid;
			grid-template-columns: repeat(3, minmax(300px, 1fr));
			grid-gap: 1rem;
			width: 100%;

			div {
				background-color: $gray-300;
				border-radius: 0.4rem;
				padding: 2rem;

				font-size: 2rem;
			}
		}
	}
</style>
