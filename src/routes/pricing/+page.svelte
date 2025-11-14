<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';

	let openFaqIndex: number | null = null;
	let selectedCurrency: 'USD' | 'INR' | 'AED' = 'AED';

	// Exchange rates (approximate)
	const exchangeRates = {
		AED_TO_USD: 0.272, // 1 AED = 0.272 USD (or 1 USD = 3.67 AED)
		AED_TO_INR: 24.14 // 1 AED = 24.14 INR
	};

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	// Base prices in AED (min, max)
	const priceDataAED = {
		'small-website': { min: 5000, max: 19000 },
		'web-app': { min: 55000, max: 120000 },
		ecommerce: { min: 90000, max: 220000 },
		crm: { min: 90000, max: 275000 },
		'mobile-app': { min: 60000, max: 185000 }
	};

	// Format number with commas
	function formatNumber(num: number): string {
		return num.toLocaleString('en-US');
	}

	// Format number in Indian format (lakhs)
	function formatNumberINR(num: number): string {
		return num.toLocaleString('en-IN');
	}

	// Convert AED to USD
	function convertToUSD(aed: number): number {
		return aed * exchangeRates.AED_TO_USD;
	}

	// Convert AED to INR
	function convertToINR(aed: number): number {
		return aed * exchangeRates.AED_TO_INR;
	}

	// Get formatted price string for a currency
	function getPriceString(key: keyof typeof priceDataAED, currency: 'AED' | 'USD' | 'INR'): string {
		const { min, max } = priceDataAED[key];
		let minFormatted: string;
		let maxFormatted: string;

		if (currency === 'AED') {
			minFormatted = `AED ${formatNumber(min)}`;
			maxFormatted = `AED ${formatNumber(max)}`;
		} else if (currency === 'USD') {
			const minUSD = Math.round(convertToUSD(min));
			const maxUSD = Math.round(convertToUSD(max));
			minFormatted = `$${formatNumber(minUSD)}`;
			maxFormatted = `$${formatNumber(maxUSD)}`;
		} else {
			// INR
			const minINR = Math.round(convertToINR(min));
			const maxINR = Math.round(convertToINR(max));
			minFormatted = `₹${formatNumberINR(minINR)}`;
			maxFormatted = `₹${formatNumberINR(maxINR)}`;
		}

		return `${minFormatted} - ${maxFormatted}`;
	}

	const faqs = [
		{
			question: 'How is pricing determined?',
			answer:
				'Our pricing is customized based on your specific project requirements, scope, complexity, and timeline. Each project is unique, so we provide tailored quotes after understanding your needs. We consider factors such as features, integrations, technology stack, and project duration.'
		},
		{
			question: 'Are the prices shown on your website accurate?',
			answer:
				'Any previous project prices mentioned are for reference only and may not reflect current pricing for your specific needs. Technology, requirements, and market conditions change over time, so we provide fresh quotes for each new project based on current factors.'
		},
		{
			question: 'What is included in the 12-month free support?',
			answer:
				"After we deliver your software, you receive 12 months of free support. This includes bug fixes, technical assistance, minor adjustments, and help with any issues that arise. We want to ensure your software runs smoothly and you're satisfied with the solution."
		},
		{
			question: 'What are maintenance costs after the free support period?',
			answer:
				"After the initial 12-month free support period, we offer flexible maintenance plans on a monthly or yearly basis. Our maintenance costs are reasonably priced and can include regular updates, security patches, performance monitoring, feature enhancements, and ongoing technical support. We'll work with you to create a maintenance plan that fits your needs and budget."
		},
		{
			question: 'How long does a typical project take?',
			answer:
				'Project timelines vary significantly based on scope and complexity. A simple website might take 4-8 weeks, while a comprehensive custom software solution could take 3-6 months or more. We provide detailed timelines in our project proposals after understanding your requirements.'
		},
		{
			question: 'Do you work with small businesses?',
			answer:
				'Absolutely! We specialize in working with small and medium-sized enterprises (SMEs). We understand the unique challenges and budget constraints of smaller businesses and work to provide cost-effective solutions that deliver real value.'
		},
		{
			question: 'What technologies do you use?',
			answer:
				'We use modern, industry-standard technologies and frameworks. Our tech stack includes various programming languages (JavaScript, TypeScript, Python, etc.), frameworks (React, Svelte, Node.js, etc.), databases, cloud platforms, and AI/ML tools. We select the best technology for each project based on requirements, scalability needs, and your existing infrastructure.'
		},
		{
			question: 'Can you integrate with our existing systems?',
			answer:
				'Yes, we specialize in integrating new software with existing systems. Whether you have CRM, ERP, databases, or other business tools, we can build APIs, connectors, and integration layers to ensure seamless data flow and workflow continuity.'
		},
		{
			question: 'Do you provide hosting and cloud services?',
			answer:
				'Yes, we offer cloud development, migration services, and can help set up and manage your hosting infrastructure. We work with major cloud providers and can design scalable, secure architectures for your applications.'
		},
		{
			question: 'What is your development process?',
			answer:
				'Our process typically includes: understanding your requirements, planning and design, development in iterative sprints, regular communication and updates, testing and quality assurance, deployment, and ongoing support. We keep you involved throughout the process to ensure the solution meets your expectations.'
		},
		{
			question: 'Can you help with legacy system modernization?',
			answer:
				'Yes, we offer legacy system modernization services. We can re-engineer outdated systems, build APIs, migrate to modern technologies, and manage the transition with minimal disruption to your business operations.'
		},
		{
			question: 'Do you offer mobile app development?',
			answer:
				"Yes, we develop mobile applications for iOS, Android, and cross-platform solutions. We also build Progressive Web Apps (PWAs) that work across devices. We'll help you choose the best approach based on your needs and budget."
		},
		{
			question: 'What kind of AI services do you provide?',
			answer:
				'We offer various AI services including chatbots, virtual assistants, recruitment and HR assistants, self-assessment systems, decision automation tools, and internal productivity applications. We can integrate AI capabilities into your existing workflows or build standalone AI-powered solutions.'
		},
		{
			question: 'How do I get started?',
			answer:
				"Getting started is easy! Simply contact us through our contact form, email, or phone. We'll schedule a consultation to discuss your needs, answer any questions, and provide a detailed proposal with pricing and timeline. There's no obligation, and we're happy to help you understand how we can assist your business."
		},
		{
			question: 'Do you provide training for the software you build?',
			answer:
				'Yes, we provide training and documentation for all software we deliver. We ensure your team understands how to use the system effectively. Training can be provided through documentation, video tutorials, live sessions, or a combination based on your preferences.'
		}
	];
