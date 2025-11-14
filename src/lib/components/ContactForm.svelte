<script lang="ts">
	let name = '';
	let email = '';
	let phone = '';
	let company = '';
	let message = '';
	let submitted = false;
	let submitting = false;

	async function handleSubmit() {
		submitting = true;
		// In a real application, this would submit to a backend API
		// For now, we'll just simulate a submission
		await new Promise((resolve) => setTimeout(resolve, 1000));
		submitted = true;
		submitting = false;
		name = '';
		email = '';
		phone = '';
		company = '';
		message = '';
	}
</script>

<div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
	{#if submitted}
		<div class="text-center py-8">
			<div
				class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
			>
				<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<h3 class="text-2xl font-display font-semibold text-secondary-900 mb-2">Thank You!</h3>
			<p class="text-secondary-600">We've received your message and will get back to you soon.</p>
		</div>
	{:else}
		<h2 class="text-3xl font-display font-bold text-secondary-900 mb-8">Send us a Message</h2>
		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<div>
				<label for="name" class="block text-sm font-medium text-secondary-700 mb-2"> Name * </label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
					placeholder="Your name"
				/>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-secondary-700 mb-2">
					Email *
				</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
					placeholder="your.email@example.com"
				/>
			</div>
			<div>
				<label for="phone" class="block text-sm font-medium text-secondary-700 mb-2">
					Phone Number
				</label>
				<input
					type="tel"
					id="phone"
					bind:value={phone}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
					placeholder="+1 (555) 123-4567"
				/>
			</div>
			<div>
				<label for="company" class="block text-sm font-medium text-secondary-700 mb-2">
					Company
				</label>
				<input
					type="text"
					id="company"
					bind:value={company}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
					placeholder="Your company name"
				/>
			</div>
			<div>
				<label for="message" class="block text-sm font-medium text-secondary-700 mb-2">
					Message *
				</label>
				<textarea
					id="message"
					bind:value={message}
					required
					rows="6"
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
					placeholder="Tell us about your project or requirements..."
				></textarea>
			</div>
			<button
				type="submit"
				disabled={submitting}
				class="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
			>
				{submitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	{/if}
</div>
