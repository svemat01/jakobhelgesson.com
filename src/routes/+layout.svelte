<script lang="ts">
	import '../app.scss';
	import '@fontsource/inter';

	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import favicon from '$lib/assets/labs-icon.svg'
	
	// import Navbar from '../lib/components/Navbar.svelte';
	// import Footer from '../lib/components/Footer.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={favicon}>
	<title>Jakob Helgesson</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<!-- <Navbar /> -->

	<slot />

	<!-- <Footer /> -->
</QueryClientProvider>
