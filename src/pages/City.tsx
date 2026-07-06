import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { CITIES } from '@/data/cities';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О компании' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'cities', label: 'Города' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'contacts', label: 'Контакты' },
];

const PRODUCTS = [
  {
    title: 'Товарный чек',
    desc: 'Стандартный бланк товарного чека с реквизитами и перечнем позиций.',
    price: 'от 1 000 ₽',
    icon: 'ReceiptText',
  },
  {
    title: 'Кассовый чек',
    desc: 'Чек с фискальными данными, реквизитами и QR-кодом.',
    price: 'от 1 000 ₽',
    icon: 'Receipt',
  },
  {
    title: 'Комплект документов',
    desc: 'Товарный и кассовый чек в едином оформлении под задачу.',
    price: 'от 1 000 ₽',
    icon: 'Files',
  },
  {
    title: 'Комплект гостиничных чеков',
    desc: 'Отчётные документы за проживание через отель для командировочных.',
    price: 'от 1 000 ₽',
    icon: 'BedDouble',
  },
];

const stepsFor = (cityName: string) => [
  { n: '01', t: 'Заявка', d: 'Оставляете данные и перечень позиций.' },
  { n: '02', t: 'Оформление', d: 'Готовим бланки в течение дня.' },
  { n: '03', t: 'Доставка', d: `Привозим по ${cityName} или отправляем.` },
];

