<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { onMount } from 'svelte';
	import { icons } from '$lib/utils/icons';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const services = [
		{
			title: 'Custom Software Development',
			description:
				'Bespoke software built around your exact business workflows—no bloated features, no wasted spend.',
			icon: icons.computer
		},
		{
			title: 'Web & Portal Development',
			description:
				'Customer portals, employee dashboards, E-commerce platforms, and enterprise-grade web applications.',
			icon: icons.portal
		},
		{
			title: 'Website Development',
			description:
				'Fast, modern, conversion-focused websites built to communicate clearly and perform reliably.',
			icon: icons.website
		},
		{
			title: 'Mobile App Development (Native, Cross-Platform & PWA)',
			description:
				'High-performance mobile apps that deliver fast, intuitive experiences across iOS, Android, and the web.',
			icon: icons.mobile
		},
		{
			title: 'Artificial Intelligence Services',
			description:
				'AI-powered tools—from recruitment assistants to self-assessment systems, chatbots, and internal productivity apps—to automate decisions and optimize operations.',
			icon: icons.ai
		},
		{
			title: 'Automation Solutions',
			description:
				'Workflow automation that eliminates manual work, reduces errors, and accelerates business processes.',
			icon: icons.automation
		},
		{
			title: 'Data & Backend Systems',
			description:
				'Robust databases, visual dashboards, and legacy system modernization to bring your infrastructure up to modern standards.',
			icon: icons.database
		},
		{
			title: 'CRM & ERP Solutions',
			description:
				'Custom CRM and ERP systems built around your processes, plus consulting to optimize your workflows.',
			icon: icons.analytics
		},
		{
			title: 'Cloud & Infrastructure',
			description:
				'Multicloud architectures, secure data protection, and cloud migration services designed for uptime and scale.',
			icon: icons.cloud
		}
	];
</script>

<svelte:head>
	<title>Akillu Solutions - Custom Software Development for SMEs</title>
	<meta
		name="description"
		content="Comprehensive software services: custom development, mobile apps, web portals, cloud infrastructure, AI & automation, database management, and CRM/ERP solutions for SMEs. Serving clients internationally, primarily the US, Middle East, and India."
	/>
</svelte:head>

<Hero />

<!-- Value Proposition -->
<section class="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
	<!-- Animated background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
		<div class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-tertiary-500/10 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 2s;"></div>
	</div>
	
	<!-- Floating illustrations - hidden on mobile, visible on larger screens -->
	<div class="hidden md:block absolute inset-0 opacity-5 pointer-events-none">
		<img 
			src="/illustrations/building-product.svg" 
			alt="" 
			class="absolute top-10 left-10 w-48 h-48 lg:w-64 lg:h-64 animate-float" 
		/>
		<img 
			src="/illustrations/automation.svg" 
			alt="" 
			class="absolute bottom-10 right-10 w-48 h-48 lg:w-64 lg:h-64 animate-float" 
			style="animation-delay: 1.5s;"
		/>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-6xl mx-auto">
			<!-- Main headline -->
			<div class="text-center mb-8 sm:mb-12 lg:mb-16">
				<div 
					class="inline-block opacity-0 translate-y-8 transition-all duration-1000"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
				>
					<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold leading-tight mb-3 sm:mb-4 px-2">
						Your business doesn't need more software.
						<br class="hidden sm:block">
						<span class="bg-gradient-to-r from-accent-300 via-accent-200 to-tertiary-300 bg-clip-text text-transparent">
							It needs the <i>right</i> software.
						</span>
					</h2>
				</div>
			</div>

			<!-- Comparison Cards -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
				<!-- Noise Card -->
				<div 
					class="opacity-0 translate-y-8 sm:translate-x-[-30px] sm:translate-y-0 transition-all duration-700"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					class:translate-x-0={mounted}
					style="transition-delay: 200ms;"
				>
					<div class="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-red-500/30 hover:border-red-400/50 active:border-red-400/50 transition-all group relative overflow-hidden">
						<!-- Animated noise pattern background -->
						<div class="absolute inset-0 opacity-10">
							<div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.1) 10px, rgba(239, 68, 68, 0.1) 20px);"></div>
						</div>
						<div class="relative z-10">
							<div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
								<div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform flex-shrink-0">
									<svg class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</div>
								<h3 class="text-xl sm:text-2xl font-display font-bold text-red-300">The Noise</h3>
							</div>
							<p class="text-base sm:text-lg text-gray-300 leading-relaxed">
								Software that doesn't drive revenue, reduce costs, and strengthen operations, is just <span class="font-bold text-red-300 italic">Noise</span>.
							</p>
							<div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									<span>Wasted investment</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									<span>No measurable ROI</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									<span>Operational inefficiency</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Software Card -->
				<div 
					class="opacity-0 translate-y-8 sm:translate-x-[30px] sm:translate-y-0 transition-all duration-700"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					class:translate-x-0={mounted}
					style="transition-delay: 400ms;"
				>
					<div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-accent-400/40 hover:border-accent-300/60 active:border-accent-300/60 transition-all group relative overflow-hidden hover:scale-[1.02] active:scale-[1.01] lg:hover:scale-[1.02]">
						<!-- Shimmer effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-1000"></div>
						<div class="relative z-10">
							<div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
								<div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform shadow-lg shadow-accent-500/50 flex-shrink-0">
									<svg class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<h3 class="text-xl sm:text-2xl font-display font-bold text-accent-300">The Right Software</h3>
							</div>
							<p class="text-base sm:text-lg text-gray-100 leading-relaxed font-medium">
								Akillu Solutions cuts through the noise and delivers software that's <span class="font-bold text-accent-300">worth your investment</span>.
							</p>
							<div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Drives revenue growth</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Reduces operational costs</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Strengthens operations</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Overview -->
