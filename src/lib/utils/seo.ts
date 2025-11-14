export interface SEOData {
	title: string;
	description: string;
	canonical?: string;
	ogImage?: string;
	ogType?: string;
	keywords?: string;
	noindex?: boolean;
}

const SITE_URL = 'https://akillu.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`; // You'll need to create this image

export function getSEOHead(data: SEOData) {
	const {
		title,
		description,
		canonical,
		ogImage = DEFAULT_OG_IMAGE,
		ogType = 'website',
		keywords,
		noindex = false
	} = data;

	const fullTitle = title.includes('Akillu Solutions') ? title : `${title} - Akillu Solutions`;
	const canonicalUrl = canonical || SITE_URL;

	return {
		title: fullTitle,
		description,
		keywords,
		canonical: canonicalUrl,
		ogImage,
		ogType,
		noindex
	};
}
