<script>
	import { site_license } from '$lib/licenses.js';
</script>

<footer class="mt-8 border-t border-white/10 py-10">
	<p class="mx-auto max-w-3xl px-5 text-center text-base leading-[1.9] text-stone-400">
		هذا الموقع مفتوح المصدر على
		<a
			class="font-semibold text-[#9bd97f] underline decoration-[#76C457]/40 underline-offset-4 transition-colors hover:text-[#b6e89e] hover:decoration-[#76C457]"
			href="https://github.com/6km/islamic-data-repository/"
			target="_blank"
			rel="noopener noreferrer"
		>
			منصة GitHub
		</a>. يمكنك طلب تعديل، إضافة مصدر، أو حذف أي من المصادر المذكورة في الأعلى.
	</p>
	<p class="mx-auto mt-3 max-w-3xl px-5 text-center text-base leading-[1.9] text-stone-400">
		{site_license}
	</p>
	<div class="mt-4 flex justify-center">
		<a
			href="/licenses"
			class="text-sm text-stone-400 underline decoration-white/15 underline-offset-4 transition-colors hover:text-stone-200 hover:decoration-white/40"
		>
			تراخيص البرمجيات
		</a>
	</div>
</footer>
