<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="relative overflow-hidden section-pattern py-24 lg:py-32 min-h-[90vh] flex items-center bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20"
>
	<!-- Subtle Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 left-10 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl"></div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<!-- Content -->
			<div
				class="text-center lg:text-left space-y-8"
				class:opacity-0={!mounted}
				class:translate-y-8={!mounted}
				class:transition-all={mounted}
				class:duration-700={mounted}
			>
				<h1
					class="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-secondary-900 mb-6 leading-[1.1]"
				>
					Empowering SMEs with
					<span class="block mt-2 text-gradient">Custom Software Solutions</span>
				</h1>
				<p
					class="text-xl sm:text-2xl text-secondary-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
				>
					We help SMEs grow with comprehensive software solutions ranging from custom development,
					AI, and automation to database management, cloud, and CRM/ERP systems.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<a
						href="/contact"
						class="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 relative overflow-hidden border-2 border-primary-500/20 hover:border-primary-400/40"
					>
						<span class="relative z-10">Get Started</span>
						<div
							class="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"
						></div>
					</a>
					<a
						href="/services"
						class="px-8 py-4 glass text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50/50 transition-all transform hover:scale-105"
					>
						Our Services
					</a>
				</div>
			</div>

			<!-- Visual Element -->
			<div
				class="relative"
				class:opacity-0={!mounted}
				class:translate-x-8={!mounted}
				class:transition-all={mounted}
				class:duration-700={mounted}
				class:delay-200={mounted}
			>
				<div class="relative z-10">
					<div
						class="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12 border-2 border-primary-200/50"
					>
						<div
							class="absolute -inset-1 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-3xl blur-2xl"
						></div>
						<div class="relative">
							<img
								src="/illustrations/building-product.svg"
								alt="Building Custom Software Solutions"
								class="w-full max-w-lg mx-auto drop-shadow-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
