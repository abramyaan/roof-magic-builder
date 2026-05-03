import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Алексей К.", text: "Отличная бригада! Сделали крышу на даче за 4 дня. Качество на высоте, всё аккуратно. Рекомендую!", rating: 5 },
  { name: "Марина С.", text: "Обратились по рекомендации. Ремонт кровли выполнен быстро и без нареканий. Протечки устранены полностью.", rating: 5 },
  { name: "Дмитрий В.", text: "Заказывал монтаж металлочерепицы. Ребята профессионалы, работают чётко. Цена адекватная, гарантию дали.", rating: 4 },
  { name: "Елена П.", text: "Делали утепление мансарды. Всё по уму, материалы качественные. Зимой стало заметно теплее. Спасибо!", rating: 4 },
  { name: "Сергей Л.", text: "Нужна была срочная замена кровли после урагана. Приехали быстро, сделали за 3 дня. Очень благодарен!", rating: 5 },
  { name: "Наталья Р.", text: "Заказывали водосточную систему. Установили качественно, выглядит аккуратно. Цена порадовала.", rating: 4 },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          Отзывы <span className="text-primary">наших клиентов</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-md border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-base">{r.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < r.rating ? "text-highlight fill-highlight" : "text-muted"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">«{r.text}»</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