<section class="py-24 relative overflow-hidden section-pattern bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center mb-20">
			<h2 class="text-5xl sm:text-6xl font-display font-extrabold text-secondary-900 mb-6">
				Our <span class="text-primary-600">Services</span>
			</h2>
			<p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive software solutions designed to help SMEs grow and thrive in today's digital landscape.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, i}
				<div
					class="opacity-0 translate-y-8 transition-all duration-700"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
					style="transition-delay: {i * 100}ms"
				>
					<ServiceCard
						title={service.title}
						description={service.description}
						icon={service.icon}
						delay={i * 100}
					/>
				</div>
			{/each}
		</div>
		<div class="text-center mt-16">
			<a
				href="/services"
				class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary-500/50"
			>
				View All Services
				<svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Trust Indicators & Stats -->
<section class="py-24 relative overflow-hidden bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-6xl mx-auto">
			<!-- Case Studies Preview -->
			<div
				class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border-2 border-primary-200"
				class:opacity-0={!mounted}
				class:translate-y-8={!mounted}
				class:transition-all={mounted}
				style="transition-delay: 100ms"
			>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div>
						<h2 class="text-4xl md:text-5xl font-display font-extrabold text-secondary-900 mb-4">
							See Our Work in <span class="text-primary-600">Action</span>
						</h2>
						<p class="text-xl text-secondary-600 mb-6 leading-relaxed">
							Explore real-world case studies showcasing how we've helped SMEs transform their operations with comprehensive software solutions—from custom development and AI services to cloud infrastructure and CRM/ERP systems.
						</p>
						<a
							href="/case-studies"
							class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
						>
							View Case Studies
							<svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</a>
					</div>
					<div class="hidden md:block">
						<img
							src="/illustrations/building-product.svg"
							alt="Case Studies"
							class="w-full max-w-md mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Focus -->
<section class="py-24 relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
	<div class="absolute inset-0 opacity-5">
		<img src="/illustrations/planning.svg" alt="" class="absolute top-10 right-10 w-64 h-64 opacity-20" />
		<img src="/illustrations/understanding-requirements.svg" alt="" class="absolute bottom-10 left-10 w-64 h-64 opacity-20" />
	</div>
	<div class="absolute inset-0">
		<div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="space-y-8">
				<div>
					<h2 class="text-5xl sm:text-6xl font-display font-extrabold mb-6 leading-tight">
						Serving Clients <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-300">Internationally</span>
					</h2>
					<p class="text-xl text-gray-300 mb-10 leading-relaxed">
						We serve clients internationally, primarily in the US, Middle East, and India.
					</p>
				</div>
				<div class="space-y-6">
					<div class="glass-dark rounded-2xl p-6 border border-white/10 hover:border-accent-500/50 transition-all group">
						<div class="flex items-start space-x-4">
							<div
								class="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
							>
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 class="text-2xl font-bold mb-2 group-hover:text-accent-400 transition-colors">United States</h3>
								<p class="text-gray-300 leading-relaxed">
									Serving clients across the US with expertise in custom software development, AI services, and cloud solutions.
								</p>
							</div>
						</div>
					</div>
					<div class="glass-dark rounded-2xl p-6 border border-white/10 hover:border-tertiary-500/50 transition-all group">
						<div class="flex items-start space-x-4">
							<div
								class="w-16 h-16 bg-gradient-to-br from-accent-500 to-tertiary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
							>
								{@html icons.uae}
							</div>
							<div>
								<h3 class="text-2xl font-bold mb-2 group-hover:text-tertiary-400 transition-colors">Middle East</h3>
								<p class="text-gray-300 leading-relaxed">
									Serving clients throughout the Middle East, bringing innovative software solutions to SMEs in the region.
								</p>
							</div>
						</div>
					</div>
					<div class="glass-dark rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all group">
						<div class="flex items-start space-x-4">
							<div
								class="w-16 h-16 bg-gradient-to-br from-primary-500 to-tertiary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
							>
								{@html icons.india}
							</div>
							<div>
								<h3 class="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">India</h3>
								<p class="text-gray-300 leading-relaxed">
									We have an established presence serving SMEs across India with deep understanding of the local market.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="relative">
				<div class="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 hover:border-white/30 transition-all">
					<h3 class="text-3xl font-display font-bold mb-8 bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
						Why Choose Us?
					</h3>
					<ul class="space-y-6">
						<li class="flex items-start space-x-4 group">
							<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors">Deep understanding of SME challenges</span>
						</li>
						<li class="flex items-start space-x-4 group">
							<div class="w-10 h-10 bg-gradient-to-br from-accent-500 to-tertiary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors">Custom solutions, not one-size-fits-all</span>
						</li>
						<li class="flex items-start space-x-4 group">
							<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-tertiary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors">Transparent process with continuous feedback</span>
						</li>
						<li class="flex items-start space-x-4 group">
							<div class="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors">Ongoing support and maintenance</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
	<div class="absolute inset-0 opacity-10">
		<img src="/illustrations/handover.svg" alt="" class="absolute top-1/4 right-1/4 w-96 h-96 opacity-20" />
	</div>
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
	</div>
	
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl sm:text-6xl font-display font-extrabold mb-8 text-white leading-tight">
				Ready to Transform Your <span class="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Business?</span>
			</h2>
			<p class="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
				Let's discuss how our comprehensive software solutions—from custom development and AI services to cloud infrastructure and CRM/ERP systems—can help SMEs grow and thrive in today's digital landscape.
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a
					href="/contact"
					class="group px-10 py-5 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-2"
				>
					Get in Touch
					<svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
				<a
					href="/process"
					class="px-10 py-5 glass border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105"
				>
					Learn Our Process
				</a>
			</div>
		</div>
	</div>
</section>
