import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CallbackForm } from "./CallbackForm";

const services = [
  { img: service1, title: "Монтаж кровли", desc: "Профессиональный монтаж кровли любой сложности. Металлочерепица, мягкая кровля, профнастил." },
  { img: service2, title: "Ремонт кровли", desc: "Устранение протечек, замена повреждённых элементов, восстановление герметичности." },
  { img: service3, title: "Гидроизоляция", desc: "Качественная гидроизоляция плоских и скатных кровель современными материалами." },
  { img: service4, title: "Водосточные системы", desc: "Установка и ремонт водосточных систем, монтаж желобов и труб." },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-section-dark-foreground mb-4">
          Наши <span className="text-primary">услуги</span>
        </h2>
        <p className="text-lg text-section-dark-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Полный спектр кровельных работ для частных домов и коммерческих объектов
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              <div className="overflow-hidden h-48">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{s.desc}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" size="sm" className="w-full">Оставить заявку</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заявка: {s.title}</DialogTitle>
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
