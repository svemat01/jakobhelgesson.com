<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
    import PrimarySkill from './PrimarySkill.svelte';
    import Skill from './Skill.svelte';

    import { primarySkills, skills } from '$lib/data/skills';

</script>


<section>
    <SectionHeader header="Skills" subHeader="Discover my strong suits" --margin-bottom="4rem" />

    <div class="primarySkills">
        {#each primarySkills as skill}
            <PrimarySkill {...skill} />
        {/each}
    </div>

    <div class="subSkills">
        {#each Object.entries(skills) as [category, _skills] }
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
</section>

<style lang="scss">
    section {
		display: flex;
        flex-direction: column;
        align-items: center;
    }

    .primarySkills {
        display: flex;
        gap: 10rem;
    }

    .subSkills {
        /* display: flex; */
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        gap: 12rem;

        margin-top: 6rem;

        .category {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            span {
                font-size: 2.8rem;
                font-weight: 400;
                color: $gray-900;
                text-align: center;
            }

            .skills {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
        }
    }
</style>