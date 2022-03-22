<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';
import PostCard from './BlogPosts/PostCard.svelte';

    const posts: {
        title: string;
        date: string;
        description: string;
        path: string;
    }[] = [
        {
            title: 'The first post',
            date: '2020-01-01',
            description: 'This is the first post',
            path: '/blog/first-post',
        },
        {
            title: 'The second post',
            date: '2020-01-02',
            description: 'This is the second post',
            path: '/blog/second-post',
        },
        {
            title: 'The third post',
            date: '2020-01-03',
            description: 'This is the third post',
            path: '/blog/third-post',
        },
    ];
</script>

<section id="blogposts">
    <SectionTitle name="Blog Posts" />
    <div class="posts">
        {#each posts as post, i}
            <PostCard title={post.title} description={post.description} date={post.date} path={post.path} />
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
