<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer
	class="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-gray-300 overflow-hidden"
>
	<div class="absolute inset-0">
		<div class="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
	</div>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
			<!-- Company Info -->
			<div class="col-span-1 md:col-span-2">
				<div class="flex items-center space-x-3 mb-6">
					<div class="relative">
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur opacity-50"
						></div>
						<img src="/logo/logo-icon.svg" alt="Akillu Solutions" class="h-12 w-12 relative z-10" />
					</div>
					<span
						class="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
					>
						Akillu Solutions
					</span>
				</div>
				<p class="text-gray-400 mb-6 max-w-md leading-relaxed">
					Comprehensive software solutions—from custom development and AI services to cloud
					infrastructure and CRM/ERP systems—designed to help SMEs grow and thrive. Serving clients
					internationally, primarily the US, Middle East, and India.
				</p>
				<div class="border-t border-white/10 pt-6">
					<h4 class="text-white font-semibold mb-4 text-sm">Contact</h4>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
						<div class="text-gray-400 text-sm">
							<a
								href="mailto:contact@akillu.com"
								class="hover:text-accent-400 transition-colors break-all">contact@akillu.com</a
							>
						</div>
						<div class="text-gray-400 text-sm">
							<a href="tel:+911234567890" class="hover:text-accent-400 transition-colors"
								>+91 123 456 7890</a
							>
							<span class="text-gray-500"> (India)</span>
						</div>
						<div class="text-gray-400 text-sm">
							<a href="tel:+971501234567" class="hover:text-accent-400 transition-colors"
								>+971 50 123 4567</a
							>
							<span class="text-gray-500"> (UAE)</span>
						</div>
						<div class="text-gray-400 text-sm md:col-span-2 lg:col-span-1">
							<a
								href="https://wa.me/911234567890"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-[#25D366] transition-colors inline-flex items-center gap-2"
							>
								<svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
									/>
								</svg>
								<span>WhatsApp</span>
							</a>
						</div>
					</div>
					<div class="mt-4 pt-3 border-t border-white/5">
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg items-center justify-center text-gray-400 hover:text-accent-400 transition-all group border border-white/10 hover:border-accent-500/50"
							aria-label="LinkedIn"
						>
							<svg
								class="w-4 h-4 group-hover:scale-110 transition-transform"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-white font-display font-bold mb-6 text-lg">Quick Links</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="/services"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Services</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/case-studies"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Case Studies</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/process"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Process</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/pricing"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Pricing & FAQ</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/about"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>About</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/contact"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Contact</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="text-white font-display font-bold mb-6 text-lg">Services</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="/services#custom-software"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Custom Software</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#web-portal"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Web & Portal Development</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#website"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Website Development</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#mobile-apps"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Mobile App Development</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#ai-services"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>AI Services</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#automation"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Automation Solutions</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#database"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Data & Backend Systems</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#custom-crm"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>CRM & ERP Solutions</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
					<li>
						<a
							href="/services#cloud-development"
							class="text-gray-400 hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
						>
							<span>Cloud & Infrastructure</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
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
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-white/10 mt-12 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-gray-500 text-sm">
					&copy; {currentYear} Akillu Solutions. All rights reserved.
				</p>
				<div class="flex flex-wrap gap-6 text-sm">
					<a href="/privacy" class="text-gray-400 hover:text-accent-400 transition-colors"
						>Privacy Policy</a
					>
					<a href="/terms" class="text-gray-400 hover:text-accent-400 transition-colors"
						>Terms of Service</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
