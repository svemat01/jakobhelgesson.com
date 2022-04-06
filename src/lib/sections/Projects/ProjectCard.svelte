<script lang="ts">
    export let name: string;
    export let description: string;
    export let path: string;
    export let langs: {
        name: string;
        color: string;
        textColor?: string;
    }[];

    export let expanded = false;
    export let onClick: () => void;

    export let expandedData: {
        content: string;
    };

    export let style: string = '';
</script>

<div {style} on:click={onClick} class={expanded ? 'expanded main' : 'main '}>
    <h2>
        <a href={path} target="_blank">{name}</a>
    </h2>
    <!-- <p class="content">{@html expanded ? expandedContent : content}</p> -->
    {#if expanded}
        <p class="content">{@html expandedData.content}</p>
    {:else}
        <p class="content">{description}</p>
    {/if}

    <div class="langs">
        {#each langs as lang}
            <p class="lang" style="--bg-color: {lang.color}; {lang.textColor ? `--color: ${lang.textColor}` : ''}">{lang.name}</p>
        {/each}
    </div>
</div>

<style lang="scss">
    .main {
        /* max-width: 25rem; */
        /* margin-top: 2rem; */
        padding: 1.8rem 2rem;

        background: $gray-color;

        border-radius: 1.5rem;

        display: flex;
        flex-direction: column;

        &:hover {
            cursor: pointer;
        }

        &.expanded {
            border: $accent-color solid 0.4rem;

            grid-column: 1/-1;
            /* order: -1; */
            /* grid-row: span 2; */
        }

        h2 {
            color: $accent-color;
            font-size: 2.2rem;
            font-weight: 600;

            width: fit-content;

            &:hover {
                filter: brightness(0.8);
            }
        }

        .content {
            font-size: 1.6rem;
            line-height: 2.5rem;

            margin-top: 0.3rem;

            flex: 1;
        }

        .langs {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;

            margin-top: 0.5rem;
        }
        .lang {
            font-size: 1.5rem;

            width: max-content;

            padding: 0.2rem 0.5rem;
            /* margin-top: auto; */

            border-radius: 0.5rem;

            background: var(--bg-color, #fafafa);
            color: var(--color, $light-color);
        }
    }
</style>
