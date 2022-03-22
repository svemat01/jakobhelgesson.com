<script lang="ts">
    import Container from '$components/Container.svelte';
    import Projects from '$components/sections/Projects.svelte';
    import NavBar from '$components/NavBar.svelte';
    import SmallerContainer from '$components/SmallerContainer.svelte';

    import Intro from '$components/sections/Intro.svelte';
    import About from '$components/sections/About.svelte';
    
    import BackgroundShapes from '$components/BackgroundShapes.svelte';
import BlogPosts from '$components/sections/BlogPosts.svelte';
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
