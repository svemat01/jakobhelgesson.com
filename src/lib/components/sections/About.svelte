<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'

    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

    import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="aboutSection" id="about">
    <section class="item">
        <h1>Who am I?</h1>

        <p>I’m Jakob Helgesson, a 17 year old super stack developer.</p>
        <p>
            But what is a super stack developer? A developer like myself work with
            everything in the stack, whether that be building the frontend, developing
            the backend or deploying the whole stack to a cloud provider or custom
            hardware. You could say that we work with both the software and the hardware
            and all the inbetween.
        </p>
    </section>
    <div class="item">
        <h1>Contact me!</h1>
        <p>
            <Fa icon={faEnvelope} />
            <a href="mailto:jakob@helgesson.dev">jakob@helgesson.dev</a>
        </p>
        <p>
            <Fa icon={faGithub} />
            <a href="https://github.com/svemat01" target="_blank">@Svemat01</a>
        </p>
        <p>
            <Fa icon={faTwitter} />
            <a href="https://twitter.com/svemat01" target="_blank">@Svemat01</a>
        </p>
        <p>
            <Fa icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/jakobhelgesson/" target="_blank">/in/jakobhelgesson</a>
        </p>
    </div>
</section>


<style lang="scss">
    .aboutSection {
        display: flex;
        justify-content: stretch;
        flex-wrap: wrap;
        gap: 3rem;
    }

    .item {
        background-color: $gray-color;
        flex-grow: 1;
        border-radius: 1.5rem;
        padding: 2rem;
        max-width: 60%;

        h1 {
            color: $accent-color;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            display: flex;
            gap: 1rem;
            align-items: center;

            a {
                color: $light-color;

                &:hover {
                    color: $accent-color;
                }
            }
        }

        @media screen and (max-width: 1100px) {
            max-width: 100%;
        }
    }
</style>
