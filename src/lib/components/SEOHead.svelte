<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { getSEOHead } from '$lib/utils/seo';
	import type { SEOData } from '$lib/utils/seo';

	export let seoData: SEOData;

	$: seo = getSEOHead(seoData);

	// Use provided canonical or construct from current page
	// During prerender, $page.url.origin might be a placeholder, so we use SITE_URL
	$: baseUrl =
		browser && $page.url.origin !== 'http://sveltekit-prerender'
			? $page.url.origin
			: 'https://akillu.com';
	$: canonicalUrl = seoData.canonical || baseUrl + $page.url.pathname;
	$: ogImageUrl = seo.ogImage.startsWith('http') ? seo.ogImage : baseUrl + seo.ogImage;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	{#if seo.keywords}
		<meta name="keywords" content={seo.keywords} />
	{/if}
	{#if seo.noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow" />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={seo.ogType} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Akillu Solutions" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>
