import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  // Координаты Москвы: ll=37.6176,55.7558 (долгота и широта)
  // В staticMapUrl я заменил центр и накидал примерные метки по МО (Химки, Мытищи, Люберцы, Одинцово и т.д.)
  const staticMapUrl = "https://static-maps.yandex.ru/v1?lang=ru_RU&ll=37.6176,55.7558&z=9&l=map&pt=37.5,55.8,pm2rdm~37.7,55.9,pm2rdm~37.9,55.7,pm2rdm~37.4,55.6,pm2rdm~37.2,55.7,pm2rdm~37.6,55.5,pm2rdm~38.0,55.8,pm2rdm~37.1,55.9,pm2rdm~37.8,55.6,pm2rdm&apikey=ВАШ_API_КЛЮЧ"; 

  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Наши работы <span className="text-primary">на карте</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Работаем по всей Москве и Московской области
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-border bg-muted flex items-center justify-center">
          {/* Обновленный iframe: ll (центр) теперь на Москве, z=9 дает хороший охват области */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.6176%2C55.7558&z=9&l=map"
            width="100%"
            height="450"
            frameBorder="0"
            title="Карта работ Москва"
            className="w-full grayscale-[20%]"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg text-center">Москва и Московская область</span>
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