<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { contact, getEmailLink } from '$lib/utils/contact';
</script>

<SEOHead
	seoData={{
		title: 'Privacy Policy - Akillu Solutions',
		description:
			'Privacy Policy for Akillu Solutions. Learn how we collect, use, and protect your personal information.',
		noindex: true
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
				Privacy Policy
			</h1>
			<p class="text-xl text-primary-100 leading-relaxed">
				Your privacy is important to us. This policy explains how we collect, use, and protect your
				information.
			</p>
		</div>
	</div>
</section>

<!-- Privacy Policy Content -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto prose prose-lg">
			<div class="text-secondary-600 leading-relaxed space-y-8">
				<div>
					<p class="text-sm text-secondary-500 mb-8">
						Last updated: {new Date().toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">1. Introduction</h2>
					<p>
						Akillu Solutions ("we," "our," or "us") is committed to protecting your privacy. This
						Privacy Policy explains how we collect, use, disclose, and safeguard your information
						when you visit our website or use our services.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						2. Information We Collect
					</h2>
					<p class="mb-3">
						We may collect information about you in a variety of ways. The information we may
						collect includes:
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							<strong>Personal Data:</strong> Name, email address, phone number, company name, and other
							contact information you provide when contacting us or requesting our services.
						</li>
						<li>
							<strong>Usage Data:</strong> Information about how you access and use our website, including
							your IP address, browser type, pages visited, and time spent on pages.
						</li>
						<li>
							<strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking
							technologies to track activity on our website and store certain information.
						</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						3. How We Use Your Information
					</h2>
					<p class="mb-3">We use the information we collect for various purposes, including:</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>To provide, maintain, and improve our services</li>
						<li>To respond to your inquiries and provide customer support</li>
						<li>
							To send you updates, newsletters, and marketing communications (with your consent)
						</li>
						<li>To analyze usage patterns and improve our website</li>
						<li>To comply with legal obligations</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						4. Data Sharing and Disclosure
					</h2>
					<p class="mb-3">
						We do not sell, trade, or rent your personal information to third parties. We may share
						your information only in the following circumstances:
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							With service providers who assist us in operating our website and conducting our
							business
						</li>
						<li>When required by law or to protect our rights</li>
						<li>In connection with a business transfer or merger</li>
						<li>With your explicit consent</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">5. Data Security</h2>
					<p>
						We implement appropriate technical and organizational security measures to protect your
						personal information against unauthorized access, alteration, disclosure, or
						destruction. However, no method of transmission over the Internet or electronic storage
						is 100% secure.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">6. Your Rights</h2>
					<p class="mb-3">
						Depending on your location, you may have certain rights regarding your personal
						information, including:
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>The right to access your personal data</li>
						<li>The right to rectify inaccurate data</li>
						<li>The right to request deletion of your data</li>
						<li>The right to object to processing of your data</li>
						<li>The right to data portability</li>
						<li>The right to withdraw consent</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">7. Cookies</h2>
					<p>
						Our website may use cookies to enhance your experience. You can choose to disable
						cookies through your browser settings, though this may affect website functionality.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						8. Third-Party Links
					</h2>
					<p>
						Our website may contain links to third-party websites. We are not responsible for the
						privacy practices of these external sites. We encourage you to review their privacy
						policies.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						9. Children's Privacy
					</h2>
					<p>
						Our services are not directed to individuals under the age of 18. We do not knowingly
						collect personal information from children.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						10. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy from time to time. We will notify you of any changes
						by posting the new Privacy Policy on this page and updating the "Last updated" date.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">11. Contact Us</h2>
					<p>If you have any questions about this Privacy Policy, please contact us at:</p>
					<p class="mt-4">
						<strong>Email:</strong>
						<a href={getEmailLink()} class="text-primary-600 hover:text-primary-700 underline"
							>{contact.email}</a
						><br />
						<strong>Website:</strong>
						<a href="/contact" class="text-primary-600 hover:text-primary-700 underline"
							>Contact Page</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
