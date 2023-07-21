<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<Card --card-padding="0" --card-grid-area='ido'>
	<h1>What I Do</h1>
	<div class="list">
		<div class="item">
			<h2>Frontend</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam ullam,
				reprehenderit ipsa ratione deleniti quaerat dolore architecto vitae sequi.
			</p>
		</div>
		<div class="item">
			<h2>Backend</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam ullam,
				reprehenderit ipsa ratione deleniti quaerat dolore architecto vitae sequi.
			</p>
		</div>
		<div class="item">
			<h2>DevOps</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam ullam,
				reprehenderit ipsa ratione deleniti quaerat dolore architecto vitae sequi.
			</p>
		</div>
	</div>
</Card>

<style lang="scss">
	h1 {
		font-size: 1.8rem;
		font-weight: 600;
		padding: 1.2rem 1.6rem;
		border-bottom: 1px solid #ffffff14;
	}
</style>
