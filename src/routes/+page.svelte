<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';
	import { onMount } from 'svelte';
	import { icons } from '$lib/utils/icons';

	let mounted = false;
	let currentSlide = 0;
	let autoSlideInterval: ReturnType<typeof setInterval> | null = null;
	let touchStartX = 0;
	let touchEndX = 0;

	const solutions = [
		{
			image: '/illustrations/ecommerce-mobile-app.png',
			title: 'E-commerce Mobile App',
			description: 'Modern mobile shopping experience with seamless checkout and product browsing.'
		},
		{
			image: '/illustrations/system-dashboard.png',
			title: 'System Dashboard',
			description: 'Comprehensive monitoring and management dashboard for enterprise systems.'
		},
		{
			image: '/illustrations/device-manager-system-observer.png',
			title: 'Device Management',
			description: 'Advanced device monitoring and management system with real-time analytics.'
		},
		{
			image: '/illustrations/ecommerce-app-product-page.png',
			title: 'E-commerce Platform',
			description:
				'Full-featured online store with product management and customer experience optimization.'
		},
		{
			image: '/illustrations/slog-app-system-observation-manager.png',
			title: 'System Observation',
			description:
				'Comprehensive system monitoring and observation tools for infrastructure management.'
		},
		{
			image: '/illustrations/log-management-page.png',
			title: 'Log Management',
			description:
				'Advanced log analysis and management system for security and operations monitoring.'
		}
	];

	onMount(() => {
		mounted = true;
		// Auto-slide every 4 seconds
		autoSlideInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % solutions.length;
		}, 4000);
		return () => {
			if (autoSlideInterval) {
				clearInterval(autoSlideInterval);
			}
		};
	});

	function goToSlide(index: number) {
		currentSlide = index;
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
		}
		autoSlideInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % solutions.length;
		}, 4000);
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].clientX;
		handleSwipe();
	}

	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				// Swipe left - next slide
				currentSlide = (currentSlide + 1) % solutions.length;
			} else {
				// Swipe right - previous slide
				currentSlide = (currentSlide - 1 + solutions.length) % solutions.length;
			}
		}
	}

	const services = [
		{
			title: 'Custom Software Development',
			description:
				'Bespoke software that fits your business processes. No unnecessary features, just what you need to get the job done.',
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
				'AI powered tools like self-assessment systems, chatbots, and productivity apps that help automate decisions and streamline your operations.',
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

<SEOHead
	seoData={{
		title: 'Akillu Solutions - Custom Software Development for SMEs',
		description:
			'Comprehensive software services: custom development, mobile apps, web portals, cloud infrastructure, AI & automation, database management, and CRM/ERP solutions for SMEs. Serving clients internationally, primarily the US, Middle East, and India.',
		keywords:
			'custom software development, automation, AI integration, web development, mobile apps, CRM, ERP, SME solutions, software consultancy, India, UAE, US'
	}}
/>

<StructuredData type="Organization" />
<StructuredData type="WebSite" />

<Hero />

<!-- Value Proposition -->
<section
	class="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white"
>
	<!-- Animated background elements -->
	<div class="absolute inset-0">
		<div
			class="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow"
		></div>
		<div
			class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-tertiary-500/10 rounded-full blur-3xl animate-pulse-glow"
			style="animation-delay: 2s;"
		></div>
	</div>

	<!-- Floating illustrations - removed to show images more prominently elsewhere -->

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-6xl mx-auto">
			<!-- Main headline -->
			<div class="text-center mb-8 sm:mb-12 lg:mb-16">
				<div
					class="inline-block opacity-0 translate-y-8 transition-all duration-1000"
					class:opacity-100={mounted}
					class:translate-y-0={mounted}
				>
					<h2
						class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold leading-tight mb-3 sm:mb-4 px-2"
					>
						Your business doesn't need more software.
						<br class="hidden sm:block" />
						<span
							class="bg-gradient-to-r from-accent-300 via-accent-200 to-tertiary-300 bg-clip-text text-transparent"
						>
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
					<div
						class="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-red-500/30 hover:border-red-400/50 active:border-red-400/50 transition-all group relative overflow-hidden"
					>
						<!-- Animated noise pattern background -->
						<div class="absolute inset-0 opacity-10">
							<div
								class="absolute inset-0"
								style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.1) 10px, rgba(239, 68, 68, 0.1) 20px);"
							></div>
						</div>
						<div class="relative z-10">
							<div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
								<div
									class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform flex-shrink-0"
								>
									<svg
										class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</div>
								<h3 class="text-xl sm:text-2xl font-display font-bold text-red-300">The Noise</h3>
							</div>
							<p class="text-base sm:text-lg text-gray-300 leading-relaxed">
								Software that doesn't drive revenue, reduce costs, and strengthen operations, is
								just <span class="font-bold text-red-300 italic">Noise</span>.
							</p>
							<div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
									<span>Wasted investment</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
									<span>No measurable ROI</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
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
					<div
						class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-accent-400/40 hover:border-accent-300/60 active:border-accent-300/60 transition-all group relative overflow-hidden hover:scale-[1.02] active:scale-[1.01] lg:hover:scale-[1.02]"
					>
						<!-- Shimmer effect -->
						<div
							class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-1000"
						></div>
						<div class="relative z-10">
							<div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
								<div
									class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform shadow-lg shadow-accent-500/50 flex-shrink-0"
								>
									<svg
										class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
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
								<h3 class="text-xl sm:text-2xl font-display font-bold text-accent-300">
									The Right Software
								</h3>
							</div>
							<p class="text-base sm:text-lg text-gray-100 leading-relaxed font-medium">
								Akillu Solutions cuts through the noise and delivers software that's <span
									class="font-bold text-accent-300">worth your investment</span
								>.
							</p>
							<div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0"
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
									<span>Drives revenue growth</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0"
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
									<span>Reduces operational costs</span>
								</div>
								<div class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-200">
									<svg
										class="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0"
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
<section class="py-24 relative overflow-hidden section-pattern bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center mb-20">
			<h2 class="text-5xl sm:text-6xl font-display font-extrabold text-secondary-900 mb-6">
				Our <span class="text-primary-600">Services</span>
			</h2>
			<p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive software solutions designed to help SMEs grow and thrive in today's digital
				landscape.
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
		</div>
	</div>
