<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let mobileMenuOpen = false;
	let scrolled = false;

	$: currentPath = $page?.url?.pathname || '';

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/case-studies', label: 'Case Studies' },
		{ href: '/process', label: 'Process' },
		{ href: '/pricing', label: 'Pricing & FAQ' },
		{ href: '/about', label: 'About' }
	];
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {scrolled
		? 'glass-header shadow-xl border-b border-white/20'
		: 'bg-transparent'}"
>
	<nav class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<!-- Logo and Navigation Items -->
			<div class="flex items-center space-x-8">
				<!-- Logo -->
				<a href="/" class="flex items-center space-x-3 group">
					<span class="flex items-baseline gap-1.5">
						<span
							class="text-2xl sm:text-3xl font-bold text-primary-700 group-hover:text-primary-600 transition-colors tracking-wide"
							style="font-family: var(--font-outfit);"
						>
							Akillu
						</span>
						<div class="relative">
							<!-- Logo with filter for outline effect -->
							<img
								src="/logo/logo-icon.svg"
								alt="Akillu"
								class="h-10 w-10 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_0_rgba(37,99,235,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(13,148,136,0.4)]"
							/>
						</div>
					</span>
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="px-4 py-2 text-secondary-700 hover:text-primary-600 font-medium transition-all relative group rounded-lg {currentPath ===
							item.href
								? 'text-primary-600 bg-primary-50'
								: 'hover:bg-secondary-100'}"
						>
							{item.label}
							<span
								class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all group-hover:w-3/4 {currentPath ===
								item.href
									? 'w-3/4'
									: ''}"
							></span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact Us Button and Mobile Menu -->
			<div class="flex items-center space-x-4">
				<!-- Desktop Contact Us Button -->
				<a
					href="/contact"
					class="hidden md:block px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
				>
					Contact Us
				</a>

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="md:hidden p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100/50 transition-colors"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden pb-4 space-y-2 mt-2 glass rounded-xl p-4 border border-white/20">
				{#each navItems as item}
					<a
						href={item.href}
						class="block px-4 py-3 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50 font-medium transition-all {currentPath ===
						item.href
							? 'text-primary-600 bg-primary-50 border border-primary-200'
							: ''}"
						on:click={() => (mobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="block px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-center hover:from-primary-700 hover:to-primary-800 transition-all mt-2"
					on:click={() => (mobileMenuOpen = false)}
				>
					Contact Us
				</a>
			</div>
		{/if}
	</nav>
</header>