const City = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const STEPS = stepsFor(city.name);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const mapQuery = encodeURIComponent(`${city.name}, ${city.address}`);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-accent-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <span className="grid place-items-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-display font-bold text-sm">Ч</span>
            <span className="font-display font-semibold tracking-wide text-lg">ЧЕК-ЮГ</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex font-medium" size="sm">
            Заказать
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-sm text-muted-foreground">
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contacts')} size="sm" className="w-full">Заказать</Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-40 pb-28 overflow-hidden">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6 animate-fade-in">
              {city.name} · с 2014 года
            </p>
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl animate-fade-up">
              Товарные и кассовые
              <span className="block text-accent">чеки на заказ</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Аккуратное изготовление чеков и сопроводительных документов с доставкой по городу. Быстро и без лишних формальностей.
              <br />
              Чеки гостиницы в {city.name} - QR код.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <Button size="lg" onClick={() => scrollTo('catalog')} className="font-medium">
                Смотреть каталог
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('contacts')} className="font-medium">
                Связаться
              </Button>
            </div>
          </div>

          {/* Receipt mock */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-4 bg-accent/5 rounded-lg rotate-3" />
              <div className="relative bg-card border border-border rounded-sm p-6 font-mono text-xs text-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] -rotate-1">
                <p className="text-center font-display font-semibold text-sm tracking-wide mb-1">ТОВАРНЫЙ ЧЕК</p>
                <p className="text-center text-muted-foreground mb-4">№ 0042 · {city.name}</p>
                <div className="border-t border-dashed border-border my-3" />
                {['Бумага А4 — 2 уп.', 'Картридж — 1 шт.', 'Доставка — 1 услуга'].map((l) => (
                  <div key={l} className="flex justify-between py-1">
                    <span>{l.split(' — ')[0]}</span>
                    <span className="text-muted-foreground">{l.split(' — ')[1]}</span>
                  </div>
                ))}
                <div className="border-t border-dashed border-border my-3" />
                <div className="flex justify-between font-semibold text-sm">
                  <span>ИТОГО</span>
                  <span>1 480,00 ₽</span>
                </div>
                <p className="mt-4 text-center text-[10px] text-muted-foreground tracking-widest">СПАСИБО ЗА ПОКУПКУ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">О компании</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
              Делаем документы чисто и по делу
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              «Чек-Юг» — небольшая мастерская в {city.name}. Мы оформляем товарные и кассовые чеки, помогаем с сопроводительными документами для отчётности и закрытия сделок.
            </p>
            <p>
              Гостиничные чеки в {city.name}, отчётные документы за проживание через отель.
            </p>
            <p>
              Работаем аккуратно, ценим ваше время и внимательно относимся к деталям. За годы работы нам доверяют предприниматели и компании всего города.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { n: '10+', l: 'лет опыта' },
                { n: '5 000+', l: 'заказов' },
                { n: '24 ч', l: 'срок' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display font-bold text-3xl text-foreground">{s.n}</p>
                  <p className="text-sm mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-24 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">Каталог</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
              Что мы оформляем
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="group bg-card border border-border rounded-sm p-8 flex flex-col transition-all hover:border-accent hover:-translate-y-1"
              >
                <div className="w-12 h-12 grid place-items-center rounded-sm bg-secondary text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon name={p.icon} size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-display font-semibold text-lg">{p.price}</span>
                  <button onClick={() => scrollTo('contacts')} className="text-sm text-accent flex items-center gap-1 hover:gap-2 transition-all">
                    Заказать <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="py-24 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">География</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
              Отчётные документы в Краснодарском крае
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Работаем с клиентами по всему краю — выберите свой город.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/gorod/${c.slug}`}
                className={`flex items-center gap-2 px-4 py-3 rounded-sm border transition-colors text-sm font-medium ${
                  c.slug === city.slug
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'border-border bg-secondary/40 hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon name="MapPin" size={14} />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-24">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">Доставка</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
              Как мы работаем
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-background p-10">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="font-display font-semibold text-2xl mt-4 mb-2">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Icon name="Truck" size={18} className="text-accent" /> Курьер по {city.name}</span>
            <span className="flex items-center gap-2"><Icon name="Clock" size={18} className="text-accent" /> Срочные заказы за 2–3 часа</span>
            <span className="flex items-center gap-2"><Icon name="Package" size={18} className="text-accent" /> Отправка в другие города</span>
          </div>
          <p className="mt-6 text-base font-bold text-black">
            Возможна доставка через СДЭК или Почтой России.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <iframe
          src={`https://yandex.ru/map-widget/v1/?mode=search&text=${mapQuery}&z=16`}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="Мы на карте"
          className="block"
        />
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 bg-primary text-primary-foreground">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">Контакты</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
              Оставьте заявку
            </h2>
            <p className="mt-6 text-primary-foreground/70 max-w-md">
              Напишите или позвоните — ответим в рабочее время и подскажем по оформлению.
            </p>
            <div className="mt-10 space-y-5">
              <a href="tel:+79887622784" className="flex items-center gap-4 group">
                <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10 group-hover:bg-accent transition-colors"><Icon name="Phone" size={18} /></span>
                <span className="font-display text-lg">+7 (988) 762-27-84</span>
              </a>
              <a href="https://t.me/+79887622784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10 group-hover:bg-accent transition-colors"><Icon name="Send" size={18} /></span>
                <span className="font-display text-lg">Telegram</span>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOKR-Q8BTfSOKFFnva1Qwl_xYasvJfTAdU32qbXXsDWu4nZ1OD0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10 group-hover:bg-accent transition-colors"><Icon name="MessageCircle" size={18} /></span>
                <span className="font-display text-lg">MAX</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10"><Icon name="MapPin" size={18} /></span>
                <span className="font-display text-lg">г. {city.name}, {city.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10"><Icon name="Clock" size={18} /></span>
                <span className="font-display text-lg">Ежедневно с 9:00 до 20:00</span>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-background text-foreground rounded-sm p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <input type="text" placeholder="Как к вам обращаться" className="w-full h-11 px-4 rounded-sm border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full h-11 px-4 rounded-sm border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Комментарий</label>
              <textarea rows={3} placeholder="Какой документ нужен" className="w-full px-4 py-3 rounded-sm border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full font-medium">Отправить заявку</Button>
          </form>
        </div>
      </section>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://t.me/+79887622784"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all hover:scale-105 font-medium text-sm"
        >
          <Icon name="Send" size={18} />
          <span>Telegram</span>
        </a>
        <a
          href="https://max.ru/u/f9LHodD0cOKR-Q8BTfSOKFFnva1Qwl_xYasvJfTAdU32qbXXsDWu4nZ1OD0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-secondary text-foreground border border-border px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all hover:scale-105 font-medium text-sm"
        >
          <Icon name="MessageCircle" size={18} />
          <span>MAX</span>
        </a>
        <a
          href="tel:+79887622784"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all hover:scale-105 font-medium text-sm"
        >
          <Icon name="Phone" size={18} />
          <span>Позвонить</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/60 border-t border-white/10">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-display font-semibold tracking-wide text-primary-foreground">ЧЕК-ЮГ</span>
          <span>© 2026 · {city.name}</span>
        </div>
      </footer>
    </div>
  );
};

export default City;
