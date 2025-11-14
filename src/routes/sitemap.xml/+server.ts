import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://akillu.com';

const routes = [
	{ url: '', changefreq: 'weekly', priority: 1.0 },
	{ url: '/about', changefreq: 'monthly', priority: 0.8 },
	{ url: '/services', changefreq: 'weekly', priority: 0.9 },
	{ url: '/case-studies', changefreq: 'monthly', priority: 0.8 },
	{ url: '/process', changefreq: 'monthly', priority: 0.8 },
	{ url: '/pricing', changefreq: 'monthly', priority: 0.8 },
	{ url: '/contact', changefreq: 'monthly', priority: 0.7 },
	{ url: '/privacy', changefreq: 'yearly', priority: 0.3 },
	{ url: '/terms', changefreq: 'yearly', priority: 0.3 }
];

export const GET: RequestHandler = async () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
