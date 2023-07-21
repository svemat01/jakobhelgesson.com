<script lang="ts">
    export let name: string;
    export let img: string;
    export let color: string;
</script>

<div>
    <p class="name">{name}</p>
    <img src={img} alt="{name} Icon">
    <div class="bar" style:--color={color} />
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .name {
        font-size: 2.4rem;
        font-weight: 400;
        color: $gray-800;
    }

    img {
        width: 64px;
        height: 64px;
        object-fit: contain;
    }

    .bar {
        width: 120px;
        height: 8px;
        border-radius: 4px;
        background-color: var(--color);
    }
</style>