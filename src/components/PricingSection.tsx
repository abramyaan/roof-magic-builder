import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";

const prices = [
  { service: "Монтаж металлочерепицы", price: "от 350 ₽/м²" },
  { service: "Монтаж мягкой кровли", price: "от 300 ₽/м²" },
  { service: "Монтаж профнастила", price: "от 280 ₽/м²" },
  { service: "Утепление кровли", price: "от 200 ₽/м²" },
  { service: "Гидроизоляция кровли", price: "от 250 ₽/м²" },
  { service: "Демонтаж старой кровли", price: "от 150 ₽/м²" },
  { service: "Монтаж стропильной системы", price: "от 500 ₽/м²" },
  { service: "Установка водостоков", price: "от 350 ₽/п.м." },
];

const partners = [
  "ТЕХНОНИКОЛЬ", "Grand Line", "Металл Профиль", "КНАУФ", "Rockwool", "Tegola",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-section-dark-foreground mb-12">
          Цены на <span className="text-primary">кровельные работы</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl overflow-hidden shadow-xl mb-16">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left px-6 py-4 text-secondary-foreground font-bold text-lg">Вид работ</th>
                <th className="text-right px-6 py-4 text-secondary-foreground font-bold text-lg">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr key={p.service} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <td className="px-6 py-4 text-base">{p.service}</td>
                  <td className="px-6 py-4 text-right font-bold text-primary text-base">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Partners */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-section-dark-foreground mb-3">
            Наши <span className="text-primary">партнёры</span>
          </h3>
          <p className="text-section-dark-foreground/70 text-center mb-8">
            Используем только качественные материалы, сотрудничаем с надёжными и именитыми брендами
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <motion.div
                key={p}
                whileHover={{ scale: 1.05 }}
                className="bg-card px-8 py-4 rounded-xl shadow-md font-bold text-lg"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg">Оставить заявку</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Оставить заявку</DialogTitle></DialogHeader>
              <CallbackForm />
            </DialogContent>
          </Dialog>
          <p className="text-section-dark-foreground/70">
            или позвоните нам: <a href="tel:+79991234567" className="text-primary font-bold text-xl hover:underline">+7 (999) 123-45-67</a>
          </p>
        </div>
      </div>
    </section>
  );
};
