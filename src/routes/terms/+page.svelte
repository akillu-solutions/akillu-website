<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { contact, getEmailLink } from '$lib/utils/contact';
</script>

<SEOHead
	seoData={{
		title: 'Terms of Service - Akillu Solutions',
		description:
			'Terms of Service for Akillu Solutions. Read our terms and conditions for using our website and services.',
		noindex: true
	}}
/>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-5xl font-display font-bold mb-6">Terms of Service</h1>
			<p class="text-xl text-primary-100">
				Please read these terms carefully before using our website or services.
			</p>
		</div>
	</div>
</section>

<!-- Terms of Service Content -->
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
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						1. Agreement to Terms
					</h2>
					<p>
						By accessing or using the Akillu Solutions website and services, you agree to be bound
						by these Terms of Service and all applicable laws and regulations. If you do not agree
						with any of these terms, you are prohibited from using or accessing this site.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">2. Use License</h2>
					<p class="mb-3">
						Permission is granted to temporarily access the materials on Akillu Solutions' website
						for personal, non-commercial transitory viewing only. This is the grant of a license,
						not a transfer of title, and under this license you may not:
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>Modify or copy the materials</li>
						<li>Use the materials for any commercial purpose or for any public display</li>
						<li>Attempt to reverse engineer any software contained on the website</li>
						<li>Remove any copyright or other proprietary notations from the materials</li>
						<li>
							Transfer the materials to another person or "mirror" the materials on any other server
						</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">3. Services</h2>
					<p class="mb-3">
						Akillu Solutions provides custom software development, automation solutions, AI
						integration, and related services. All services are provided subject to:
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							Separate service agreements or contracts that will be executed for specific projects
						</li>
						<li>Our standard terms and conditions for software development services</li>
						<li>Payment terms as agreed upon in individual project contracts</li>
					</ul>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						4. Intellectual Property
					</h2>
					<p>
						All content, features, and functionality of the website, including but not limited to
						text, graphics, logos, icons, images, and software, are the exclusive property of Akillu
						Solutions or its licensors and are protected by copyright, trademark, and other
						intellectual property laws.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">5. User Content</h2>
					<p>
						If you submit any content to us through our website or services, you grant us a
						non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify,
						and distribute such content for the purpose of providing our services and improving our
						business.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">6. Disclaimer</h2>
					<p>
						The materials on Akillu Solutions' website are provided on an 'as is' basis. Akillu
						Solutions makes no warranties, expressed or implied, and hereby disclaims and negates
						all other warranties including, without limitation, implied warranties or conditions of
						merchantability, fitness for a particular purpose, or non-infringement of intellectual
						property or other violation of rights.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">7. Limitations</h2>
					<p>
						In no event shall Akillu Solutions or its suppliers be liable for any damages
						(including, without limitation, damages for loss of data or profit, or due to business
						interruption) arising out of the use or inability to use the materials on Akillu
						Solutions' website, even if Akillu Solutions or an authorized representative has been
						notified orally or in writing of the possibility of such damage.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						8. Accuracy of Materials
					</h2>
					<p>
						The materials appearing on Akillu Solutions' website could include technical,
						typographical, or photographic errors. Akillu Solutions does not warrant that any of the
						materials on its website are accurate, complete, or current. Akillu Solutions may make
						changes to the materials contained on its website at any time without notice.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">9. Links</h2>
					<p>
						Akillu Solutions has not reviewed all of the sites linked to its website and is not
						responsible for the contents of any such linked site. The inclusion of any link does not
						imply endorsement by Akillu Solutions of the site. Use of any such linked website is at
						the user's own risk.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">10. Modifications</h2>
					<p>
						Akillu Solutions may revise these terms of service for its website at any time without
						notice. By using this website you are agreeing to be bound by the then current version
						of these terms of service.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">11. Governing Law</h2>
					<p>
						These terms and conditions are governed by and construed in accordance with the laws of
						India and you irrevocably submit to the exclusive jurisdiction of the courts in that
						location.
					</p>
				</div>

				<div>
					<h2 class="text-3xl font-display font-bold text-secondary-900 mb-4">
						12. Contact Information
					</h2>
					<p>If you have any questions about these Terms of Service, please contact us at:</p>
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
