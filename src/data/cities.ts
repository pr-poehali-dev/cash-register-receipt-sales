export interface CityInfo {
  slug: string;
  name: string;
  address: string;
  /** Название города в предложном падеже (без предлога "в"), напр. "Анапе" */
  prepositional: string;
}

export const CITIES: CityInfo[] = [
  { slug: 'abinsk', name: 'Абинск', address: 'ул. Ленина, 10', prepositional: 'Абинске' },
  { slug: 'anapa', name: 'Анапа', address: 'ул. Крымская, 5', prepositional: 'Анапе' },
  { slug: 'armavir', name: 'Армавир', address: 'ул. Кирова, 45', prepositional: 'Армавире' },
  { slug: 'belorechensk', name: 'Белореченск', address: 'ул. Ленина, 20', prepositional: 'Белореченске' },
  { slug: 'gelendzhik', name: 'Геленджик', address: 'ул. Ленина, 15', prepositional: 'Геленджике' },
  { slug: 'goryachiy-klyuch', name: 'Горячий Ключ', address: 'ул. Ленина, 191', prepositional: 'Горячем Ключе' },
  { slug: 'gulkevichi', name: 'Гулькевичи', address: 'ул. Красная, 12', prepositional: 'Гулькевичах' },
  { slug: 'eysk', name: 'Ейск', address: 'ул. Свердлова, 30', prepositional: 'Ейске' },
  { slug: 'korenovsk', name: 'Кореновск', address: 'ул. Красная, 8', prepositional: 'Кореновске' },
  { slug: 'krasnodar', name: 'Краснодар', address: 'ул. Красная, 100', prepositional: 'Краснодаре' },
  { slug: 'kropotkin', name: 'Кропоткин', address: 'ул. Красная, 25', prepositional: 'Кропоткине' },
  { slug: 'krymsk', name: 'Крымск', address: 'ул. Ленина, 33', prepositional: 'Крымске' },
  { slug: 'kurganinsk', name: 'Курганинск', address: 'ул. Ленина, 14', prepositional: 'Курганинске' },
  { slug: 'labinsk', name: 'Лабинск', address: 'ул. Красная, 40', prepositional: 'Лабинске' },
  { slug: 'novokubansk', name: 'Новокубанск', address: 'ул. Первомайская, 9', prepositional: 'Новокубанске' },
  { slug: 'novorossiysk', name: 'Новороссийск', address: 'Мысхакское шоссе, 59В', prepositional: 'Новороссийске' },
  { slug: 'primorsko-ahtarsk', name: 'Приморско-Ахтарск', address: 'ул. Кирова, 3', prepositional: 'Приморско-Ахтарске' },
  { slug: 'slavyansk-na-kubani', name: 'Славянск-на-Кубани', address: 'ул. Отдельская, 45', prepositional: 'Славянске-на-Кубани' },
  { slug: 'sochi', name: 'Сочи', address: 'Курортный проспект, 32', prepositional: 'Сочи' },
  { slug: 'temryuk', name: 'Темрюк', address: 'ул. Ленина, 5', prepositional: 'Темрюке' },
  { slug: 'timashevsk', name: 'Тимашёвск', address: 'ул. Ленина, 100', prepositional: 'Тимашёвске' },
  { slug: 'tihoretsk', name: 'Тихорецк', address: 'ул. Меньшикова, 20', prepositional: 'Тихорецке' },
  { slug: 'tuapse', name: 'Туапсе', address: 'ул. Карла Маркса, 12', prepositional: 'Туапсе' },
  { slug: 'ust-labinsk', name: 'Усть-Лабинск', address: 'ул. Красная, 60', prepositional: 'Усть-Лабинске' },
  { slug: 'hadyzhensk', name: 'Хадыженск', address: 'ул. Кирова, 7', prepositional: 'Хадыженске' },
];