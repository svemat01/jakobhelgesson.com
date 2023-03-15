<script lang="ts">
	export let title: string;
	export let description: string;
	export let author: string;
	export let date: string;
	export let minutesRead: string;
	export let slug: string;
</script>

<div class="post">
	<!-- svelte-ignore security-anchor-rel-noreferrer -->
	<a href="https://blog.helgesson.dev/{slug}" target="_blank" rel="noopener" >
		<h2 class="title">
			{title}
		</h2>
		<p class="description">
			{description}
		</p>
		<div class="meta">
			<div class="bar" />
			<div class="author">
				{#each author.split(' ') as word}
					{word}
					<br />
				{/each}
			</div>
			<div class="right">
				<div class="read-time">
					{minutesRead}
				</div>
				<div class="date">
					{date}
				</div>
			</div>
		</div>
	</a>
</div>

<style lang="scss">
	.post {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		background: $light-gradient;
		padding: 1.6rem 1.9rem;
		border-radius: 1rem;

		min-height: 150px;

		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		transition: all 0.2s ease-in-out;

		&:hover {
			transform: translateY(-0.5rem);
			box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
		}
	}

	a {
		display: contents;
	}

	.title {
		font-size: 2.4rem;
		font-weight: 500;
	}

	.description {
		font-size: 2rem;
		font-weight: 300;
		
		margin-bottom: 1rem;
	}

	.meta {
		display: flex;
		align-items: center;

        margin-top: auto;

		.bar {
			width: 3px;
			height: 100%;
			background-color: $green;
			display: inline-block;
			margin-right: 0.75rem;
		}

		.author {
			display: flex;

			font-size: 2rem;
		}

		.right {
			font-size: 1.8rem;
			font-weight: 200;
			text-align: right;

			margin-left: auto;
		}
	}
</style>
