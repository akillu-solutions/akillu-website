<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = false;
	let showCTA = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 300;
			showCTA =
				window.scrollY > 300 &&
				window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if showCTA}
	<div
		class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 {scrolled
			? 'translate-y-0'
			: 'translate-y-full'}"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<div class="text-center sm:text-left">
					<p class="text-lg font-semibold text-secondary-900">Ready to transform your business?</p>
					<p class="text-sm text-secondary-600">Let's discuss your project today.</p>
				</div>
				<div class="flex gap-3">
					<a
						href="/contact"
						class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
					>
						Get Started
					</a>
					<a
						href="/services"
						class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all whitespace-nowrap"
					>
						Our Services
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
