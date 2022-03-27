<script lang="ts">
    import Container from '$components/Container.svelte';
    import SmallerContainer from '$components/SmallerContainer.svelte';

    import BackgroundShapes from '$components/BackgroundShapes.svelte';
    import Title from '$components/Title.svelte';
    import Card from '$components/Card.svelte';
</script>

<BackgroundShapes />

<SmallerContainer>
    <Title preTitle="Welcome to the secret page for " title="Rönnegymnasiet" subTitle="" />
</SmallerContainer>

<Container>
    <div class="mainContainer">
        <Card class="bunet">
            <h1>BUNet-PSK</h1>
            <p>S0xrYTmIrInBEZCvxKCzspwY0nlJAPAv1ffg6aKF</p>
        </Card>
    </div>
</Container>

<style lang="scss">
    .mainContainer {
        width: calc(100% - 25rem);
        padding-left: 3rem;
        margin-top: 3rem;

        @media screen and (max-width: 1100px) {
            width: 100%;
            padding-left: 0;
        }
    }

    /* :global(.bunet) {
        background-color: aqua !important; 
    } */
</style>
