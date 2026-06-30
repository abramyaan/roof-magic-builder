import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const questions = [
  {
    q: "Какие кровельные работы необходимо выполнить?",
    options: ["Монтаж кровли", "Ремонт кровли", "Замена кровли", "Утепление кровли", "Демонтаж кровли", "Не знаю"],
  },
  {
    q: "Какой тип кровли вас интересует?",
    options: ["Металлочерепица", "Мягкая кровля", "Профнастил", "Фальцевая кровля", "Натуральная черепица", "Не знаю"],
  },
  {
    q: "Какова примерная площадь кровли?",
    options: ["До 100 м²", "100–200 м²", "200–400 м²", "Более 400 м²", "Не знаю"],
  },
];

export const QuizSection = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const isLastQuestion = step === questions.length;
  const progress = ((step) / (questions.length + 1)) * 100;

  const selectAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneError("");
    const val = e.target.value;
    const allDigits = val.replace(/\D/g, "");
    const digits = allDigits.startsWith("7") ? allDigits.slice(1) :
                   allDigits.startsWith("8") ? allDigits.slice(1) : allDigits;
    const ten = digits.slice(0, 10);
    setPhone(ten ? "+7 " + ten : "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 11) {
      setPhoneError("Введите полный номер телефона");
      return;
    }

    setLoading(true);

    const messageText = questions
      .map((q, i) => `${q.q} — ${answers[i] ?? "-"}`)
      .join("\n");

    try {
      await emailjs.send(
  "service_wfdroyt",
  "template_vpq6z3j",
  {
    name: "Заявка с квиза",
    phone: phone,
    time: new Date().toLocaleString("ru-RU"),
    message: messageText,
  },
  "5z1eosMz0bUSW9FCk"
);

      setStep(0);
      setAnswers([]);
      setPhone("");
      setPhoneError("");
      setLoading(false);
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      toast({ title: "Ошибка отправки", description: "Попробуйте ещё раз или позвоните нам", variant: "destructive" });
      setLoading(false);
    }
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
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    autoComplete="tel"
                    required
                    disabled={loading}
                    className={`text-lg h-14 font-mono ${phoneError ? "border-destructive" : ""}`}
                  />
                  {phoneError && <p className="text-destructive text-sm">{phoneError}</p>}
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Отправляем..." : "Получить расчёт"}
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