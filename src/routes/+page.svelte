<script>
	// @ts-nocheck

	import { categories, resources } from '$lib';
	import Button from '$lib/components/Button.svelte';

	let selected_category = $state('all');
	let filtered_resources = $derived(
		resources.filter((r) => {
			if (!selected_category || selected_category === 'all') return true;

			return r.categories.includes(selected_category);
		})
	);
</script>

<header class="mx-auto mt-4 max-w-[65ch] px-5 text-center">
	<p class="text-[15px] leading-[1.9] text-stone-300">
		قائمة بموارد وبيانات إسلامية تفيد المبرمجين في تطوير التطبيقات ومواقع الويب الإسلامية.
	</p>
</header>

<section aria-label="تصفية المصادر" class="mx-auto mt-10 max-w-4xl px-5">
	<div class="flex flex-wrap justify-center gap-2">
		{#each Object.entries(categories) as [slug, category]}
			<Button
				class="data-[selected=true]:border-[#76C457]/50 data-[selected=true]:bg-[#4A7D36] data-[selected=true]:text-white"
				aria-pressed={selected_category === slug}
				onclick={() => {
					selected_category = slug;
				}}
				data-selected={selected_category === slug}
			>
				{category.name_ar}
			</Button>
		{/each}
	</div>
</section>

<section aria-label="المصادر" class="mx-auto mt-8 mb-20 max-w-6xl px-5">
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
		{#each filtered_resources as resource}
			<a
				href={resource.link}
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col rounded-2xl border border-white/10 bg-[#1b2121] p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#202727]"
			>
				<h3 class="text-lg leading-snug font-semibold text-stone-100">{resource.name}</h3>
				<p class="mt-2 flex-1 text-[15px] leading-[1.85] text-stone-300">
					{resource.description}
				</p>

				<div class="mt-4 flex flex-wrap gap-1.5">
					{#each resource.categories as category}
						<span
							class={[
								'rounded-full border px-2.5 py-0.5 text-xs leading-5',
								categories[category].tag_class
							]}
						>
							{categories[category].name_ar}
						</span>
					{/each}
				</div>

				{#if resource.author}
					<div
						class="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs text-stone-400"
					>
						<span>بواسطة {resource.author}</span>
						<svg
							class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M17 17 7 7M16 7H7v9" />
						</svg>
					</div>
				{/if}
			</a>
		{/each}
	</div>
</section>
