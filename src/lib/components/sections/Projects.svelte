<script lang="ts">
    import ProjectCard from '$components/sections/Projects/ProjectCard.svelte';
    import SectionTitle from '$components/SectionTitle.svelte';

    const projects: {
            name: string;
            description: string;
            path: string;
            lang: {
                name: string;
                color: string;
            };
            expandedData: {
                description: string;
            };
        }[] = [
        {
            name: '@lvksh/logger',
            description: 'Zero dependency, lightweight, blazing fast customizable logging library',
            path: 'https://www.npmjs.com/package/@lvksh/logger', 
            lang: {
                name: 'typescript',
                color: '#2563EB'
            },
            expandedData: {
                description: 'It\'s a project that me and the team at LVKSH have been working on for the past 6 months.<br><br>It is a zero dependency, blazing fast, customizable logging library. It is designed to be used in any project, and is easy to use. It is also easy to extend and customize. It is also easy to use with other logging libraries.',
            }
        },
        {
            name: 'Scyllo',
            description: 'The Cassandra/Scylla library you didn\'t want but got anyways.',
            path: 'https://www.npmjs.com/package/scyllo',
            lang: {
                name: 'typescript',
                color: '#2563EB'
            },
            expandedData: {
                description: 'd',
            }
        },
    ];

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
                lang={project.lang.name}
                expandedData={project.expandedData}
                --bg-color={project.lang.color}
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
        margin-top: 1.2rem;
    }
</style>
