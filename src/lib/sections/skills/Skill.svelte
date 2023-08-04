<script lang="ts">
    export let name: string;
    export let img: string;
</script>

<div>
    <img src={img} alt="{name} Icon">
    <p class="name">{name}</p>
</div>

<style lang="scss">
    div {
        display: flex;
        gap: 1.5rem;
    }

    .name {
        font-size: 1.8rem;
        font-weight: 400;
        color: $text-dimmed;
    }

    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
</style>