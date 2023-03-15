<script>
	import Diagonal from '$lib/components/Diagonal.svelte';
	import BlogPosts from '$lib/sections/blog-posts/BlogPosts.svelte';
	import Hero from '$lib/sections/hero/Hero.svelte';
	import LatestWorks from '$lib/sections/latest-works/LatestWorks.svelte';
	import Me from '$lib/sections/me/Me.svelte';
	import Skills from '$lib/sections/skills/Skills.svelte';
</script>

<Hero />

<Diagonal --skew-y="-2deg">
	<Me />
</Diagonal>

<LatestWorks />

<BlogPosts />

<Diagonal --skew-y="2deg" --padding-top="6rem" >
	<Skills />
</Diagonal>
