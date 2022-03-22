<script lang="ts">
    export let name: string;
    export let description: string;
    export let path: string;
    export let lang: string;

    export let expanded = false;
    export let onClick: () => void;

    export let expandedData: {
        description: string;
    };

    export let style: string = '';
</script>

<div {style} on:click={onClick} class={expanded ? 'expanded' : ''}>
    <h2
        on:click={(e) => {
            e.preventDefault();
            location.href = path;
        }}
    >
        {name}
    </h2>
    <!-- <p class="content">{@html expanded ? expandedContent : content}</p> -->
    {#if expanded}
        <p class="content">{@html expandedData.description}</p>
    {:else}
        <p class="content">{description}</p>
    {/if}
    <p class="lang">{lang}</p>
</div>

<style lang="scss">
    div {
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

            /* grid-column: span 2;
            grid-row: span 2; */
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

        .lang {
            font-size: 1.5rem;

            width: max-content;

            padding: 0.2rem 0.5rem;
            /* margin-top: auto; */
            margin-top: 0.5rem;

            border-radius: 0.5rem;

            background: var(--bg-color, #fafafa);
            color: var(--color, $light-color);
        }
    }
</style>
