import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Наши работы <span className="text-primary">на карте</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Работаем по всей Москве и Московской области
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0&source=constructor&ll=37.6173%2C55.7558&z=10"
            width="100%"
            height="450"
            frameBorder="0"
            title="Карта работ"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg">Москва и Московская область</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg">Оставить заявку</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Оставить заявку</DialogTitle></DialogHeader>
              <CallbackForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
