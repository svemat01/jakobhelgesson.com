<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';

    import PostCard from './PostCard.svelte';
    import { formatDate } from '$lib/util/formatDate';
    import type { PostWithMeta } from '$lib/types/Post.type';

    const baseurl = 'https://blog.helgesson.dev';

    export let posts: PostWithMeta[];
</script>

<section id="blogposts">
    <SectionTitle name="Blog Posts" />
    <div class="posts">
        {#each posts as post, i}
            <PostCard
                title={post.metadata.title}
                description={post.metadata.description}
                date={formatDate(post.metadata.published)}
                path={baseurl + post.route}
            />
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        margin-top: 2rem;
    }

    .posts {
        display: flex;
        flex-direction: column;

        gap: 1.7rem;

        margin-top: 1.2rem;
    }
</style>