</script>

<SEOHead
	seoData={{
		title: 'Pricing & FAQ - Akillu Solutions',
		description:
			'Transparent pricing information and frequently asked questions about our software development services, support, and maintenance plans.',
		keywords: 'pricing, software development pricing, FAQ, software development costs'
	}}
/>

<StructuredData type="Organization" />

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-5xl font-display font-bold mb-6">Pricing & FAQ</h1>
			<p class="text-xl text-primary-100">
				Transparent information about our pricing approach and answers to common questions.
			</p>
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">
					Our Pricing Approach
				</h2>
				<p class="text-xl text-secondary-600 max-w-3xl mx-auto">
					Every project is unique, and so is our pricing. We believe in fair, transparent pricing
					that reflects the value we deliver.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<!-- Custom Pricing Card -->
				<div
					class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200"
				>
					<div
						class="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6"
					>
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-display font-bold text-secondary-900 mb-4">
						Custom Pricing for Your Needs
					</h3>
					<p class="text-secondary-700 mb-6 leading-relaxed">
						Our pricing is tailored to each project based on your specific requirements, scope,
						complexity, and timeline. We work closely with you to understand your needs and provide
						a detailed quote that reflects the value we'll deliver.
					</p>
					<ul class="space-y-3 mb-6">
						<li class="flex items-start space-x-3">
							<svg
								class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span class="text-secondary-700">Project scope and complexity</span>
						</li>
						<li class="flex items-start space-x-3">
							<svg
								class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span class="text-secondary-700">Technology stack and integrations</span>
						</li>
						<li class="flex items-start space-x-3">
							<svg
								class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span class="text-secondary-700">Timeline and delivery requirements</span>
						</li>
					</ul>
				</div>

				<!-- Support & Maintenance Card -->
				<div class="bg-white rounded-2xl p-8 border-2 border-secondary-200 shadow-lg">
					<div
						class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6"
					>
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-display font-bold text-secondary-900 mb-4">
						Support & Maintenance
					</h3>
					<div class="space-y-4 mb-6">
						<div class="bg-primary-50 rounded-lg p-4">
							<h4 class="font-semibold text-secondary-900 mb-2">12 Months Free Support</h4>
							<p class="text-sm text-secondary-700">
								All software we build comes with 12 months of free support, including bug fixes,
								technical assistance, and minor adjustments.
							</p>
						</div>
						<div class="bg-accent-50 rounded-lg p-4">
							<h4 class="font-semibold text-secondary-900 mb-2">Ongoing Maintenance</h4>
							<p class="text-sm text-secondary-700">
								After the free support period, we offer flexible monthly or yearly maintenance plans
								at reasonable prices. These can include updates, security patches, monitoring, and
								feature enhancements.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Important Note -->
			<div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-12">
				<div class="flex items-start">
					<svg
						class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5 mr-3"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
					<div>
						<h4 class="font-semibold text-yellow-900 mb-2">Important Note About Previous Prices</h4>
						<p class="text-yellow-800">
							If you've seen prices from previous projects we've developed, please note that these
							are for reference only and may not accurately reflect pricing for your specific needs.
							Each project is unique, and pricing depends on current requirements, technology
							choices, and market conditions. We provide fresh, customized quotes for every new
							project.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sample Pricing Examples Section -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">
					Sample Project Prices
				</h2>
				<p class="text-xl text-secondary-600 max-w-3xl mx-auto mb-6">
					Here are examples of previous projects with pricing ranges and the key factors that
					influenced each price. These are for reference only. Your project may differ significantly.
					Prices are non-inclusive of VAT.
				</p>
				<div class="flex items-center justify-center gap-3 mb-4">
					<label for="currency-select" class="text-sm font-medium text-secondary-700"
						>Select Currency:</label
					>
					<select
						id="currency-select"
						bind:value={selectedCurrency}
						class="px-4 py-2 border-2 border-primary-300 rounded-lg bg-white text-secondary-900 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all cursor-pointer"
					>
						<option value="AED">AED</option>
						<option value="USD">USD ($) (≈)</option>
						<option value="INR">INR (₹) (≈)</option>
					</select>
				</div>
				<p class="text-sm text-secondary-500 max-w-2xl mx-auto">
					Conversions are approximate (1 AED ≈ $0.27 ≈ ₹24.14) and may vary.
				</p>
			</div>

			<div class="space-y-8">
				<!-- Example 1: Small Business Website -->
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary-200">
					<div class="p-8">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
							<div class="flex-1 min-w-0">
								<div class="flex items-center space-x-3 mb-3">
									<div
										class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900">
										Small Business Website
									</h3>
								</div>
								<p class="text-secondary-600 mb-4">
									Modern, responsive website with contact forms and basic CMS functionality
								</p>
							</div>
							<div
								class="flex flex-col items-stretch sm:items-end lg:flex-shrink-0 lg:min-w-[200px]"
							>
								<div class="mb-4 w-full sm:w-auto">
									{#if selectedCurrency === 'USD'}
										<div
											class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium opacity-90 mb-1">USD (≈)</div>
											<div class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
												{getPriceString('small-website', 'USD')}
											</div>
										</div>
									{:else if selectedCurrency === 'INR'}
										<div
											class="bg-secondary-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-secondary-600 mb-1">INR (≈)</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 leading-tight"
											>
												{getPriceString('small-website', 'INR')}
											</div>
										</div>
									{:else}
										<div
											class="bg-accent-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-accent-700 mb-1">AED</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-900 leading-tight"
											>
												{getPriceString('small-website', 'AED')}
											</div>
										</div>
									{/if}
								</div>
								<div class="text-sm text-secondary-500 font-medium text-center sm:text-right">
									Timeline: 4-6 weeks
								</div>
							</div>
						</div>

						<div class="bg-primary-50 rounded-lg p-6">
							<h4 class="font-semibold text-secondary-900 mb-4 flex items-center">
								<svg
									class="w-5 h-5 text-primary-600 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
								Price Factors:
							</h4>
							<ul class="space-y-2 text-secondary-700">
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Scope:</strong> 5-8 pages, responsive design, contact form, SEO optimization, custom email addresses</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Technology:</strong> SvelteKit, FormSpree, Zoho Mail, Cloudflare, Simple Analytics</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span><strong>Design:</strong> Custom design based on brand guidelines</span>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Integrations:</strong> Contact form, Analytics, Mail provider</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span><strong>Complexity:</strong> Low: standard website features</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Example 2: Custom Web Application -->
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary-200">
					<div class="p-8">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
							<div class="flex-1 min-w-0">
								<div class="flex items-center space-x-3 mb-3">
									<div
										class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											/>
										</svg>
									</div>
									<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900">
										Custom Web Application
									</h3>
								</div>
								<p class="text-secondary-600 mb-4">
									Business management portal with user authentication, dashboards, and data
									management
								</p>
							</div>
							<div
								class="flex flex-col items-stretch sm:items-end lg:flex-shrink-0 lg:min-w-[200px]"
							>
								<div class="mb-4 w-full sm:w-auto">
									{#if selectedCurrency === 'USD'}
										<div
											class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium opacity-90 mb-1">USD (≈)</div>
											<div class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
												{getPriceString('web-app', 'USD')}
											</div>
										</div>
									{:else if selectedCurrency === 'INR'}
										<div
											class="bg-secondary-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-secondary-600 mb-1">INR (≈)</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 leading-tight"
											>
												{getPriceString('web-app', 'INR')}
											</div>
										</div>
									{:else}
										<div
											class="bg-accent-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-accent-700 mb-1">AED</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-900 leading-tight"
											>
												{getPriceString('web-app', 'AED')}
											</div>
										</div>
									{/if}
								</div>
								<div class="text-sm text-secondary-500 font-medium text-center sm:text-right">
									Timeline: 8-14 weeks
								</div>
							</div>
						</div>

						<div class="bg-accent-50 rounded-lg p-6">
							<h4 class="font-semibold text-secondary-900 mb-4 flex items-center">
								<svg
									class="w-5 h-5 text-accent-600 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
								Price Factors:
							</h4>
							<ul class="space-y-2 text-secondary-700">
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Scope:</strong> User authentication, role-based access, dashboard with analytics,
										CRUD operations, reporting features</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Technology:</strong> Modern framework (React/Svelte), backend API, database
										design and implementation</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Integrations:</strong> Payment gateway, email service, third-party APIs,
										cloud storage</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Complexity:</strong> Medium: custom business logic, data relationships,
										workflow automation</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Security:</strong> Authentication, authorization, data encryption</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span><strong>Testing:</strong> Comprehensive QA and user acceptance testing</span
									>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Example 3: E-commerce Platform -->
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary-200">
					<div class="p-8">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
							<div class="flex-1 min-w-0">
								<div class="flex items-center space-x-3 mb-3">
									<div
										class="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
											/>
										</svg>
									</div>
									<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900">
										E-commerce Platform
									</h3>
								</div>
								<p class="text-secondary-600 mb-4">
									Full-featured online store with inventory management, payment processing, and
									admin dashboard
								</p>
							</div>
							<div
								class="flex flex-col items-stretch sm:items-end lg:flex-shrink-0 lg:min-w-[200px]"
							>
								<div class="mb-4 w-full sm:w-auto">
									{#if selectedCurrency === 'USD'}
										<div
											class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium opacity-90 mb-1">USD (≈)</div>
											<div class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
												{getPriceString('ecommerce', 'USD')}
											</div>
										</div>
									{:else if selectedCurrency === 'INR'}
										<div
											class="bg-secondary-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-secondary-600 mb-1">INR (≈)</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 leading-tight"
											>
												{getPriceString('ecommerce', 'INR')}
											</div>
										</div>
									{:else}
										<div
											class="bg-accent-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-accent-700 mb-1">AED</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-900 leading-tight"
											>
												{getPriceString('ecommerce', 'AED')}
											</div>
										</div>
									{/if}
								</div>
								<div class="text-sm text-secondary-500 font-medium text-center sm:text-right">
									Timeline: 12-20 weeks
								</div>
							</div>
						</div>

						<div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6">
							<h4 class="font-semibold text-secondary-900 mb-4 flex items-center">
								<svg
									class="w-5 h-5 text-primary-600 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
								Price Factors:
							</h4>
							<ul class="space-y-2 text-secondary-700">
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Scope:</strong> Product catalog, shopping cart, checkout, order management,
										inventory tracking, customer accounts, admin dashboard</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Payment Integration:</strong> Multiple payment gateways (Stripe, PayPal,
										etc.), secure transaction processing</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Inventory Management:</strong> Real-time stock tracking, low stock alerts,
										variant management</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Shipping Integration:</strong> Shipping calculator, label printing, carrier
										API integration</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Security:</strong> PCI compliance considerations, secure payment handling,
										data protection</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Complexity:</strong> High: complex business logic, multiple integrations,
										scalability requirements</span
									>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Example 4: Custom CRM System -->
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary-200">
					<div class="p-8">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
							<div class="flex-1 min-w-0">
								<div class="flex items-center space-x-3 mb-3">
									<div
										class="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900">
										Custom CRM System
									</h3>
								</div>
								<p class="text-secondary-600 mb-4">
									Sales pipeline management, lead tracking, customer communication, and reporting
								</p>
							</div>
							<div
								class="flex flex-col items-stretch sm:items-end lg:flex-shrink-0 lg:min-w-[200px]"
							>
								<div class="mb-4 w-full sm:w-auto">
									{#if selectedCurrency === 'USD'}
										<div
											class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium opacity-90 mb-1">USD (≈)</div>
											<div class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
												{getPriceString('crm', 'USD')}
											</div>
										</div>
									{:else if selectedCurrency === 'INR'}
										<div
											class="bg-secondary-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-secondary-600 mb-1">INR (≈)</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 leading-tight"
											>
												{getPriceString('crm', 'INR')}
											</div>
										</div>
									{:else}
										<div
											class="bg-accent-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-accent-700 mb-1">AED</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-900 leading-tight"
											>
												{getPriceString('crm', 'AED')}
											</div>
										</div>
									{/if}
								</div>
								<div class="text-sm text-secondary-500 font-medium text-center sm:text-right">
									Timeline: 14-24 weeks
								</div>
							</div>
						</div>

						<div class="bg-accent-50 rounded-lg p-6">
							<h4 class="font-semibold text-secondary-900 mb-4 flex items-center">
								<svg
									class="w-5 h-5 text-accent-600 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
								Price Factors:
							</h4>
							<ul class="space-y-2 text-secondary-700">
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Scope:</strong> Lead management, contact database, sales pipeline, email
										integration, task management, reporting and analytics</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Workflow Customization:</strong> Custom sales processes, automated workflows,
										stage management</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Integrations:</strong> Email (Gmail/Outlook), calendar sync, phone system,
										marketing tools, accounting software</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Reporting:</strong> Custom dashboards, sales forecasting, performance metrics,
										data visualization</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Complexity:</strong> High: complex data relationships, automation rules,
										permission management</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-accent-600 font-bold mt-1">•</span>
									<span
										><strong>Data Migration:</strong> Importing existing customer data, historical records</span
									>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Example 5: Mobile App -->
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary-200">
					<div class="p-8">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
							<div class="flex-1 min-w-0">
								<div class="flex items-center space-x-3 mb-3">
									<div
										class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900">
										Mobile Application (iOS & Android)
									</h3>
								</div>
								<p class="text-secondary-600 mb-4">
									Native or cross-platform mobile app with backend API and user authentication
								</p>
							</div>
							<div
								class="flex flex-col items-stretch sm:items-end lg:flex-shrink-0 lg:min-w-[200px]"
							>
								<div class="mb-4 w-full sm:w-auto">
									{#if selectedCurrency === 'USD'}
										<div
											class="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium opacity-90 mb-1">USD (≈)</div>
											<div class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
												{getPriceString('mobile-app', 'USD')}
											</div>
										</div>
									{:else if selectedCurrency === 'INR'}
										<div
											class="bg-secondary-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-secondary-600 mb-1">INR (≈)</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 leading-tight"
											>
												{getPriceString('mobile-app', 'INR')}
											</div>
										</div>
									{:else}
										<div
											class="bg-accent-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center sm:text-right break-words"
										>
											<div class="text-xs font-medium text-accent-700 mb-1">AED</div>
											<div
												class="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-900 leading-tight"
											>
												{getPriceString('mobile-app', 'AED')}
											</div>
										</div>
									{/if}
								</div>
								<div class="text-sm text-secondary-500 font-medium text-center sm:text-right">
									Timeline: 10-18 weeks
								</div>
							</div>
						</div>

						<div class="bg-primary-50 rounded-lg p-6">
							<h4 class="font-semibold text-secondary-900 mb-4 flex items-center">
								<svg
									class="w-5 h-5 text-primary-600 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
								Price Factors:
							</h4>
							<ul class="space-y-2 text-secondary-700">
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Platform:</strong> Native (iOS + Android) vs cross-platform (React Native/Flutter)
										affects development time</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Backend API:</strong> RESTful API development, database design, authentication
										system</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Features:</strong> User authentication, push notifications, in-app purchases,
										offline functionality, social sharing</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Design:</strong> Custom UI/UX design, platform-specific guidelines (Material
										Design, Human Interface Guidelines)</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>App Store:</strong> Submission process, compliance, testing, approval coordination</span
									>
								</li>
								<li class="flex items-start space-x-2">
									<span class="text-primary-600 font-bold mt-1">•</span>
									<span
										><strong>Complexity:</strong> Medium to High: depends on features, integrations,
										and platform requirements</span
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Disclaimer -->
			<div class="mt-12 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
				<div class="flex items-start">
					<svg
						class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 mr-3"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/>
					</svg>
					<div>
						<h4 class="font-semibold text-blue-900 mb-2">Please Note</h4>
						<p class="text-blue-800">
							These prices are examples from previous projects and are provided for reference only.
							Actual pricing for your project will depend on your specific requirements, current
							market rates, technology choices, timeline, and other factors. We provide detailed,
							customized quotes after understanding your unique needs. Contact us for an accurate
							estimate tailored to your project.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Get Custom Quote Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">Get a Custom Quote</h2>
				<p class="text-xl text-secondary-600 max-w-2xl mx-auto">
					Ready to get started? Fill out the form below and we'll provide you with a detailed quote
					tailored to your specific needs.
				</p>
			</div>
			<div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">
					Frequently Asked Questions
				</h2>
				<p class="text-xl text-secondary-600">
					Find answers to common questions about our services, pricing, and process.
				</p>
			</div>

			<div class="space-y-4">
				{#each faqs as faq, index}
					<div
						class="bg-white border-2 border-secondary-200 rounded-xl overflow-hidden transition-all hover:border-primary-300 hover:shadow-lg"
					>
						<button
							type="button"
							class="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
							on:click={() => toggleFaq(index)}
						>
							<span class="text-lg font-semibold text-secondary-900 pr-4">{faq.question}</span>
							<svg
								class="w-6 h-6 text-primary-600 flex-shrink-0 transition-transform {openFaqIndex ===
								index
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaqIndex === index}
							<div class="px-6 pb-5">
								<div class="pt-2 border-t border-secondary-200">
									<p class="text-secondary-700 leading-relaxed">{faq.answer}</p>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-display font-bold mb-6">Still Have Questions?</h2>
		<p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
			We're here to help! Reach out to us directly and we'll be happy to answer any questions you
			may have.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/contact"
				class="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
			>
				Contact Us
			</a>
			<a
				href="/services"
				class="inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
			>
				View Services
			</a>
		</div>
	</div>
</section>
