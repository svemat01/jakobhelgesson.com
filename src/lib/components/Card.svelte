<script lang="ts">
    let clazz: string = "";
    export { clazz as class };
</script>

<section class={clazz}>
    <slot />
</section>

<style lang="scss">
    section {
        background-color: $gray-color;
        flex-grow: 1;
        border-radius: 1.5rem;
        padding: 2rem;
        max-width: 60%;

        :global(h1) {
            color: $accent-color;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        :global(p) {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        @media screen and (max-width: 1100px) {
            max-width: 100%;
        }
    }
</style>
