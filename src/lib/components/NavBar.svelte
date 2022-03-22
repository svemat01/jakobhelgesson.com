<script lang="ts">
    import { navLinks } from '$data/nav';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    // onMount(() => {
    //     const sections = document.querySelectorAll("section");
    //     const navLi = document.querySelectorAll("#nav-items li a");
    //     window.onscroll = () => {
    //         let current = "";
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop;
    //             if (scrollY >= sectionTop) {
    //                 current = section.getAttribute("id");
    //                 console.log("Current:", current);
    //             }
    //         });
    //         navLi.forEach((li) => {
    //             li.classList.remove('active');
    //             if (li.classList.contains(current)) {
    //                 console.log("here");
    //                 li.classList.add('active');
    //             }
    //         });
    //     };
    // });
</script>

<nav>
    <ul id="nav-items">
        {#each navLinks as navLink}
            <li>
                <a class={$page.url.href.endsWith(navLink.to) ? `${navLink.section} active` : navLink.section} href={navLink.to}>{navLink.name}</a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    nav {
        width: 20rem;

        position: sticky;
        top: 2rem;

        height: 30rem;

        text-align: right;

        a {
            color: $disabled-color;
            font-size: 2.7rem;
            font-weight: 500;

            &.active {
                color: $accent-color;
            }
        }

        @media screen and (max-width: 1100px) {
            display: none;
        }
    }
</style>
