<script>
	let { class: class_, children, ...props } = $props();
</script>

<button
	type="button"
	class={[
		'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[15px] font-semibold text-stone-300 transition-colors duration-150 hover:bg-white/10 hover:text-stone-50 active:bg-white/15',
		class_
	]}
	{...props}
>
	{@render children?.()}
</button>
