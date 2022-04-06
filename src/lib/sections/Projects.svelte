<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';
    import { projects } from '$lib/data/projects';
    import ProjectCard from '$sections/Projects/ProjectCard.svelte';

    let selectedProject = -1;
</script>

<section id="projects">
    <SectionTitle name="Projects" />
    <div class="projects">
        {#each projects as project, i}
            <ProjectCard
                name={project.name}
                description={project.description}
                path={project.path}
                langs={project.langs}
                expandedData={project.expandedData}
                expanded={selectedProject === i}
                onClick={() => {
                    if (selectedProject === i) {
                        selectedProject = -1;
                    } else {
                        selectedProject = i;
                    }
                }}
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
