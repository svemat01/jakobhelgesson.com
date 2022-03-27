<script lang="ts">
    import SectionTitle from '$components/SectionTitle.svelte';

    import PostCard from './BlogPosts/PostCard.svelte';

    const baseurl = 'https://www.helgesson.dev';

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
            path: 'https://helgesson.dev/blog/first-post'
        },
        {
            title: 'The second post',
            date: '2020-01-02',
            description: 'This is the second post',
            path: 'https://helgesson.dev/blog/second-post'
        },
        {
            title: 'The third post',
            date: '2020-01-03',
            description: 'This is the third post',
            path: 'https://helgesson.dev/blog/third-post'
        }
    ];

    // fetch(baseurl + '/posts.json', {mode: 'no-cors'})
    //     .then(res => {
    //         console.log({res});
    //         return res.text();
    //     })
    //     .then(text => {
    //         console.log({text});
    //         const json = JSON.parse(text);
    //         console.log({json});
    //         return json;
    //     })
    //     .then(data => {
    //         console.log({data});
    //         if (!data || !Array.isArray(data)) {
    //             return;
    //         }

    //         data.forEach(post => {
    //             posts.push({
    //                 title: post.title,
    //                 date: post.date,
    //                 description: post.description,
    //                 path: baseurl + post.path,
    //             });
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
</script>

<section id="blogposts">
    <SectionTitle name="Blog Posts" />
    <div class="posts">
        {#each posts as post, i}
            <PostCard
                title={post.title}
                description={post.description}
                date={post.date}
                path={post.path}
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
