<script lang="ts">
	import { onMount } from 'svelte';
	import { icons } from '$lib/utils/icons';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const steps = [
		{
			number: '01',
			title: 'Understanding the Requirements',
			description:
				'We engage directly with your team and users, working alongside them to understand the real problems that need solving. This hands-on approach ensures we capture the actual pain points, not just perceived ones.',
			icon: icons.search
		},
		{
			number: '02',
			title: 'Plan',
			description:
				'After thorough analysis, we provide detailed research and analytics on the problems we are solving. We create basic wireframes and propose a comprehensive software solution tailored to your needs.',
			icon: icons.plan
		},
		{
			number: '03',
			title: 'Prototyping & Design',
			description:
				'We prototype the UX design and build the UI, keeping you in the loop throughout the entire process. Your feedback is incorporated at every stage to ensure the solution meets your expectations.',
			icon: icons.design
		},
		{
			number: '04',
			title: 'Building the Product',
			description:
				'With the design approved, we build the product using modern technologies and best practices. We maintain regular communication and provide updates on progress.',
			icon: icons.build
		},
		{
			number: '05',
			title: 'Handover',
			description:
				'After delivery, we work closely with you for a couple of weeks to gather feedback and provide improvements based on the initial scope. Note: New feature requests are handled separately from this feedback phase.',
			icon: icons.handshake
		},
		{
			number: '06',
			title: 'Support & Maintenance',
			description:
				'We offer free support and maintenance for the first year. From the second year onwards, support is provided on a yearly cost-based model to ensure your software continues to perform optimally.',
			icon: icons.support
		}
	];
</script>

<SEOHead
	seoData={{
		title: 'Our Process - Akillu Solutions',
		description:
			'Learn about our 6-step process for delivering custom software solutions: from understanding requirements to ongoing support.',
		keywords: 'software development process, custom software workflow, development methodology'
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
				Our Process
			</h1>
			<p class="text-xl text-primary-100 leading-relaxed">
				A transparent, collaborative approach to delivering software solutions that truly solve your
				business problems.
			</p>
		</div>
	</div>
</section>

<!-- Process Steps -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
	<div class="absolute inset-0 gradient-mesh opacity-50 overflow-hidden"></div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-4xl mx-auto">
			<div class="relative pl-4 lg:pl-8 overflow-visible">
				<!-- Main Vertical Line (Tree Trunk) -->
				<div
					class="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-300 rounded-full opacity-40"
					style="height: 100%;"
				></div>

				<div class="space-y-24">
					{#each steps as step, index}
						<div
							class="relative group overflow-visible"
							class:opacity-0={!mounted}
							class:translate-y-8={!mounted}
							class:transition-all={mounted}
							style="transition-delay: {index * 150}ms"
						>
							<!-- Horizontal Branch Line (Tree Branch) - Dashed -->
							<div
								class="hidden lg:block absolute -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
								style="left: -2rem; top: 2.5rem; width: calc(2rem + 2.5rem + 0.5rem); height: 0; border-top: 2px dashed #476787;"
							></div>

							<div class="flex items-start gap-6 lg:gap-8">
								<!-- Step Number & Icon -->
								<div class="flex-shrink-0 relative overflow-visible">
									<!-- Icon Container -->
									<div class="relative">
										<!-- Glow Effect -->
										<div
											class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/30 via-accent-400/30 to-primary-400/30 blur-xl group-hover:blur-2xl group-hover:opacity-75 transition-all duration-500 -z-10"
											style="transform: scale(1.2);"
										></div>
										<!-- Icon Box -->
										<div
											class="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/40 group-hover:scale-110 transition-all duration-300 z-10 p-3 lg:p-4"
										>
											<!-- Inner White Circle for Contrast -->
											<div class="absolute inset-1 rounded-xl bg-white/10 backdrop-blur-sm"></div>
											<!-- Icon -->
											<div
												class="relative text-white z-10 flex items-center justify-center"
												style="width: 28px; height: 28px;"
											>
												<div class="w-full h-full flex items-center justify-center">
													{@html step.icon}
												</div>
											</div>
										</div>
									</div>
									<!-- Step Number -->
									<div
										class="absolute left-1/2 text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 bg-clip-text text-transparent -z-10 opacity-40 group-hover:opacity-70 transition-opacity whitespace-nowrap"
										style="transform: translateX(-50%); top: 5.5rem;"
									>
										{step.number}
									</div>
								</div>

								<!-- Content -->
								<div class="flex-grow pt-2">
									<div
										class="bg-white rounded-2xl p-6 lg:p-8 border-2 border-secondary-200 hover:border-primary-400/50 shadow-md hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1.5"
									>
										<h2
											class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors duration-300"
										>
											{step.title}
										</h2>
										<p class="text-base lg:text-lg text-secondary-600 leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Key Principles -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
	<div class="absolute inset-0 gradient-mesh opacity-40"></div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl sm:text-5xl font-display font-bold text-secondary-900 mb-4">
					<span
						class="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent"
					>
						Our Core Principles
					</span>
				</h2>
				<div
					class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
				></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
				<div
					class="bg-white rounded-2xl p-6 lg:p-8 border-2 border-secondary-200 hover:border-primary-400/50 shadow-md hover:shadow-2xl hover:shadow-primary-500/10 text-center transition-all duration-300 hover:-translate-y-1.5 group"
				>
					<div
						class="w-20 h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/30 group-hover:scale-110 transition-all duration-300"
					>
						<div class="text-white scale-110">
							{@html icons.users}
						</div>
					</div>
					<h3
						class="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors duration-300"
					>
						User-Centric
					</h3>
					<p class="text-secondary-600 leading-relaxed">
						We work directly with end-users to understand real problems, not assumptions.
					</p>
				</div>
				<div
					class="bg-white rounded-2xl p-6 lg:p-8 border-2 border-secondary-200 hover:border-accent-400/50 shadow-md hover:shadow-2xl hover:shadow-accent-500/10 text-center transition-all duration-300 hover:-translate-y-1.5 group"
				>
					<div
						class="w-20 h-20 bg-gradient-to-br from-accent-500 via-accent-600 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-accent-500/30 group-hover:scale-110 transition-all duration-300"
					>
						<div class="text-white scale-110">
							{@html icons.refresh}
						</div>
					</div>
					<h3
						class="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-accent-700 transition-colors duration-300"
					>
						Transparent
					</h3>
					<p class="text-secondary-600 leading-relaxed">
						You are kept in the loop at every stage with regular updates and feedback sessions.
					</p>
				</div>
				<div
					class="bg-white rounded-2xl p-6 lg:p-8 border-2 border-secondary-200 hover:border-primary-400/50 shadow-md hover:shadow-2xl hover:shadow-primary-500/10 text-center transition-all duration-300 hover:-translate-y-1.5 group"
				>
					<div
						class="w-20 h-20 bg-gradient-to-br from-primary-500 via-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/30 group-hover:scale-110 transition-all duration-300"
					>
						<div class="text-white scale-110">
							{@html icons.target}
						</div>
					</div>
					<h3
						class="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors duration-300"
					>
						Focused
					</h3>
					<p class="text-secondary-600 leading-relaxed">
						We stay focused on the initial scope, with clear boundaries for improvements vs. new
						features.
					</p>
				</div>
			</div>
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
			Ready to Start Your Project?
		</h2>
		<p class="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
			Let us begin with understanding your requirements and working together to solve your business
			challenges.
		</p>
		<a
			href="/contact"
			class="group inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 font-bold rounded-xl hover:bg-accent-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50 duration-300"
		>
			Get Started
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
