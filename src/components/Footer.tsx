import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">КРОВЛЯ СПБ</h3>
            <p className="text-secondary-foreground/70">
              Профессиональные кровельные работы по Санкт-Петербургу и Ленинградской области с гарантией 5 лет.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+78121234567" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +7 (812) 123-45-67
              </a>
              <a href="mailto:info@krovlya-spb.ru" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@krovlya-spb.ru
              </a>
              <p className="flex items-center gap-2 text-secondary-foreground/70">
                <MapPin className="w-4 h-4" /> Санкт-Петербург и ЛО
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">Услуги</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>Монтаж кровли</li>
              <li>Ремонт кровли</li>
              <li>Утепление кровли</li>
              <li>Водосточные системы</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-secondary-foreground/50 text-sm">
          © 2026 КРОВЛЯ СПБ. Все права защищены.
        </div>
      </div>
    </footer>
  );
};