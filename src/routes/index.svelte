<script lang="ts">
    import BackgroundShapes from '$components/BackgroundShapes.svelte';
    import Container from '$components/Container.svelte';
    import NavBar from '$components/NavBar.svelte';
    import SmallerContainer from '$components/SmallerContainer.svelte';

    import About from '$modules/Homepage/About.svelte';
    import BlogPosts from '$modules/Homepage/BlogPosts/BlogPosts.svelte';
    import Intro from '$modules/Homepage/Intro.svelte';
    import Projects from '$modules/Homepage/Projects/Projects.svelte';
    import Skills from '$modules/Homepage/Skills.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<BackgroundShapes />

<SmallerContainer>
    <Intro />
</SmallerContainer>

<Container>
    <div class="mainContainerWrapper">
        <NavBar />

        <div class="mainContainer">
            <About />
            <Projects />
            <BlogPosts />
            <Skills />
        </div>
    </div>
</Container>

<style lang="scss">
    .mainContainerWrapper {
        margin-top: 2rem;
        width: 100%;
        /* height: 40vh; */
        display: flex;
    }

    .mainContainer {
        width: calc(100% - 25rem);
        padding-left: 3rem;

        @media screen and (max-width: 1100px) {
            width: 100%;
            padding-left: 0;
        }
    }
</style>
