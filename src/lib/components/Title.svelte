<script lang="ts">
    export let preTitle: string;
    export let title: string;
    export let subTitle: string = undefined
</script>

<div>
    <h1>
        {preTitle}<br />
        <span>{title}</span>
    </h1>
    {#if subTitle}
        <h2>{subTitle}</h2>
    {/if}
</div>

<style lang="scss">
    div {
        width: 100%;
    }

    h1 {
        font-size: 2.8rem;
        font-weight: 600;
        margin: 0;
        padding: 0;

        /* margin-left: 38rem; */
        margin-top: 5.5rem;

        span {
            color: #34d399;
            font-size: 6rem;
        }
    }

    h2 {
        font-size: 2.3rem;
        font-weight: 500;
        margin: 0;
        padding: 0;

        /* margin-left: 40rem; */
        margin-left: 2rem;
    }
</style>
