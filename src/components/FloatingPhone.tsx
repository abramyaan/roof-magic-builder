import React from "react";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+79772519076"
      // Заменили инлайн-стили на bg-orange-500 и shadow-orange-500/40
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white bg-orange-500 shadow-xl shadow-orange-500/40 transition-all duration-300 hover:bg-orange-600 hover:scale-110 active:scale-95 will-change-transform md:bottom-8 md:right-8"
      aria-label="Позвонить нам"
    >
      {/* Пульсирующий фоновый эффект (тоже сделали оранжевым bg-orange-400/50) */}
      <span 
        className="absolute inset-0 rounded-full bg-orange-400/50 animate-ping pointer-events-none" 
        style={{ animationDuration: '2s' }} 
      />
      
      {/* Иконка телефона */}
      <Phone className="w-6 h-6 fill-current" />
    </a>
  );
};

export default FloatingPhone;