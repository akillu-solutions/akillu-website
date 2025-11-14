<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import StructuredData from '$lib/components/StructuredData.svelte';
	import { contact, getEmailLink, getPhoneLink, getWhatsAppLink } from '$lib/utils/contact';
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
				Get in Touch
			</h1>
			<p class="text-xl text-primary-100 leading-relaxed">
				Ready to transform your business? Let's discuss how we can help you achieve your goals.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<!-- Contact Information -->
			<div class="text-center mb-12">
				<h2 class="text-4xl font-display font-bold text-secondary-900 mb-6">
					Let's Start a Conversation
				</h2>
				<p class="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
					Whether you're looking to automate processes, build custom software, or integrate AI into
					your operations, we're here to help. Reach out to us directly using the contact
					information below.
				</p>
			</div>

			<!-- Contact Methods Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				<!-- Phone Card -->
				<div
					class="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary-200 hover:border-primary-300 transition-all hover:shadow-xl hover-lift"
				>
					<div
						class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 mx-auto"
					>
						<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-display font-bold text-secondary-900 mb-3 text-center">Phone</h3>
					<div class="space-y-2">
						{#each contact.phones as phone}
							<p class="text-center">
								<a
									href={getPhoneLink(phone)}
									class="text-primary-600 hover:text-primary-700 font-semibold transition-colors text-sm"
									>{phone.display}</a
								>
								<span class="text-secondary-500 text-xs block">({phone.country})</span>
							</p>
						{/each}
					</div>
				</div>

				<!-- Email Card -->
				<div
					class="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary-200 hover:border-accent-300 transition-all hover:shadow-xl hover-lift"
				>
					<div
						class="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 mx-auto"
					>
						<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-display font-bold text-secondary-900 mb-3 text-center">Email</h3>
					<p class="text-center mb-2">
						<a
							href={getEmailLink()}
							class="text-accent-600 hover:text-accent-700 font-semibold transition-colors text-sm break-all"
							>{contact.email}</a
						>
					</p>
					<p class="text-xs text-secondary-500 text-center">
						We respond within {contact.responseTime}
					</p>
				</div>

				<!-- WhatsApp Card -->
				<div
					class="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary-200 hover:border-[#25D366]/30 transition-all hover:shadow-xl hover-lift"
				>
					<div
						class="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center mb-4 mx-auto"
					>
						<svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-display font-bold text-secondary-900 mb-3 text-center">
						WhatsApp
					</h3>
					<p class="text-center mb-2">
						<a
							href={getWhatsAppLink()}
							target="_blank"
							rel="noopener noreferrer"
							class="text-[#25D366] hover:text-[#20BA5A] font-semibold transition-colors text-sm"
							>{contact.whatsapp.display}</a
						>
					</p>
					<p class="text-xs text-secondary-500 text-center">Chat with us instantly</p>
				</div>
			</div>

			<!-- Info Cards Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				<!-- What Happens Next Card -->
				<div
					class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border-2 border-primary-100"
				>
					<div class="flex items-center mb-6">
						<div
							class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mr-4"
						>
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-display font-bold text-secondary-900">What Happens Next?</h3>
					</div>
					<ul class="space-y-4">
						<li class="flex items-start space-x-3">
							<div
								class="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
							>
								1
							</div>
							<span class="text-secondary-700 pt-1">We'll review your message and requirements</span
							>
						</li>
						<li class="flex items-start space-x-3">
							<div
								class="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
							>
								2
							</div>
							<span class="text-secondary-700 pt-1">Schedule a call to discuss your project</span>
						</li>
						<li class="flex items-start space-x-3">
							<div
								class="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
							>
								3
							</div>
							<span class="text-secondary-700 pt-1">Provide a detailed proposal and timeline</span>
						</li>
					</ul>
				</div>

				<!-- Response Time Card -->
				<div
					class="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-lg border-2 border-accent-100"
				>
					<div class="flex items-center mb-6">
						<div
							class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4"
						>
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-display font-bold text-secondary-900">Response Time</h3>
					</div>
					<p class="text-secondary-700 mb-6 leading-relaxed">
						We typically respond to all inquiries within <span class="font-semibold text-accent-700"
							>{contact.responseTime}</span
						> during business days. For urgent matters, please call us directly or message us on WhatsApp.
					</p>
					<div class="flex flex-col gap-3">
						{#each contact.phones as phone}
							<a
								href={getPhoneLink(phone)}
								class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-md"
							>
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								Call {phone.country}
							</a>
						{/each}
						<a
							href={getWhatsAppLink()}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-all transform hover:scale-105 shadow-md"
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
