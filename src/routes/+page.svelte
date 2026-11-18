<script>
	// @ts-nocheck

	import { categories, resources } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import ResourceCard from '$lib/components/ResourceCard.svelte';

	let selected_category = $state('all');
	let filtered_resources = $derived(
		resources.filter((r) => {
			if (!selected_category || selected_category === 'all') return true;

			return r.categories.includes(selected_category);
		})
	);
</script>

<header class="mx-auto mt-4 max-w-[65ch] px-5 text-center">
	<p class="text-base leading-[1.9] text-stone-300">
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
			<ResourceCard {resource} {categories} />
		{/each}
	</div>
</section>
