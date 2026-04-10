import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-roofing.jpg";

const benefits = [
  "Гарантия 5 лет на все виды работ",
  "Работаем по договору, всё официально",
  "Бесплатный выезд на замер и расчёт",
  "Качественные материалы от проверенных брендов",
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Кровельные работы" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6 text-shadow">
            Кровельные работы
            <br />
            <span className="text-primary">по Москве и МО</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-highlight">
              с гарантией 5 лет
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground text-lg">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#quiz">Рассчитать стоимость</a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
              <a href="tel:+79991234567">Позвонить нам</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
