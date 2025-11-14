<script lang="ts">
	import { icons } from '$lib/utils/icons';
</script>

<svelte:head>
	<title>About Us - Akillu Solutions</title>
	<meta
		name="description"
		content="Learn about Akillu Solutions - a software consultancy serving clients internationally, primarily the US, Middle East, and India."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-5xl font-display font-bold mb-6">About Akillu Solutions</h1>
			<p class="text-xl text-primary-100">
				Empowering SMEs with innovative software solutions that drive growth and efficiency.
			</p>
		</div>
	</div>
</section>

<!-- Company Story -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
				<div>
					<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">Our Story</h2>
					<p class="text-lg text-secondary-600 mb-4 leading-relaxed">
						Akillu Solutions is a software service consultancy organization dedicated to helping
						small and medium enterprises (SMEs) transform their operations through technology.
					</p>
					<p class="text-lg text-secondary-600 mb-4 leading-relaxed">
						We understand that SMEs face unique challenges and need solutions that are both
						affordable and tailored to their specific needs. That's why we take a hands-on approach,
						working directly with your team to understand the real problems before building
						solutions.
					</p>
					<p class="text-lg text-secondary-600 leading-relaxed">
						Our commitment to transparency, quality, and ongoing support sets us apart. We don't
						just deliver software—we partner with you for long-term success.
					</p>
				</div>
				<div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12">
					<img src="/logo/logo-full.svg" alt="Akillu Solutions" class="w-full max-w-sm mx-auto" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-display font-bold text-secondary-900 mb-12 text-center">
				Our Core Values
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center p-6 rounded-xl bg-primary-50">
					<div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-secondary-900 mb-3">Transparency</h3>
					<p class="text-secondary-600">
						We believe in open communication and keeping you informed at every step of the process.
					</p>
				</div>
				<div class="text-center p-6 rounded-xl bg-accent-50">
					<div class="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-secondary-900 mb-3">Innovation</h3>
					<p class="text-secondary-600">
						We leverage cutting-edge technologies to deliver solutions that give you a competitive edge.
					</p>
				</div>
				<div class="text-center p-6 rounded-xl bg-tertiary-50">
					<div class="w-16 h-16 bg-tertiary-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-secondary-900 mb-3">Partnership</h3>
					<p class="text-secondary-600">
						We're not just vendors—we're your technology partners committed to your long-term success.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Partners -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-display font-bold text-secondary-900 mb-12 text-center">
				Partner With Us
			</h2>
			<div class="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
				<div class="text-center mb-8">
					<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					<h3 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						Become a Partner Agent
					</h3>
					<p class="text-xl text-secondary-600 leading-relaxed">
						Connect businesses with custom software solutions and earn competitive commissions while helping SMEs transform their operations.
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					<div class="p-6 rounded-xl bg-accent-50 border border-accent-200">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h4 class="text-xl font-semibold text-secondary-900">Competitive Commissions</h4>
						</div>
						<p class="text-secondary-600">
							Earn attractive commissions for every successful client referral. We value our partners and ensure fair compensation for your efforts.
						</p>
					</div>

					<div class="p-6 rounded-xl bg-primary-50 border border-primary-200">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h4 class="text-xl font-semibold text-secondary-900">Easy Process</h4>
						</div>
						<p class="text-secondary-600">
							Simple referral process with clear guidelines. We handle all client interactions and project delivery, so you can focus on building relationships.
						</p>
					</div>

					<div class="p-6 rounded-xl bg-tertiary-50 border border-tertiary-200">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 bg-tertiary-600 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
								</svg>
							</div>
							<h4 class="text-xl font-semibold text-secondary-900">Growing Market</h4>
						</div>
						<p class="text-secondary-600">
							Tap into the growing demand for custom software solutions among SMEs internationally, including the US, Middle East, and India.
						</p>
					</div>
				</div>

				<div class="mt-12 text-center">
					<p class="text-lg text-secondary-700 mb-6">
						Interested in becoming a partner agent? Get in touch with us to learn more about our partnership program.
					</p>
					<a
						href="/contact"
						class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg"
					>
						Contact Us to Partner
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Presence -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-display font-bold text-secondary-900 mb-12 text-center">
				Our Global Presence
			</h2>
			<p class="text-xl text-secondary-600 mb-12 text-center leading-relaxed">
				We serve clients internationally, primarily in the US, Middle East, and India.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-white rounded-xl p-8 shadow-lg">
					<div class="flex items-center space-x-4 mb-6">
						<div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-2xl font-display font-semibold text-secondary-900">United States</h3>
					</div>
					<p class="text-secondary-600 leading-relaxed">
						Serving clients across the US with our expertise in custom software development, AI services, and cloud solutions.
					</p>
				</div>
				<div class="bg-white rounded-xl p-8 shadow-lg">
					<div class="flex items-center space-x-4 mb-6">
						<div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
							{@html icons.uae}
						</div>
						<h3 class="text-2xl font-display font-semibold text-secondary-900">Middle East</h3>
					</div>
					<p class="text-secondary-600 leading-relaxed">
						Serving clients throughout the Middle East, bringing innovative software solutions to SMEs in the region.
					</p>
				</div>
				<div class="bg-white rounded-xl p-8 shadow-lg">
					<div class="flex items-center space-x-4 mb-6">
						<div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
							{@html icons.india}
						</div>
						<h3 class="text-2xl font-display font-semibold text-secondary-900">India</h3>
					</div>
					<p class="text-secondary-600 leading-relaxed">
						We have an established presence serving SMEs across India with deep understanding of the local market.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Target Audience -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-display font-bold text-secondary-900 mb-12 text-center">
				Who We Serve
			</h2>
			<div
				class="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-2xl p-12 text-white"
			>
				<div class="flex items-center space-x-4 mb-6">
					<div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
						{@html icons.building}
					</div>
					<h3 class="text-3xl font-display font-semibold">Small & Medium Enterprises (SMEs)</h3>
				</div>
				<p class="text-xl text-gray-300 leading-relaxed mb-6">
					We specialize in serving SMEs because we understand that these businesses need solutions
					that are:
				</p>
				<ul class="space-y-4">
					<li class="flex items-start space-x-3">
						<svg
							class="w-6 h-6 text-primary-400 flex-shrink-0 mt-1"
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
						<span class="text-gray-300 text-lg">
							<strong>Cost-effective:</strong> Solutions that provide maximum value without breaking
							the budget
						</span>
					</li>
					<li class="flex items-start space-x-3">
						<svg
							class="w-6 h-6 text-primary-400 flex-shrink-0 mt-1"
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
						<span class="text-gray-300 text-lg">
							<strong>Tailored:</strong> Custom-built to fit your specific business processes
						</span>
					</li>
					<li class="flex items-start space-x-3">
						<svg
							class="w-6 h-6 text-primary-400 flex-shrink-0 mt-1"
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
						<span class="text-gray-300 text-lg">
							<strong>Scalable:</strong> Grow with your business as you expand
						</span>
					</li>
					<li class="flex items-start space-x-3">
						<svg
							class="w-6 h-6 text-primary-400 flex-shrink-0 mt-1"
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
						<span class="text-gray-300 text-lg">
							<strong>Supported:</strong> Ongoing maintenance and support to keep your systems running
							smoothly
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-display font-bold mb-6">Let's Work Together</h2>
		<p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
			Ready to transform your business with custom software solutions? Get in touch with us today.
		</p>
		<a
			href="/contact"
			class="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
		>
			Contact Us
		</a>
	</div>
</section>
