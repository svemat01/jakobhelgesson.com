<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
import { getPosts } from '$lib/data/blogPosts.js';
	import { createQuery } from '@tanstack/svelte-query';
	import Post from './Post.svelte';

	const postsQuery = createQuery({
		queryKey: ['posts'],
		queryFn: () => getPosts(3),
		refetchOnWindowFocus: false
	});
</script>

<section class="container">
	<SectionHeader header="Blog Posts" subHeader="Explore Guides & Discussions" --text-align="left" />

	{#if $postsQuery.isLoading}
		<p>Loading...</p>
	{:else if $postsQuery.isError}
		<p>Error: {$postsQuery.error.message}</p>
	{:else if $postsQuery.isSuccess}
		<div class="posts">
			{#each $postsQuery.data as post}
				<Post
					title={post.title}
					description={post.description}
					author={post.author}
					date={post.date}
					readTime={post.minutesRead}
				/>
			{/each}
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		margin-top: 8rem;
		margin-bottom: 14rem;
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
