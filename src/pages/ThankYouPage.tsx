import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-4">
          Спасибо за заявку!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Мы получили вашу заявку и свяжемся с вами в ближайшее время.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;