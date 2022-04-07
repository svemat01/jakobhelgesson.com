<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';
    import { projects } from '$lib/data/projects';
    import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects">
    <SectionTitle name="Projects" />
    <div class="projects">
        {#each projects as project}
            <ProjectCard
                name={project.name}
                description={project.description}
                path={project.path}
                langs={project.langs}
            />
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        margin-top: 2rem;
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 2rem;

        /* display: flex;
        gap: 2rem;
        flex-wrap: wrap; */

        margin-top: 1.2rem;
    }
</style>
