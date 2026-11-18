<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>التراخيص | مُستودَعُ البياناتِ الإسلامية</title>
	<meta name="description" content="تراخيص البرمجيات المستخدمة في إنشاء هذا الموقع ورخصة الموقع." />
</svelte:head>

<main class="mx-auto max-w-3xl px-5 py-12">
	<a
		href="/"
		class="inline-flex items-center gap-1 text-base text-[#9bd97f] underline decoration-[#76C457]/40 underline-offset-4 hover:text-[#b6e89e]"
	>
		← العودة إلى الرئيسية
	</a>

	<h1 class="mt-6 text-2xl font-semibold text-stone-100">التراخيص</h1>

	<section class="mt-8">
		<h2 class="text-lg font-semibold text-[#9bd97f]">تراخيص البرمجيات المستخدمة</h2>

		{#if data.licenses.length === 0}
			<p class="mt-3 text-base text-stone-400">تظهر النصوص بعد بناء المشروع.</p>
		{:else}
			<div class="mt-4 space-y-3">
				{#each data.licenses as license}
					<details class="rounded-2xl border border-white/10 bg-[#1b2121] p-5">
						<summary
							class="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-stone-100"
						>
							<span>{license.name}</span>
							<span class="text-sm font-normal text-stone-400">{license.license}</span>
						</summary>
						<pre
							dir="ltr"
							class="mt-4 overflow-x-auto whitespace-pre-wrap text-left text-sm leading-relaxed text-stone-300">{license.licenseText ?? ''}</pre>
					</details>
				{/each}
			</div>
		{/if}
	</section>
</main>
