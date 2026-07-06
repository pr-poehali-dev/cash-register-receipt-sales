export interface CityInfo {
  slug: string;
  name: string;
  address: string;
  /** Название города в предложном падеже (без предлога "в"), напр. "Анапе" */
  prepositional: string;
  /** Фоновое изображение города */
  bgImage: string;
}

const CDN = 'https://cdn.poehali.dev/projects/e2077679-9a2d-4559-8a63-a207d5e39479/files';

export const CITIES: CityInfo[] = [
  { slug: 'abinsk', name: 'Абинск', address: 'ул. Ленина, 10', prepositional: 'Абинске', bgImage: `${CDN}/09b3a7a2-666d-4389-a4c1-07411ac44b42.jpg` },
  { slug: 'anapa', name: 'Анапа', address: 'ул. Крымская, 5', prepositional: 'Анапе', bgImage: `${CDN}/5b68c745-67e1-4d62-a9cc-82f98e5f0ff0.jpg` },
  { slug: 'armavir', name: 'Армавир', address: 'ул. Кирова, 45', prepositional: 'Армавире', bgImage: `${CDN}/1d7ca44f-7828-4531-bef9-e5f444ce4a58.jpg` },
  { slug: 'belorechensk', name: 'Белореченск', address: 'ул. Ленина, 20', prepositional: 'Белореченске', bgImage: `${CDN}/3df2ff05-a705-47a5-95f1-2b08a03bf6b8.jpg` },
  { slug: 'gelendzhik', name: 'Геленджик', address: 'ул. Ленина, 15', prepositional: 'Геленджике', bgImage: `${CDN}/feee1d5b-e74b-4bfa-a79e-3f443ce42579.jpg` },
  { slug: 'goryachiy-klyuch', name: 'Горячий Ключ', address: 'ул. Ленина, 191', prepositional: 'Горячем Ключе', bgImage: `${CDN}/0d668763-eef7-41db-9567-f00115c70625.jpg` },
  { slug: 'gulkevichi', name: 'Гулькевичи', address: 'ул. Красная, 12', prepositional: 'Гулькевичах', bgImage: `${CDN}/72d29818-efb0-4dd2-b8be-b64863c1cada.jpg` },
  { slug: 'eysk', name: 'Ейск', address: 'ул. Свердлова, 30', prepositional: 'Ейске', bgImage: `${CDN}/4d3ea122-d1ec-4494-9b39-0e6ada92f7cf.jpg` },
  { slug: 'korenovsk', name: 'Кореновск', address: 'ул. Красная, 8', prepositional: 'Кореновске', bgImage: `${CDN}/08835b94-edc1-4784-950e-625a02f588c2.jpg` },
  { slug: 'krasnodar', name: 'Краснодар', address: 'ул. Красная, 100', prepositional: 'Краснодаре', bgImage: `${CDN}/0b389eda-c4dd-4748-9b47-efe2ddb8e08d.jpg` },
  { slug: 'kropotkin', name: 'Кропоткин', address: 'ул. Красная, 25', prepositional: 'Кропоткине', bgImage: `${CDN}/6c4e6872-fc61-4ae5-b8cf-85872e91d2d5.jpg` },
  { slug: 'krymsk', name: 'Крымск', address: 'ул. Ленина, 33', prepositional: 'Крымске', bgImage: `${CDN}/f50a73e9-5a89-48c4-a013-cd41453b6912.jpg` },
  { slug: 'kurganinsk', name: 'Курганинск', address: 'ул. Ленина, 14', prepositional: 'Курганинске', bgImage: `${CDN}/4760ecaf-c82f-48e8-9602-15e3827a2c44.jpg` },
  { slug: 'labinsk', name: 'Лабинск', address: 'ул. Красная, 40', prepositional: 'Лабинске', bgImage: `${CDN}/5a41b489-345f-48b8-b681-6db9e8e618c8.jpg` },
  { slug: 'novokubansk', name: 'Новокубанск', address: 'ул. Первомайская, 9', prepositional: 'Новокубанске', bgImage: `${CDN}/8bfc47b7-1add-45aa-a5ba-95c3a449eba9.jpg` },
  { slug: 'novorossiysk', name: 'Новороссийск', address: 'Мысхакское шоссе, 59В', prepositional: 'Новороссийске', bgImage: `${CDN}/fd920d8d-538c-4842-b20f-793810f2e980.jpg` },
  { slug: 'primorsko-ahtarsk', name: 'Приморско-Ахтарск', address: 'ул. Кирова, 3', prepositional: 'Приморско-Ахтарске', bgImage: `${CDN}/fe0a2f05-7509-475a-b8bd-5bedab4abb63.jpg` },
  { slug: 'slavyansk-na-kubani', name: 'Славянск-на-Кубани', address: 'ул. Отдельская, 45', prepositional: 'Славянске-на-Кубани', bgImage: `${CDN}/994b1bf1-7a26-499d-a57b-094b2a0074d4.jpg` },
  { slug: 'sochi', name: 'Сочи', address: 'Курортный проспект, 32', prepositional: 'Сочи', bgImage: `${CDN}/cf7c9a80-8237-45c7-a6a9-a7155628991b.jpg` },
  { slug: 'temryuk', name: 'Темрюк', address: 'ул. Ленина, 5', prepositional: 'Темрюке', bgImage: `${CDN}/29592011-ce63-44f6-be8a-a50e178050d4.jpg` },
  { slug: 'timashevsk', name: 'Тимашёвск', address: 'ул. Ленина, 100', prepositional: 'Тимашёвске', bgImage: `${CDN}/4e8a4380-e85b-429b-8300-f5b54bd4d1fe.jpg` },
  { slug: 'tihoretsk', name: 'Тихорецк', address: 'ул. Меньшикова, 20', prepositional: 'Тихорецке', bgImage: `${CDN}/327ca622-135a-4a76-b3ea-859699d9eebe.jpg` },
  { slug: 'tuapse', name: 'Туапсе', address: 'ул. Карла Маркса, 12', prepositional: 'Туапсе', bgImage: `${CDN}/8cc83541-4bd3-4083-b024-0e24f610b88f.jpg` },
  { slug: 'ust-labinsk', name: 'Усть-Лабинск', address: 'ул. Красная, 60', prepositional: 'Усть-Лабинске', bgImage: `${CDN}/34152035-f3af-4cda-b43a-ac4fbd348a0b.jpg` },
  { slug: 'hadyzhensk', name: 'Хадыженск', address: 'ул. Кирова, 7', prepositional: 'Хадыженске', bgImage: `${CDN}/b2ecdd94-848e-40e9-aef7-631abce67c60.jpg` },
  { slug: 'rostov', name: 'Ростов-на-Дону', address: 'Большая Садовая ул., 50', prepositional: 'Ростове-на-Дону', bgImage: `${CDN}/68644367-f558-4198-b768-d2b0400e720b.jpg` },
  { slug: 'stavropol', name: 'Ставрополь', address: 'пр-т Карла Маркса, 32', prepositional: 'Ставрополе', bgImage: `${CDN}/e6d43ad5-6928-468d-9852-59679672627d.jpg` },
  { slug: 'kerch', name: 'Керчь', address: 'ул. Ленина, 18', prepositional: 'Керчи', bgImage: `${CDN}/f4b5b181-cace-4395-8cd8-f0ce95af0ef1.jpg` },
  { slug: 'simferopol', name: 'Симферополь', address: 'ул. Пушкина, 15', prepositional: 'Симферополе', bgImage: `${CDN}/89305258-62ba-431f-aa9c-81b0347f4f97.jpg` },
  { slug: 'sevastopol', name: 'Севастополь', address: 'ул. Большая Морская, 10', prepositional: 'Севастополе', bgImage: `${CDN}/100e0188-eb3d-4e05-8e4b-64d867c0fd76.jpg` },
  { slug: 'yalta', name: 'Ялта', address: 'Набережная им. Ленина, 5', prepositional: 'Ялте', bgImage: `${CDN}/31f8e1e4-78af-48b6-a3e9-a87c187a20a0.jpg` },
];