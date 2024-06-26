// prettier-ignore
export const surahs=[{name:"al-Fatihah",juz:1},{name:"al-Baqarah",juz:1},{name:"Al-'Imran",juz:3},{name:"an-Nisa'",juz:4},{name:"al-Ma'idah",juz:6},{name:"al-An'am",juz:7},{name:"al-A'raf",juz:8},{name:"al-Anfal",juz:9},{name:"at-Taubah",juz:10},{name:"Yunus",juz:11},{name:"Hud",juz:11},{name:"Yusuf",juz:12},{name:"ar-Ra'd",juz:13},{name:"Ibrahim",juz:13},{name:"al-Hijr",juz:14},{name:"an-Nahl",juz:14},{name:"al-Isra'",juz:15},{name:"al-Kahf",juz:15},{name:"Maryam",juz:16},{name:"Ta-Ha",juz:16},{name:"al-Anbiya'",juz:17},{name:"al-Hajj",juz:17},{name:"al-Mu'minun",juz:18},{name:"an-Nur",juz:18},{name:"al-Furqan",juz:18},{name:"ash-Shu'ara",juz:19},{name:"an-Naml",juz:19},{name:"al-Qasas",juz:20},{name:"al-'Ankabut",juz:20},{name:"ar-Rum",juz:21},{name:"Luqman",juz:21},{name:"as-Sajdah",juz:21},{name:"al-Ahzab",juz:21},{name:"Saba'",juz:22},{name:"Fatir",juz:22},{name:"Ya-Sin",juz:22},{name:"as-Saffat",juz:23},{name:"Sad",juz:23},{name:"az-Zumar",juz:23},{name:"Ghafir",juz:24},{name:"Fussilat",juz:24},{name:"ash-Shura",juz:25},{name:"az-Zukhruf",juz:25},{name:"ad-Dukhan",juz:25},{name:"al-Jathiyah",juz:25},{name:"al-Ahqaf",juz:26},{name:"Muhammad",juz:26},{name:"al-Fath",juz:26},{name:"al-Hujurat",juz:26},{name:"Qaf",juz:26},{name:"adh-Dhariyat",juz:26},{name:"at-Tur",juz:27},{name:"an-Najm",juz:27},{name:"al-Qamar",juz:27},{name:"ar-Rahman",juz:27},{name:"al-Waqi'ah",juz:27},{name:"al-Hadid",juz:27},{name:"al-Mujadilah",juz:28},{name:"al-Hashr",juz:28},{name:"al-Mumtahanah",juz:28},{name:"as-Saff",juz:28},{name:"al-Jumu'ah",juz:28},{name:"al-Munafiqun",juz:28},{name:"at-Taghabun",juz:28},{name:"at-Talaq",juz:28},{name:"at-Tahrim",juz:28},{name:"al-Mulk",juz:29},{name:"al-Qalam",juz:29},{name:"al-Haqqah",juz:29},{name:"al-Ma'arij",juz:29},{name:"Nuh",juz:29},{name:"al-Jinn",juz:29},{name:"al-Muzzammil",juz:29},{name:"al-Muddaththir",juz:29},{name:"al-Qiyamah",juz:29},{name:"al-Insan",juz:29},{name:"al-Mursalat",juz:29},{name:"an-Naba'",juz:30},{name:"an-Nazi'at",juz:30},{name:"'Abasa",juz:30},{name:"at-Takwir",juz:30},{name:"al-Infitar",juz:30},{name:"al-Mutaffifin",juz:30},{name:"al-Inshiqaq",juz:30},{name:"al-Buruj",juz:30},{name:"at-Tariq",juz:30},{name:"al-A'la",juz:30},{name:"al-Ghashiyah",juz:30},{name:"al-Fajr",juz:30},{name:"al-Balad",juz:30},{name:"ash-Shams",juz:30},{name:"al-Layl",juz:30},{name:"ad-Duha",juz:30},{name:"ash-Sharh",juz:30},{name:"at-Tin",juz:30},{name:"al-'Alaq",juz:30},{name:"al-Qadr",juz:30},{name:"al-Bayyinah",juz:30},{name:"az-Zalzalah",juz:30},{name:"al-'Adiyat",juz:30},{name:"al-Qari'ah",juz:30},{name:"at-Takathur",juz:30},{name:"al-'Asr",juz:30},{name:"al-Humazah",juz:30},{name:"al-Fil",juz:30},{name:"Quraysh",juz:30},{name:"al-Ma'un",juz:30},{name:"al-Kawthar",juz:30},{name:"al-Kafirun",juz:30},{name:"an-Nasr",juz:30},{name:"al-Masad",juz:30},{name:"al-Ikhlas",juz:30},{name:"al-Falaq",juz:30},{name:"an-Nas",juz:30}];

export const surahNames = surahs.map((x) => x.name);

export interface Verse {
	number: number;
	surah: number;
	juz: number;
	content: string;
}
export const themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset',
];
