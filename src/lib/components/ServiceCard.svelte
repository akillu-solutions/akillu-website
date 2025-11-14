<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string | undefined = undefined;
	export let image: string | undefined = undefined;
	export let delay: number = 0;
</script>

<div
	class="card-informational p-6 sm:p-8 h-full flex flex-col"
	style="animation-delay: {delay}ms"
>
	{#if image}
		<div class="mb-5 sm:mb-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 p-4 sm:p-6">
			<img src={image} alt={title} class="w-full h-32 sm:h-40 object-contain" />
		</div>
	{:else if icon}
		<div
			class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6"
		>
			<div class="text-white scale-110">
				{@html icon}
			</div>
		</div>
	{/if}
	<h3 class="text-xl sm:text-2xl font-display font-bold text-secondary-900 mb-3 sm:mb-4">
		{title}
	</h3>
	<p class="text-sm sm:text-base text-secondary-600 leading-relaxed flex-grow">
		{description}
	</p>
</div>
