<script>
	import { BookOpen, CodeXml, Ellipsis, Headphones, List, Quote, Type, Wrench } from '@lucide/svelte';

	const icons = {
		all: List,
		fonts: Type,
		quran: BookOpen,
		telawat: Headphones,
		tools: Wrench,
		hadeeth: Quote,
		api: CodeXml,
		others: Ellipsis
	};

	/** @type {{ name: keyof typeof icons, class?: string }} */
	let { name, class: class_ = 'h-4 w-4' } = $props();

	const Icon = $derived(icons[name]);
</script>

<Icon class={class_} aria-hidden="true" />
