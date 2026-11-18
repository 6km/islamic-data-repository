<script>
	import CategoryIcon from '$lib/components/CategoryIcon.svelte';

	let { resource, categories } = $props();
</script>

<a
	href={resource.link}
	target="_blank"
	rel="noopener noreferrer"
	class="group flex flex-col rounded-2xl border border-white/10 bg-[#1b2121] p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#202727]"
>
	<h3 class="text-xl leading-snug font-semibold text-stone-100">{resource.name}</h3>
	<p class="mt-2 flex-1 text-base leading-[1.85] text-stone-300">
		{resource.description}
	</p>

	<div class="mt-4 flex flex-wrap gap-1.5">
		{#each resource.categories as category}
			<span
				class={[
					'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-sm leading-5',
					categories[category].tag_class
				]}
			>
				<CategoryIcon name={category} class="h-3.5 w-3.5 shrink-0" />
				{categories[category].name_ar}
			</span>
		{/each}
	</div>

	{#if resource.author}
		<div
			class="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3 text-sm text-stone-400"
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
