<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';
</script>

<SEOHead
	seoData={{
		title: 'Contact Us - Akillu Solutions',
		description:
			"Get in touch with Akillu Solutions. We're here to help transform your business with custom software solutions."
	}}
/>

<StructuredData type="Organization" />

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-5xl font-display font-bold mb-6">Get in Touch</h1>
			<p class="text-xl text-primary-100">
				Ready to transform your business? Let's discuss how we can help you achieve your goals.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div>
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-8">
					Let's Start a Conversation
				</h2>
				<p class="text-lg text-secondary-600 mb-8 leading-relaxed">
					Whether you're looking to automate processes, build custom software, or integrate AI into
					your operations, we're here to help. Fill out the form or reach out to us directly.
				</p>

				<div class="space-y-6 mb-8">
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
						>
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-secondary-900 mb-2">Phone</h3>
							<p class="text-secondary-600 mb-1">
								<a href="tel:+911234567890" class="hover:text-primary-600 transition-colors"
									>+91 123 456 7890</a
								>
								<span class="text-secondary-500"> (India)</span>
							</p>
							<p class="text-secondary-600 mb-1">
								<a href="tel:+971501234567" class="hover:text-primary-600 transition-colors"
									>+971 50 123 4567</a
								>
								<span class="text-secondary-500"> (UAE)</span>
							</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
						>
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-secondary-900 mb-2">Email</h3>
							<p class="text-secondary-600 mb-1">
								<a href="mailto:contact@akillu.com" class="hover:text-primary-600 transition-colors"
									>contact@akillu.com</a
								>
							</p>
							<p class="text-sm text-secondary-500">We respond within 24 hours</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0"
						>
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-secondary-900 mb-2">WhatsApp</h3>
							<p class="text-secondary-600 mb-1">
								<a
									href="https://wa.me/911234567890"
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-[#25D366] transition-colors">+91 123 456 7890</a
								>
							</p>
							<p class="text-sm text-secondary-500">Chat with us instantly</p>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg mb-6">
					<h3 class="text-xl font-display font-semibold text-secondary-900 mb-4">
						What Happens Next?
					</h3>
					<ul class="space-y-3">
						<li class="flex items-start space-x-3">
							<span class="text-primary-600 font-bold">1.</span>
							<span class="text-secondary-600">We'll review your message and requirements</span>
						</li>
						<li class="flex items-start space-x-3">
							<span class="text-primary-600 font-bold">2.</span>
							<span class="text-secondary-600">Schedule a call to discuss your project</span>
						</li>
						<li class="flex items-start space-x-3">
							<span class="text-primary-600 font-bold">3.</span>
							<span class="text-secondary-600">Provide a detailed proposal and timeline</span>
						</li>
					</ul>
				</div>

				<div
					class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200"
				>
					<h3 class="text-xl font-display font-semibold text-secondary-900 mb-3">Response Time</h3>
					<p class="text-secondary-600 mb-4">
						We typically respond to all inquiries within 24 hours during business days. For urgent
						matters, please call us directly or message us on WhatsApp.
					</p>
					<div class="flex flex-col sm:flex-row gap-3">
						<a
							href="tel:+911234567890"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							Call India
						</a>
						<a
							href="tel:+971501234567"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							Call UAE
						</a>
						<a
							href="https://wa.me/911234567890"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-all transform hover:scale-105"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
								/>
							</svg>
							Message on WhatsApp
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">
			Prefer to Learn More First?
		</h2>
		<p class="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
			Explore our services and process to understand how we can help transform your business.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/services"
				class="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
			>
				View Services
			</a>
			<a
				href="/process"
				class="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all"
			>
				Our Process
			</a>
		</div>
	</div>
</section>
