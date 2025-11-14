<script lang="ts">
	import { onMount } from 'svelte';
	import { icons } from '$lib/utils/icons';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Placeholder case studies - replace with real data
	const caseStudies = [
		{
			id: 'case-1',
			title: 'E-Commerce Automation Platform',
			client: 'Retail SME',
			industry: 'Retail & E-Commerce',
			challenge:
				'Manual order processing and inventory management was causing delays and errors, leading to customer dissatisfaction and increased operational costs.',
			solution:
				'Developed a custom automation platform that integrated with existing e-commerce systems, automated order processing, inventory updates, and customer notifications.',
			results: [
				'75% reduction in order processing time',
				'90% decrease in inventory discrepancies',
				'40% reduction in operational costs',
				'Improved customer satisfaction scores'
			],
			technologies: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Automation Tools'],
			icon: icons.automation
		},
		{
			id: 'case-2',
			title: 'Custom CRM for Service Business',
			client: 'Service Provider',
			industry: 'Professional Services',
			challenge:
				'The client needed a CRM system tailored to their unique workflow, but existing solutions were too generic and required extensive customization.',
			solution:
				'Built a custom CRM from the ground up, designed specifically for their service delivery model, with integrated scheduling, client communication, and reporting features.',
			results: [
				'50% improvement in client response time',
				'30% increase in sales conversion',
				'Centralized client data management',
				'Streamlined service delivery process'
			],
			technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication'],
			icon: icons.analytics
		},
		{
			id: 'case-3',
			title: 'AI-Powered Analytics Dashboard',
			client: 'Manufacturing SME',
			industry: 'Manufacturing',
			challenge:
				'The client had vast amounts of production data but lacked insights to optimize operations and reduce waste.',
			solution:
				'Implemented an AI-powered analytics platform that processes production data in real-time, provides predictive insights, and recommends optimization strategies.',
			results: [
				'25% reduction in production waste',
				'15% improvement in production efficiency',
				'Real-time visibility into operations',
				'Data-driven decision making capabilities'
			],
			technologies: ['Python', 'Machine Learning', 'TensorFlow', 'React', 'Time Series Analysis'],
			icon: icons.ai
		}
	];
</script>

<SEOHead
	seoData={{
		title: 'Case Studies - Akillu Solutions',
		description:
			"Explore our portfolio of successful software development projects. See how we've helped SMEs transform their operations with custom solutions.",
		keywords: 'case studies, software development projects, portfolio, SME software solutions'
	}}
/>

<StructuredData type="Organization" />

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
				Case Studies
			</h1>
			<p class="text-xl text-primary-100 leading-relaxed">
				Real solutions for real business challenges. See how we've helped SMEs transform their
				operations.
			</p>
		</div>
	</div>
</section>

<!-- Case Studies -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
	<div class="absolute inset-0 gradient-mesh opacity-50"></div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="space-y-24">
			{#each caseStudies as caseStudy, index}
				<div
					id={caseStudy.id}
					class="scroll-mt-20 group"
					class:opacity-0={!mounted}
					class:translate-y-8={!mounted}
					class:transition-all={mounted}
					style="transition-delay: {index * 200}ms"
				>
					<div
						class="bg-white rounded-2xl border-2 border-secondary-200 hover:border-primary-300 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
					>
						<div class="p-8 lg:p-12">
							<div class="flex items-start gap-6 mb-8">
								<div
									class="w-20 h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
								>
									<div class="text-white scale-110">
										{@html caseStudy.icon}
									</div>
								</div>
								<div class="flex-grow">
									<h2
										class="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors"
									>
										{caseStudy.title}
									</h2>
									<div class="flex flex-wrap gap-3">
										<span
											class="px-4 py-1.5 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-full font-semibold text-sm border border-primary-200"
										>
											{caseStudy.industry}
										</span>
										<span
											class="px-4 py-1.5 bg-gradient-to-r from-accent-100 to-accent-50 text-accent-700 rounded-full font-semibold text-sm border border-accent-200"
										>
											{caseStudy.client}
										</span>
									</div>
								</div>
							</div>

							<div class="space-y-8">
								<div
									class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100"
								>
									<h3 class="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-2">
										<span
											class="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"
										></span>
										The Challenge
									</h3>
									<p class="text-secondary-700 leading-relaxed text-lg">{caseStudy.challenge}</p>
								</div>

								<div
									class="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-100"
								>
									<h3 class="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-2">
										<span
											class="w-1 h-6 bg-gradient-to-b from-accent-600 to-primary-600 rounded-full"
										></span>
										Our Solution
									</h3>
									<p class="text-secondary-700 leading-relaxed text-lg">{caseStudy.solution}</p>
								</div>

								<div>
									<h3 class="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
										<span
											class="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"
										></span>
										Results
									</h3>
									<ul class="space-y-3">
										{#each caseStudy.results as result}
											<li class="flex items-start gap-4 group/result">
												<div class="flex-shrink-0 mt-1">
													<div
														class="w-7 h-7 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center group-hover/result:scale-110 transition-transform shadow-md"
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
												<span class="text-secondary-700 text-lg leading-relaxed pt-0.5 font-medium"
													>{result}</span
												>
											</li>
										{/each}
									</ul>
								</div>

								<div class="border-t border-secondary-200 pt-6">
									<h3 class="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
										<span
											class="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"
										></span>
										Technologies Used
									</h3>
									<div class="flex flex-wrap gap-3">
										{#each caseStudy.technologies as tech}
											<span
												class="px-4 py-2 bg-gradient-to-br from-secondary-100 to-secondary-50 text-secondary-700 rounded-lg text-sm font-semibold border border-secondary-200 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50 transition-all"
											>
												{tech}
											</span>
										{/each}
									</div>
								</div>
							</div>
						</div>
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
		<div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-500/10 rounded-full blur-3xl"></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<h2 class="text-4xl sm:text-5xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
		<p class="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
			Let's discuss how we can help transform your business with custom software solutions tailored
			to your needs.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/contact"
				class="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary-600 font-bold rounded-xl hover:bg-accent-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50"
			>
				Get in Touch
				<svg
					class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
			<a
				href="/services"
				class="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-105"
			>
				View Our Services
			</a>
		</div>
	</div>
</section>