</section>

<!-- Trust Indicators & Stats -->
<section class="py-24 relative overflow-hidden bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-7xl mx-auto">
			<!-- Case Studies Preview Header -->
			<div
				class="text-center mb-16"
				class:opacity-0={!mounted}
				class:translate-y-8={!mounted}
				class:transition-all={mounted}
				style="transition-delay: 100ms"
			>
				<h2
					class="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-secondary-900 mb-6"
				>
					See Our Work in <span class="text-primary-600">Action</span>
				</h2>
				<p class="text-xl sm:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
					Explore real-world case studies showcasing how we've helped SMEs transform their
					operations with our expertise across different industries and use cases.
				</p>
				<div class="mt-8">
					<a
						href="/case-studies"
						class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary-500/50"
					>
						View All Case Studies
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
				</div>
			</div>

			<!-- Featured Solutions Carousel -->
			<div class="relative md:-mx-6 lg:mx-0">
				<!-- Carousel Container -->
				<div
					class="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
					on:touchstart={handleTouchStart}
					on:touchend={handleTouchEnd}
				>
					<div
						class="flex transition-transform duration-500 ease-in-out"
						style="transform: translateX(-{currentSlide * 100}%)"
					>
						{#each solutions as solution}
							<div class="w-full flex-shrink-0">
								<div
									class="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-secondary-200 sm:border-2 shadow-lg sm:shadow-xl mx-2 sm:mx-3 md:mx-4 h-full"
								>
									<div
										class="relative bg-gradient-to-br from-primary-50 to-accent-50 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[280px] md:min-h-[380px] lg:min-h-[500px]"
									>
										<img
											src={solution.image}
											alt={solution.title}
											class="max-w-full w-auto h-auto object-contain mx-auto max-h-[180px] sm:max-h-[260px] md:max-h-[360px] lg:max-h-[550px]"
										/>
									</div>
									<div class="p-3 sm:p-4 md:p-6 lg:p-8 text-center">
										<h3
											class="text-lg sm:text-xl md:text-2xl font-display font-bold text-secondary-900 mb-1.5 sm:mb-2 md:mb-3 px-2"
										>
											{solution.title}
										</h3>
										<p
											class="text-sm sm:text-base md:text-lg text-secondary-600 leading-relaxed max-w-2xl mx-auto px-3 sm:px-2"
										>
											{solution.description}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Navigation Arrows -->
				<button
					on:click={() => goToSlide((currentSlide - 1 + solutions.length) % solutions.length)}
					class="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white active:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 active:scale-95 touch-manipulation"
					aria-label="Previous slide"
				>
					<svg
						class="w-5 h-5 sm:w-6 sm:h-6 text-secondary-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button
					on:click={() => goToSlide((currentSlide + 1) % solutions.length)}
					class="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white active:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 active:scale-95 touch-manipulation"
					aria-label="Next slide"
				>
					<svg
						class="w-5 h-5 sm:w-6 sm:h-6 text-secondary-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>

				<!-- Dots Indicator -->
				<div class="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-6 md:mt-8 px-4">
					{#each solutions as _, index}
						<button
							on:click={() => goToSlide(index)}
							class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all touch-manipulation {currentSlide ===
							index
								? 'bg-primary-600 w-5 sm:w-6 md:w-8'
								: 'bg-secondary-300 hover:bg-secondary-400 active:bg-secondary-500'}"
							aria-label="Go to slide {index + 1}"
						></button>
					{/each}
				</div>

				<!-- Mobile Swipe Indicator -->
				<div class="sm:hidden text-center mt-3 text-xs sm:text-sm text-secondary-500 px-4">
					Swipe to navigate
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Focus -->
<section
	class="py-16 relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white"
>
	<!-- Background decorations removed - images now shown prominently in Featured Solutions section -->
	<div class="absolute inset-0">
		<div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="space-y-6">
				<div>
					<h2 class="text-4xl sm:text-5xl font-display font-extrabold mb-6 leading-tight">
						Serving Clients <span
							class="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-300"
							>Internationally</span
						>
					</h2>
				</div>
				<div class="space-y-2">
					<div class="text-gray-300 text-lg">United States</div>
					<div class="text-gray-300 text-lg">Middle East</div>
					<div class="text-gray-300 text-lg">India</div>
				</div>
			</div>
			<div class="relative">
				<div
					class="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 hover:border-white/30 transition-all"
				>
					<h3
						class="text-3xl font-display font-bold mb-8 bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent"
					>
						Why Choose Us?
					</h3>
					<ul class="space-y-6">
						<li class="flex items-start space-x-4 group">
							<div
								class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors"
								>Deep understanding of SME challenges</span
							>
						</li>
						<li class="flex items-start space-x-4 group">
							<div
								class="w-10 h-10 bg-gradient-to-br from-accent-500 to-tertiary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors"
								>Custom solutions, not one-size-fits-all</span
							>
						</li>
						<li class="flex items-start space-x-4 group">
							<div
								class="w-10 h-10 bg-gradient-to-br from-primary-500 to-tertiary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors"
								>Transparent process with continuous feedback</span
							>
						</li>
						<li class="flex items-start space-x-4 group">
							<div
								class="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span class="text-gray-300 text-lg pt-2 group-hover:text-white transition-colors"
								>Ongoing support and maintenance</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	class="py-24 relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white"
>
	<!-- Background decoration removed - dashboard image already prominently shown in Hero section -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl sm:text-6xl font-display font-extrabold mb-8 text-white leading-tight">
				Ready to Transform Your <span
					class="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent"
					>Business?</span
				>
			</h2>
			<p class="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
				Let's discuss how our services can help you grow and thrive in today's digital landscape.
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a
					href="/contact"
					class="group px-10 py-5 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-2"
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
					href="/process"
					class="px-10 py-5 glass border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105"
				>
					Learn Our Process
				</a>
			</div>
		</div>
	</div>
</section>
