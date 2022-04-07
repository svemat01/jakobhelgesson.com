<script lang="ts">
    export let title: string;
    export let icon: string;

    export let style: string = '';
</script>

<article {style}>
    <div class="main">
        <img class="icon" src={icon} alt={title}>
        <h2>
            {title}
        </h2>
    </div>
</article>

<style lang="scss">
    article {
        /* max-width: 25rem; */
        /* margin-top: 2rem; */
        padding: 1.25rem 1.5rem;

        background: $gray-color;

        border-radius: 1.5rem;

        display: flex;
        flex-direction: column;

        // --------------------------------------------------

        .main {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;

            h2 {
            color: $light-color;
            font-size: 2rem;
            font-weight: 600;

            width: fit-content;

            &:hover {
                filter: brightness(0.8);
            }
        }
        }

        // --------------------------------------------------

        .content {
            font-size: 1.6rem;
            line-height: 2.5rem;

            margin-top: 0.3rem;

            flex: 1;
        }
    }

    .icon {
        aspect-ratio: initial;
        max-width: 3.5rem;

        margin-right: 1rem;
    }
</style>