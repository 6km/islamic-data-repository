<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer />
