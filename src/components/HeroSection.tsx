import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react"; // Добавил Star для иконок рейтинга
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-roofing.jpg";

const benefits = [
  "Гарантия 5 лет на все виды работ",
  "Учитываем особенности климата МСК и МО",
  "Бесплатный выезд на замер и расчёт",
  "Работаем по договору, фиксированная смета",
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Кровельные работы в СПб" 
          className="w-full h-full object-cover" 
          width={1920} 
          height={1080} 
        />
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
            <span className="text-primary">в Москве и МО</span>
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

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a href="#quiz">Рассчитать стоимость</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              <a href="tel:+78121234567">Позвонить нам</a>
            </Button>
          </div>

          {/* Плашки доверия (Яндекс и Авито) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {/* Яндекс */}
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/10 p-2 px-4 rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 bg-[#f33] rounded-full text-white font-bold text-lg">Я</div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold leading-none text-lg">4.9</span>
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Яндекс Карты</p>
              </div>
            </div>

            {/* Авито */}
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/10 p-2 px-4 rounded-xl">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-[#96ef00]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffbb00]"></div>
                <div className="w-2 h-2 rounded-full bg-[#00aaee]"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold leading-none text-lg">5.0</span>
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Авито отзывы</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};