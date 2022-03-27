<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';
    import IconCard from '$lib/components/IconCard.svelte';

    import reactIcon from '$lib/assets/icons/react.png';

    import typescriptIcon from '$lib/assets/icons/typescript.svg';

    import gitIcon from '$lib/assets/icons/git.svg';

    const skills: {
        technologies: {
            title: string;
            description: string;
            icon: string;
        }[];
        languages: {
            title: string;
            description: string;
            icon: string;
        }[];
        tools: {
            title: string;
            description: string;
            icon: string;
        }[];
    } = {
        technologies: [
            {
                title: 'React',
                description:
                    "I've used React for the frontend for a number of projects, including a printer monitor for my school's IT Admins",
                icon: reactIcon
            },

        ],
        languages: [
            {
                title: 'TypeScript',
                description:
                    "I've used TypeScript for the frontend of my projects, and I've used it for the backend of my projects as well.",
                icon: typescriptIcon
            }
        ],
        tools: [
            {
                title: 'Git',
                description:
                    "I've used Git for version control for my projects.",
                icon: gitIcon
            }
        ]
    };

    let selectedItem = -1;
</script>

<section id="technologies">
    <SectionTitle name="Technologies" />
    <div class="items">
        {#each skills.technologies as tech, i}
            <IconCard
            title={tech.title}
            description={tech.description}
            icon={tech.icon}
            expanded={selectedItem === i + 10}
            onClick={() => {
                if (selectedItem === i + 10) {
                    selectedItem = -1;
                } else {
                    selectedItem = i + 10;
                }
            }} />
        {/each}
    </div>
</section>

<section id="tools">
    <SectionTitle name="Tools" />
    <div class="items">
        {#each skills.tools as tool, i}
            <IconCard
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            expanded={selectedItem === i + 30}
            onClick={() => {
                if (selectedItem === i + 30) {
                    selectedItem = -1;
                } else {
                    selectedItem = i + 30;
                }
            }} />
        {/each}
    </div>
</section>

<section id="languages">
    <SectionTitle name="Languages" />
    <div class="items">
        {#each skills.languages as tech, i}
            <IconCard
            title={tech.title}
            description={tech.description}
            icon={tech.icon}
            expanded={selectedItem === i + 20}
            onClick={() => {
                if (selectedItem === i + 20) {
                    selectedItem = -1;
                } else {
                    selectedItem = i + 20;
                }
            }} />
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        margin-top: 2rem;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 2rem;
        margin-top: 1.2rem;
    }
</style>
