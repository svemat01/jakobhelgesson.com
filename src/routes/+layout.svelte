<script lang="ts">
	import '../app.scss';
	import '@fontsource/inter'
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Navbar />

<slot />

<Footer />
