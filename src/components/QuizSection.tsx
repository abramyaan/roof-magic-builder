import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const questions = [
  {
    q: "Какие кровельные работы необходимо выполнить?",
    options: ["Монтаж кровли", "Ремонт кровли", "Замена кровли", "Утепление кровли", "Демонтаж кровли"],
  },
  {
    q: "Какой тип кровли вас интересует?",
    options: ["Металлочерепица", "Мягкая кровля", "Профнастил", "Фальцевая кровля", "Натуральная черепица", "Не определился"],
  },
  {
    q: "Какова примерная площадь кровли?",
    options: ["До 100 м²", "100–200 м²", "200–400 м²", "Более 400 м²", "Не знаю"],
  },
];

export const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const isLastQuestion = step === questions.length;
  const progress = ((step) / (questions.length + 1)) * 100;

  const selectAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена!", description: "Мы рассчитаем стоимость и перезвоним." });
    setStep(0);
    setAnswers([]);
    setPhone("");
  };

  return (
    <section id="quiz" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Рассчитайте стоимость <span className="text-primary">онлайн</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Ответьте на несколько простых вопросов и мы рассчитаем стоимость кровельных работ
        </p>

        <div className="max-w-2xl mx-auto bg-background rounded-2xl shadow-xl p-8 border border-border">
          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-3 mb-8">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!isLastQuestion ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Вопрос {step + 1} из {questions.length}</p>
                <h3 className="text-xl font-bold mb-6">{questions[step].q}</h3>
                <div className="grid gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectAnswer(opt)}
                      className="text-left px-5 py-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-base font-medium"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3 className="text-xl font-bold mb-4">Почти готово! Оставьте номер для расчёта</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Ваш телефон" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="text-lg h-14" />
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Получить расчёт
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
