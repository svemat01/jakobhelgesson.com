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
			{#each $postsQuery.data as { title, description, author, date, minutesRead, slug }}
				<Post
					{title}
					{description}
					{author}
					{date}
					{minutesRead}
					{slug}
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

	.posts {
		display: grid;
		grid-template-columns: repeat(3, minmax(300px, 1fr));
		grid-gap: 3rem 5rem;
		width: 100%;
	}
</style>
