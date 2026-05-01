import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  // Генерируем строку с метками для Static API (центр СПб и разброс)
  // Это имитация меток в популярных районах: Парголово, Сестрорецк, Пушкин, Гатчина, Мурино и т.д.
  const staticMapUrl = "https://static-maps.yandex.ru/v1?lang=ru_RU&ll=30.3609,59.9311&z=9&l=map&pt=30.3,59.9,pm2rdm~30.4,60.0,pm2rdm~30.1,59.8,pm2rdm~30.6,59.9,pm2rdm~30.2,60.1,pm2rdm~29.7,60.0,pm2rdm~30.3,59.7,pm2rdm~30.5,59.8,pm2rdm~29.9,59.9,pm2rdm~30.2,59.8,pm2rdm~30.7,60.1,pm2rdm~29.8,59.7,pm2rdm~30.1,60.2,pm2rdm~30.4,59.6,pm2rdm~30.8,59.9,pm2rdm~30.0,60.0,pm2rdm~30.3,60.1,pm2rdm~29.6,59.9,pm2rdm~30.5,59.7,pm2rdm~30.1,59.7,pm2rdm&apikey=ВАШ_API_КЛЮЧ"; 
  // Примечание: Static API работает и без ключа для небольшого трафика, но лучше вставить свой.

  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Наши работы <span className="text-primary">на карте</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Работаем по всему Санкт-Петербургу и Ленинградской области
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-border bg-muted flex items-center justify-center">
          {/* Используем интерактивный виджет с координатами центра СПб */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.3609%2C59.9311&z=9&l=map"
            width="100%"
            height="450"
            frameBorder="0"
            title="Карта работ СПб"
            className="w-full grayscale-[20%]"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg">Москве и Московской область</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg">Оставить заявку</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Оставить заявку</DialogTitle>
              </DialogHeader>
              <CallbackForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};