import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const CallbackForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_wfdroyt",
        "template_vpq6z3j",
        {
          name: name,
          time: new Date().toLocaleString("ru-RU"),
          phone: phone,
          message: "Заявка с формы обратного звонка",
        },
        "5z1eosMz0bUSW9FCk"
      );

      setName("");
      setPhone("");
      setLoading(false);
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      toast({ title: "Ошибка отправки", description: "Попробуйте ещё раз или позвоните нам", variant: "destructive" });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading} />
      <Input placeholder="Ваш телефон" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={loading} />
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
        {loading ? "Отправляем..." : "Отправить заявку"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
  );
};