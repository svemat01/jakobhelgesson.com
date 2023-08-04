<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Skill from './Skill.svelte';

	import { skills } from '$lib/data/skills';
</script>

<Card --card-grid-area="skills">
	<span slot="title">My Strong suits & Skills</span>
	<div class="rootSkills">
		{#each Object.entries(skills) as [category, _skills]}
			<div class="category">
				<span>{category}</span>
				<div class="skills">
					{#each _skills as skill}
						<Skill {...skill} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Card>

<style lang="scss">
	.rootSkills {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 2rem;

		.category {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			width: fit-content;

			span {
				font-size: 1.8rem;
				font-weight: 500;
				color: $primary-dimmed;
				text-align: left;
				width: 100%;
			}

			.skills {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}
		}

		@media (max-width: 550px) {
			flex-direction: column;
			align-items: center;

			.category {
				width: 100%;

				span {
					text-align: center;
				}

				.skills {
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
				}
			}
		}
	}
</style>
