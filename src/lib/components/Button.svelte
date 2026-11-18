<script>
	let { class: class_, children, ...props } = $props();
</script>

<button
	class={[
		'cursor-pointer rounded-full bg-[#2B3030] px-6 pt-2 pb-1 text-slate-300 shadow-xs inset-shadow-sm inset-shadow-white/4 transition-colors outline-none select-none hover:bg-[#373d3d]',
		class_
	]}
	{...props}
>
	{@render children?.()}
</button>
