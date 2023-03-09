<script lang="ts">
	import Post from './Post.svelte';

	const posts: {
		title: string;
		description: string;
		author: string;
		date: string;
		readTime: string;
	}[] = [
		{
			title: 'Laptop audio on Linux',
			description: 'Setting up the X1 Carbon with Dolby-ish surround sound.',
			author: 'Jakob Helgesson',
			date: 'Dec 26, 2022',
			readTime: '3 min read'
		},
		{
			title: 'Laptop audio on Linux',
			description: 'Setting up the X1 Carbon with Dolby-ish surround sound.',
			author: 'Jakob Helgesson',
			date: 'Dec 26, 2022',
			readTime: '3 min read'
		},
		{
			title: 'Laptop audio on Linux',
			description: 'Setting up the X1 Carbon with Dolby-ish surround sound.',
			author: 'Jakob Helgesson',
			date: 'Dec 26, 2022',
			readTime: '3 min read'
		},
		{
			title: 'Laptop audio on Linux',
			description: 'Setting up the X1 Carbon with Dolby-ish surround sound.',
			author: 'Jakob Helgesson',
			date: 'Dec 26, 2022',
			readTime: '3 min read'
		},
		{
			title: 'Laptop audio on Linux',
			description: 'Setting up the X1 Carbon with Dolby-ish surround sound.',
			author: 'Jakob Helgesson',
			date: 'Dec 26, 2022',
			readTime: '3 min read'
		}
	];
</script>

<section>
	<h2>Blog Posts</h2>
	<h3>Explore Guides & Discussions</h3>

	<div class="posts">
		{#each posts as post}
			<Post
				title={post.title}
				description={post.description}
				author={post.author}
				date={post.date}
				readTime={post.readTime}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;

		max-width: 1300px;
		width: 100%;

		margin-inline: auto;
		margin-top: 8rem;
		padding: 2rem 0;
	}

	h2 {
		font-size: 2.4rem;
		font-weight: 400;

		color: $gray-800;

		margin-bottom: 1.6rem;
	}

	h3 {
		font-size: 3.6rem;
		font-weight: 500;

		max-width: 75rem;

		margin-bottom: 3rem;
	}

    .posts {
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 1fr));
        grid-gap: 3rem 5rem;
        width: 100%;
    }
</style>
