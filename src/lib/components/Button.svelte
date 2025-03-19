<script>
	let { class: class_, children, ...props } = $props();
</script>

<button
	class={[
		'cursor-pointer rounded-full bg-blue-100 px-6 pt-2 pb-1 text-cyan-700 transition-colors outline-none select-none hover:bg-blue-200 active:scale-95',
		class_
	]}
	{...props}
>
	{@render children?.()}
</button>
