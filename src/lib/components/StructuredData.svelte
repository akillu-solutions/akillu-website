<script lang="ts" context="module">
	export function getStructuredData(type: string, customData: Record<string, any>, url: URL) {
		const baseUrl = url.origin;

		switch (type) {
			case 'Organization':
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'Akillu Solutions',
					url: baseUrl,
					logo: `${baseUrl}/logo/logo-full.svg`,
					description:
						'Custom software development, automation, and AI integration services for SMEs in the US, Middle East, and India.',
					contactPoint: {
						'@type': 'ContactPoint',
						telephone: '+91-123-456-7890',
						contactType: 'Customer Service',
						email: 'contact@akillu.com',
						areaServed: ['US', 'AE', 'IN'],
						availableLanguage: ['English']
					},
					sameAs: ['https://linkedin.com/company/akillu-solutions'],
					...customData
				};

			case 'WebSite':
				return {
					'@context': 'https://schema.org',
					'@type': 'WebSite',
					name: 'Akillu Solutions',
					url: baseUrl,
					description:
						'Comprehensive software solutions for SMEs: custom development, mobile apps, web portals, cloud infrastructure, AI & automation, and CRM/ERP systems.',
					publisher: {
						'@type': 'Organization',
						name: 'Akillu Solutions'
					},
					potentialAction: {
						'@type': 'SearchAction',
						target: {
							'@type': 'EntryPoint',
							urlTemplate: `${baseUrl}/search?q={search_term_string}`
						},
						'query-input': 'required name=search_term_string'
					},
					...customData
				};

			case 'Service':
				return {
					'@context': 'https://schema.org',
					'@type': 'Service',
					serviceType: customData.serviceType || 'Software Development',
					provider: {
						'@type': 'Organization',
						name: 'Akillu Solutions',
						url: baseUrl
					},
					areaServed: {
						'@type': 'Country',
						name: ['United States', 'United Arab Emirates', 'India']
					},
					...customData
				};

			case 'BreadcrumbList':
				return {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: customData.items || []
				};

			default:
				return customData;
		}
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	export let type: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList' = 'Organization';
	export let data: Record<string, any> = {};

	// Use actual origin during runtime, fallback to SITE_URL during prerender
	$: baseUrl =
		browser && $page.url.origin !== 'http://sveltekit-prerender'
			? $page.url.origin
			: 'https://akillu.com';
	$: url = new URL($page.url.pathname, baseUrl);
	$: jsonLd = getStructuredData(type, data, url);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
