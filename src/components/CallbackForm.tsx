import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const CallbackForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена!", description: "Мы перезвоним вам в ближайшее время." });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input placeholder="Ваш телефон" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <Button type="submit" variant="hero" size="lg" className="w-full">
        Отправить заявку
      </Button>
      <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
  );
};
