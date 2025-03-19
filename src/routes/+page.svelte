<script>
	// @ts-nocheck

	import { categories, resources } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import { writable } from 'svelte/store';

	let selected_category = $state('all');
	let filtered_resources = $derived(
		resources.filter((r) => {
			if (!selected_category || selected_category === 'all') return true;

			return r.categories.includes(selected_category);
		})
	);

	$effect(() => {
		console.log(filtered_resources);
	});
</script>

<div class="mx-auto mt-4 flex w-[512px] max-w-full flex-wrap justify-center gap-2 px-2">
	{#each Object.entries(categories) as [slug, category]}
		<Button
			class="font-semibold focus:ring-blue-400 focus:ring-offset-2 focus-visible:ring-3 data-[selected=true]:bg-blue-400 data-[selected=true]:text-white"
			onclick={() => {
				selected_category = slug;
			}}
			data-selected={selected_category === slug}
		>
			{category.name_ar}
		</Button>
	{/each}
</div>

<div class="mx-auto mt-8 mb-8 flex w-[880px] max-w-full flex-wrap gap-4 px-2">
	{#each filtered_resources as resource}
		<a
			href={resource.link}
			class="flex rounded-xl outline-none focus:ring-blue-400 focus:ring-offset-2 focus-visible:ring-3"
			target="_blank"
		>
			<div
				class="flex w-full cursor-pointer flex-col rounded-xl border border-zinc-300 bg-zinc-200/80 p-4 transition outline-none hover:border-zinc-400/50 hover:bg-zinc-200 md:w-64"
			>
				<div class="flex-1">
					<p class="text-[19.6px] font-semibold text-zinc-700">{resource.name}</p>
					<p class="mt-1.5 text-lg text-zinc-500">{resource.description}</p>
				</div>
				<div class="mt-3 text-lg font-medium">
					{#if resource.author}
						<p>بواسطة {resource.author}</p>
					{/if}
				</div>
				<div class="mt-3 flex flex-wrap gap-1 space-y-1">
					{#each resource.categories as category}
						<div>
							<span class={['rounded-full border px-2 pt-0.5 pb-0', categories[category].tag_class]}
								>{categories[category].name_ar}</span
							>
						</div>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>
