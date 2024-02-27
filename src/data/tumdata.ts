interface sehir {
    name: string;
    slug: string;
}

interface taleptur {
    name: string;
    slug: string;
}

const talepturleri: taleptur[] = [
    { name: "Eğitim", slug: "egitim" },
    { name: "Yollar-Caddeler", slug: "yollar" },
    { name: "Mahalleler", slug: "mahalleler" },
    { name: "Toplu Taşıma", slug: "tasima" }
];

const sehirler: sehir[] = [{ name: "İstanbul", slug: "istanbul" },
{ name: "Ankara", slug: "ankara" },
{ name: "İzmir", slug: "izmir" },
{ name: "Bursa", slug: "bursa" },
{ name: "Adana", slug: "adana" },
{ name: "Antalya", slug: "antalya" },
{ name: "Konya", slug: "konya" },
{ name: "Gaziantep", slug: "gaziantep" },
{ name: "Mersin", slug: "mersin" },
{ name: "Kocaeli", slug: "kocaeli" },
{ name: "Trabzon", slug: "trabzon" },
{ name: "Eskişehir", slug: "eskisehir" },
{ name: "Erzurum", slug: "erzurum" },
{ name: "Samsun", slug: "samsun" }
];

function getCategory(slug: string) {
    let found = talepturleri.find(tur => tur.slug == slug);
    console.log(slug)
    console.log(found)
    return found?.name;
}

export { sehirler, talepturleri, getCategory };
