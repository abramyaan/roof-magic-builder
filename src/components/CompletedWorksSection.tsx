import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const works = [
  { img: work1, title: "Монтаж кровли из металлочерепицы", desc: "Частный дом в Подмосковье, площадь 180 м². Полный монтаж за 5 дней.", area: "180 м²" },
  { img: work2, title: "Строительство крыши под ключ", desc: "Загородный коттедж. Стропильная система, утепление, покрытие.", area: "250 м²" },
  { img: work3, title: "Утепление мансардной кровли", desc: "Утепление минеральной ватой 200мм, пароизоляция, подшивка.", area: "120 м²" },
];

export const CompletedWorksSection = () => {
  return (
    <section id="completed" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Примеры <span className="text-primary">выполненных работ</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">Объекты, которыми мы гордимся</p>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="overflow-hidden h-56">
                <img src={w.img} alt={w.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-muted-foreground mb-1">{w.desc}</p>
                <p className="text-sm font-semibold text-primary mb-4">Площадь: {w.area}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-full">Заказать такие же работы</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заявка: {w.title}</DialogTitle>
                    </DialogHeader>
                    <CallbackForm />
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
