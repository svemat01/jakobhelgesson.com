<script>
    import Title from '$components/Title.svelte';
</script>

<div>
    <Title preTitle={"Hey there, I'm"} title={"Jakob Helgesson"} subTitle={"A Super Stack Developer"} />
    <img src="/jakobhelgesson-outline.png" alt="Me" class="image" />
</div>

<style lang="scss">
    div {
        margin-top: 4rem;
        width: 57%;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 500px) {
            display: block;
            width: 100%;

            img {
                margin-top: 2rem;
            }
        }

        img {
            height: 30rem;
        }
    }
</style>
