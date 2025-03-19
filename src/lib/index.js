export const resources = [
	{
		name: 'خط مصحف المدينة المنورة',
		description: 'الخط المستخدم في مصحف المدينة المنورة لمجمع الملك فهد -رَحِمَهُ اللَّهُ-',
		author: 'مجمع الملك فهد لطباعة المصحف الشريف',
		link: 'https://github.com/nuqayah/qpc-fonts',
		categories: ['fonts']
	},
	{
		name: 'قاعدة بيانات الأحاديث JSON',
		description:
			'قاعدة بيانات الأحاديث النبوية الشريفة تحتوي على 50,884 حديث من 17 كتاباً، من بينها الكتب التسعة',
		author: 'أحمد عبدُ الباسط',
		link: 'https://github.com/AhmedBaset/hadith-json',
		categories: ['hadeeth']
	},
	{
		name: 'Quran-Data',
		description:
			'يوفر المشروع قواعد البيانات للقرآن الكريم بصيغ متعددة مثل JSON و CSV و SQLite، ويشمل أيضًا واجهة برمجة تطبيقات (API).',
		author: 'ريان المالكي',
		link: 'https://github.com/rn0x/Quran-Data',
		categories: ['quran']
	},
	{
		name: 'أسماء الله الحسنى JSON',
		description: 'ملف JSON يحتوي على أسماء الله الحسنى ومعانيها',
		author: 'ريان المالكي',
		link: 'https://github.com/rn0x/Names_Of_Allah_Json',
		categories: ['others']
	},
	{
		name: 'react-quran',
		description: 'مكتبة تتيح لك إضافة المصحف إلى تطبيق React.js الخاص بك',
		author: '',
		link: 'https://github.com/6km/react-quran',
		categories: ['others']
	},
	{
		name: 'Al Quran Cloud',
		description:
			'تتيح لك الحصول على بيانات خاصة بالقرآن الكريم مثل الآيات والصفحات والأجزاء والمزيد من المعلومات.',
		author: 'Islamic Network',
		link: 'https://alquran.cloud/api',
		categories: ['api']
	},
	{
		name: 'Al Quran CDN',
		description: 'توفِّر لك تلاوات لكل آية/سورة. كما توفِّر أيضاً صوراً لآيات القرآن الكريم.',
		author: 'Islamic Network',
		link: 'https://alquran.cloud/api',
		categories: ['telawat', 'api']
	},
	{
		name: 'خطوط القراءات العشر',
		description: 'خطوط عالية الجودة للقراءات العشر للقرآن الكريم.',
		author: 'مجمع الملك فهد لطباعة المصحف الشريف',
		link: 'https://fonts.qurancomplex.gov.sa/ten-readings/',
		categories: ['fonts']
	},
	{
		name: 'منصة مطوري برمجيات القرآن',
		description: 'يوفر خطوطاً عالية الجودة للقرآن الكريم وبعض كتب التفسير والتجويد.',
		author: 'مجمع الملك فهد لطباعة المصحف الشريف',
		link: 'https://qurancomplex.gov.sa/techquran/dev/',
		categories: ['quran', 'fonts']
	},
	{
		name: 'خط كِتاب',
		description: 'خط نسخ عربي تقليدي',
		author: 'خالد حسني',
		link: 'https://github.com/nuqayah/kitab-font',
		categories: ['fonts']
	},
	{
		name: 'Every Ayah',
		description: 'يوفر لك صوراً وتلاواتٍ عاليةَ الجودةِ للآيات القرآنية',
		author: 'فريق Every Ayah والمساهمون به',
		link: 'https://everyayah.com/',
		categories: ['telawat', 'api']
	},
	{
		name: 'تنزيل Tanzil',
		description: 'يُقدِّمُ بياناتِ النصِّ القرآني والترجمات وبعض الخطوط لعرض النص القرآني.',
		author: 'Tanzil',
		link: 'https://tanzil.net/docs/resources',
		categories: ['quran', 'fonts']
	},
	{
		name: 'QuranJS',
		description: 'للتعامل مع واجهة برمجة التطبيقات (API) لموقع Quran.com',
		author: 'Quran.com',
		link: 'https://quranjs.com/',
		categories: ['quran', 'api']
	},
	{
		name: 'QuranicAudio',
		description: 'يحتوي على العديد من تلاوات القرآن الكريم بأصوات العديد من القراء.',
		author: 'Quran.com',
		link: 'https://quranicaudio.com/',
		categories: ['telawat']
	}
];

export const categories = {
	all: {
		name_ar: 'الكل',
		name_en: 'Others',
		tag_class: 'text-cyan-700 bg-blue-200'
	},
	fonts: {
		name_ar: 'الخطوط',
		name_en: 'Fonts',
		tag_class: 'text-cyan-700 bg-blue-200 border-cyan-800/20'
	},
	quran: {
		name_ar: 'القرآن الكريم وعلومه',
		name_en: 'Quran',
		tag_class: 'text-purple-700 bg-purple-200 border-purple-800/20'
	},
	telawat: {
		name_ar: 'تلاوات القرآن',
		name_en: 'Quran Recitations',
		tag_class: 'text-red-700 bg-red-200/50 border-red-800/20'
	},
	hadeeth: {
		name_ar: 'الأحاديث',
		name_en: 'Hadeeth',
		tag_class: 'text-emerald-700 bg-emerald-200 border-emerald-800/20'
	},
	api: {
		name_ar: 'واجهة برمجة التطبيقات (API)',
		name_en: 'Hadeeth',
		tag_class: 'text-orange-700 bg-orange-200 border-orange-800/20'
	},
	others: {
		name_ar: 'أُخرى',
		name_en: 'Others',
		tag_class: 'text-zinc-700 bg-zinc-200 border-zinc-800/20'
	}
};
