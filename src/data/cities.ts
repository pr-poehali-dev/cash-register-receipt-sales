export interface CityInfo {
  slug: string;
  name: string;
  address: string;
}

export const CITIES: CityInfo[] = [
  { slug: 'abinsk', name: 'Абинск', address: 'ул. Ленина, 10' },
  { slug: 'anapa', name: 'Анапа', address: 'ул. Крымская, 5' },
  { slug: 'armavir', name: 'Армавир', address: 'ул. Кирова, 45' },
  { slug: 'belorechensk', name: 'Белореченск', address: 'ул. Ленина, 20' },
  { slug: 'gelendzhik', name: 'Геленджик', address: 'ул. Ленина, 15' },
  { slug: 'goryachiy-klyuch', name: 'Горячий Ключ', address: 'ул. Ленина, 191' },
  { slug: 'gulkevichi', name: 'Гулькевичи', address: 'ул. Красная, 12' },
  { slug: 'eysk', name: 'Ейск', address: 'ул. Свердлова, 30' },
  { slug: 'korenovsk', name: 'Кореновск', address: 'ул. Красная, 8' },
  { slug: 'krasnodar', name: 'Краснодар', address: 'ул. Красная, 100' },
  { slug: 'kropotkin', name: 'Кропоткин', address: 'ул. Красная, 25' },
  { slug: 'krymsk', name: 'Крымск', address: 'ул. Ленина, 33' },
  { slug: 'kurganinsk', name: 'Курганинск', address: 'ул. Ленина, 14' },
  { slug: 'labinsk', name: 'Лабинск', address: 'ул. Красная, 40' },
  { slug: 'novokubansk', name: 'Новокубанск', address: 'ул. Первомайская, 9' },
  { slug: 'novorossiysk', name: 'Новороссийск', address: 'Мысхакское шоссе, 59В' },
  { slug: 'primorsko-ahtarsk', name: 'Приморско-Ахтарск', address: 'ул. Кирова, 3' },
  { slug: 'slavyansk-na-kubani', name: 'Славянск-на-Кубани', address: 'ул. Отдельская, 45' },
  { slug: 'sochi', name: 'Сочи', address: 'Курортный проспект, 32' },
  { slug: 'temryuk', name: 'Темрюк', address: 'ул. Ленина, 5' },
  { slug: 'timashevsk', name: 'Тимашёвск', address: 'ул. Ленина, 100' },
  { slug: 'tihoretsk', name: 'Тихорецк', address: 'ул. Меньшикова, 20' },
  { slug: 'tuapse', name: 'Туапсе', address: 'ул. Карла Маркса, 12' },
  { slug: 'ust-labinsk', name: 'Усть-Лабинск', address: 'ул. Красная, 60' },
  { slug: 'hadyzhensk', name: 'Хадыженск', address: 'ул. Кирова, 7' },
];
