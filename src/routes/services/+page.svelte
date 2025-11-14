<script lang="ts">
	import { icons } from '$lib/utils/icons';
	import { onMount } from 'svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';

	let mounted = false;
	let activeCategory = '';
	let showMenu = false;

	const categoryIds = [
		'custom-software-product-development',
		'ai-automation',
		'data-backend-systems',
		'business-systems-crm-erp',
		'cloud-infrastructure-services'
	];

	onMount(() => {
		mounted = true;

		const handleScroll = () => {
			// Show menu after scrolling past hero section
			showMenu = window.scrollY > 400;

			// Find which category is currently in view
			const scrollPosition = window.scrollY + 200; // Offset for better UX

			for (let i = categoryIds.length - 1; i >= 0; i--) {
				const element = document.getElementById(categoryIds[i]);
				if (element) {
					const rect = element.getBoundingClientRect();
					const elementTop = rect.top + window.scrollY;
					if (scrollPosition >= elementTop) {
						activeCategory = categoryIds[i];
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToCategory(categoryId: string) {
		const element = document.getElementById(categoryId);
		if (element) {
			const offset = 100; // Account for fixed header
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	const serviceCategories = [
		{
			id: 'custom-software-product-development',
			category: 'Custom Software & Product Development',
			services: [
				{
					id: 'custom-software',
					title: 'Custom Software Development',
					icon: icons.computer,
					description:
						'Bespoke software that fits your business processes. No unnecessary features, just what you need to get the job done.',
					features: [
						'Business process analysis and optimization',
						'Modern tech stack selection',
						'Scalable architecture design',
						'Quality assurance and testing',
						'Deployment and integration support'
					]
				},
				{
					id: 'web-portal',
					title: 'Web & Portal Development',
					icon: icons.portal,
					description:
						'Customer portals, employee dashboards, E-commerce platforms, and enterprise-grade web applications.',
					features: [
						'Customer and employee portals',
						'E-commerce platform development',
						'Enterprise web applications',
						'Dashboard and analytics interfaces',
						'Integration with existing systems'
					]
				},
				{
					id: 'mobile-apps',
					title: 'Mobile App Development (Native, Cross-Platform & PWA)',
					icon: icons.mobile,
					description:
						'High-performance mobile apps that deliver fast, intuitive experiences across iOS, Android, and the web.',
					features: [
						'Native iOS and Android development',
						'Cross-platform solutions (React Native, Flutter)',
						'Progressive Web Apps (PWA)',
						'App store optimization and deployment',
						'Performance optimization and testing'
					]
				},
				{
					id: 'website',
					title: 'Website Development',
					icon: icons.website,
					description:
						'Fast, modern, conversion-focused websites built to communicate clearly and perform reliably.',
					features: [
						'Responsive and mobile-first design',
						'SEO optimization',
						'Fast loading times and performance',
						'Content management systems',
						'Conversion-focused design'
					]
				}
			]
		},
		{
			id: 'ai-automation',
			category: 'AI & Automation',
			services: [
				{
					id: 'ai-services',
					title: 'Artificial Intelligence Services',
					icon: icons.ai,
					description:
						'AI powered tools like self-assessment systems, chatbots, and productivity apps that help automate decisions and streamline your operations.',
					features: [
						'Chatbots and virtual assistants',
						'Self-assessment systems',
						'Internal productivity applications',
						'Recruitment and HR assistants',
						'Decision automation tools'
					]
				},
				{
					id: 'automation',
					title: 'Automation Solutions',
					icon: icons.automation,
					description:
						'Workflow automation that eliminates manual work, reduces errors, and accelerates business processes.',
					features: [
						'Workflow automation',
						'Data processing automation',
						'Integration with existing systems',
						'Error reduction and validation',
						'Process acceleration'
					]
				}
			]
		},
		{
			id: 'data-backend-systems',
			category: 'Data & Backend Systems',
			services: [
				{
					id: 'database',
					title: 'Database Development & Management',
					icon: icons.database,
					description:
						'Robust databases, visual dashboards, and custom web interfaces for easy control of your data.',
					features: [
						'Database design and development',
						'Visual dashboards and interfaces',
						'Custom web interfaces for data control',
						'Data security and backup',
						'Performance optimization'
					]
				},
				{
					id: 'legacy-modernization',
					title: 'Legacy System Modernization',
					icon: icons.refresh,
					description:
						'Re-engineering outdated systems, building APIs, and managing change to bring legacy platforms up to modern standards.',
					features: [
						'System re-engineering',
						'API development and integration',
						'Change management',
						'Modern technology migration',
						'Minimal disruption transition'
					]
				}
			]
		},
		{
			id: 'business-systems-crm-erp',
			category: 'Business Systems: CRM & ERP',
			services: [
				{
					id: 'custom-crm',
					title: 'Custom CRM Development',
					icon: icons.analytics,
					description: 'CRMs built around your actual sales process, not the other way around.',
					features: [
						'Sales process alignment',
						'Custom workflow design',
						'Lead and contact management',
						'Reporting and analytics',
						'Integration capabilities'
					]
				},
				{
					id: 'crm-consulting',
					title: 'CRM Consulting',
					icon: icons.consulting,
					description:
						'Audit, refine, and optimize your CRM workflows for better tracking, lead management, and operational clarity.',
					features: [
						'CRM audit and assessment',
						'Workflow optimization',
						'Lead management improvement',
						'Operational clarity enhancement',
						'Best practices implementation'
					]
				},
				{
					id: 'custom-erp',
					title: 'Custom ERP Development',
					icon: icons.analytics,
					description:
						'Tailored ERP systems aligned with your core operations, built to improve efficiency across departments.',
					features: [
						'Department-specific modules',
						'Cross-department integration',
						'Efficiency optimization',
						'Custom reporting and analytics',
						'Scalable architecture'
					]
				},
				{
					id: 'erp-consulting',
					title: 'ERP Consulting',
					icon: icons.consulting,
					description:
						'Mapping business processes, selecting the right ERP modules, and optimizing your internal coordination.',
					features: [
						'Business process mapping',
						'ERP module selection',
						'Internal coordination optimization',
						'Implementation planning',
						'Training and support'
					]
				}
			]
		},
		{
			id: 'cloud-infrastructure-services',
			category: 'Cloud & Infrastructure Services',
			services: [
				{
					id: 'cloud-development',
					title: 'Cloud Development',
					icon: icons.cloud,
					description:
						'Multicloud architectures, secure data protection, and cloud migration services designed for uptime and scale.',
					features: [
						'Multicloud architecture design',
						'Secure data protection and backup',
						'Scalable infrastructure setup',
						'Ongoing maintenance and monitoring',
						'Cost optimization strategies'
					]
				},
				{
					id: 'cloud-migration',
					title: 'Cloud Migration Services',
					icon: icons.cloud,
					description:
						'End-to-end cloud migration: data, servers, recovery planning, and seamless transition with minimal downtime.',
					features: [
						'Migration strategy and planning',
						'Data and server migration',
						'Recovery and disaster planning',
						'Minimal downtime transition',
						'Post-migration optimization'
					]
				}
			]
		}
	];
</script>

<SEOHead
	seoData={{
		title: 'Services - Akillu Solutions',
		description:
			'Comprehensive software services: custom development, mobile apps, web portals, cloud infrastructure, AI & automation, database management, and CRM/ERP solutions.',
		keywords:
			'custom software development, web development, mobile app development, AI services, automation, CRM, ERP, cloud infrastructure, database management'
	}}
/>

<StructuredData
	type="Service"
	data={{
		serviceType: 'Software Development Services',
		description:
			'Comprehensive software services including custom development, mobile apps, web portals, cloud infrastructure, AI & automation, database management, and CRM/ERP solutions.'
	}}
/>

<!-- Hero Section -->
<section
	class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden"
>
	<div class="absolute inset-0">
		<div
			class="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow"
		></div>
		<div
			class="absolute bottom-0 right-0 w-96 h-96 bg-tertiary-500/10 rounded-full blur-3xl animate-pulse-glow"
			style="animation-delay: 2s;"
		></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-3xl mx-auto text-center">
			<h1
				class="text-5xl sm:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent"
			>
				Our Services
			</h1>
			<p class="text-xl text-primary-100 leading-relaxed">
				Comprehensive software solutions designed to help SMEs grow and thrive in today's digital
				landscape.
			</p>
		</div>
	</div>
</section>

<!-- Services Detail -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
	<div class="absolute inset-0 gradient-mesh opacity-50"></div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="space-y-32">
			{#each serviceCategories as category, catIndex}
				<div
					id={category.id}
					class="opacity-0 translate-y-8 transition-all duration-700 scroll-mt-24"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style="transition-delay: {catIndex * 100}ms"
				>
					<div class="text-center mb-16">
						<h2 class="text-4xl sm:text-5xl font-display font-bold text-secondary-900 mb-4">
							<span
								class="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent"
							>
								{category.category}
							</span>
						</h2>
						<div
							class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
						></div>
					</div>
					<div class="space-y-24">
						{#each category.services as service, serviceIndex}
							<div
								id={service.id}
								class="scroll-mt-20 group"
								class:opacity-0={!mounted}
								class:translate-y-8={!mounted}
								class:transition-all={mounted}
								style="transition-delay: {catIndex * 100 + serviceIndex * 150}ms"
							>
								<div
									class="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 border-2 border-secondary-200 hover:border-primary-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
								>
									<div class="flex items-start gap-6 mb-6">
										<div
											class="w-20 h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
										>
											<div class="text-white scale-110">
												{@html service.icon}
											</div>
										</div>
										<div class="flex-grow">
											<h3
												class="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors"
											>
												{service.title}
											</h3>
											<p class="text-xl text-secondary-600 leading-relaxed">
												{service.description}
											</p>
										</div>
									</div>

									<div class="border-t border-secondary-200 pt-8">
										<ul class="space-y-4">
											{#each service.features as feature}
												<li class="flex items-start space-x-4 group/feature">
													<div class="flex-shrink-0 mt-1">
														<div
															class="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center group-hover/feature:scale-110 transition-transform"
														>
															<svg
																class="w-4 h-4 text-white"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2.5"
																	d="M5 13l4 4L19 7"
																/>
															</svg>
														</div>
													</div>
													<span class="text-secondary-700 text-lg leading-relaxed pt-0.5"
														>{feature}</span
													>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	class="py-20 relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white overflow-hidden"
>
	<div class="absolute inset-0">
		<div
			class="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-glow"
		></div>
		<div
			class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-500/10 rounded-full blur-3xl animate-pulse-glow"
			style="animation-delay: 2s;"
		></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<h2
			class="text-4xl sm:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent"
		>
			Ready to Get Started?
		</h2>
		<p class="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
			Let's discuss how we can help transform your business with our software solutions.
		</p>
		<a
			href="/contact"
			class="group inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 font-bold rounded-xl hover:bg-accent-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50 duration-300"
		>
			Contact Us
			<svg
				class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 7l5 5m0 0l-5 5m5-5H6"
				/>
			</svg>
		</a>
	</div>
</section>

<!-- Floating Category Menu -->
{#if showMenu}
	<nav
		class="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block transition-all duration-300 {showMenu
			? 'opacity-100 translate-x-0'
			: 'opacity-0 translate-x-4'}"
	>
		<div
			class="bg-white rounded-2xl shadow-2xl border-2 border-secondary-200 p-4 space-y-2 backdrop-blur-sm bg-white/95"
		>
			{#each serviceCategories as category, index}
				<button
					on:click={() => scrollToCategory(category.id)}
					class="block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium whitespace-nowrap {activeCategory ===
					category.id
						? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg transform scale-105'
						: 'text-secondary-700 hover:bg-primary-50 hover:text-primary-700'}"
					aria-label="Scroll to {category.category}"
				>
					<span class="flex items-center gap-2">
						<span
							class="w-2 h-2 rounded-full transition-all duration-200 {activeCategory ===
							category.id
								? 'bg-white scale-125'
								: 'bg-secondary-300'}"
						></span>
						<span class="truncate max-w-[200px]">{category.category}</span>
					</span>
				</button>
			{/each}
		</div>
	</nav>
{/if}
