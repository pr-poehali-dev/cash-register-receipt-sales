import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { CITIES } from '@/data/cities';

const City = () => {
  const { slug } = useParams();
  const city = CITIES.find((c) => c.slug === slug);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-accent-foreground">
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-display font-bold text-sm">Ч</span>
            <span className="font-display font-semibold tracking-wide text-lg">ЧЕК-ЮГ</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="font-medium">
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              На главную
            </Button>
          </Link>
        </div>
      </header>

      <section className="pt-40 pb-24">
        <div className="container max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Краснодарский край
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight mb-4">
            Отчётные документы в городе {city.name}
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Товарные и кассовые чеки, гостиничные чеки и сопроводительные документы для отчётности в {city.name}.
          </p>

          <div className="space-y-5 bg-secondary/40 border border-border rounded-sm p-8">
            <a href="tel:+79887622784" className="flex items-center gap-4 group">
              <span className="w-11 h-11 grid place-items-center rounded-sm bg-white/10 group-hover:bg-accent transition-colors"><Icon name="Phone" size={18} /></span>
              <span className="font-display text-lg">+7 (988) 762-27-84</span>
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
      </section>

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
