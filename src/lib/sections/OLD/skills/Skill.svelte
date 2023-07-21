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
        font-size: 2.4rem;
        font-weight: 300;
        color: $gray-800;
    }

    img {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }
</style>