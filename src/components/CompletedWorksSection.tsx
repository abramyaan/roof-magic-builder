import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { CallbackForm } from "./CallbackForm";

// Импорты ваших фотографий
import work1Before from "@/assets/work-1-before.jpg";
import work1After from "@/assets/work-1-after.jpg";
import work2Before from "@/assets/work-2-before.jpg";
import work2After from "@/assets/work-2-after.jpg";
import work3Before from "@/assets/work-3-before.jpg";
import work3After from "@/assets/work-3-after.jpg";
import work4Before from "@/assets/work-4-before.jpg";
import work4After from "@/assets/work-4-after.jpg";

const works = [
  { 
    images: [work1Before, work1After], 
    title: "Реконструкция кровли", 
    desc: "Произведен полный комплекс работ по замене изношенного покрытия на современную металлочерепицу, включая демонтаж старого слоя, усиление стропильной системы, монтаж гидроизоляционной мембраны с устройством вентиляционного зазора и отделку «кукушки».", 
    area: "95 м²" 
  },
  { 
    images: [work2Before, work2After], 
    title: "Монтаж односкатной кровли", 
    desc: "Строительство стропильной системы и настил кровельного покрытия на кирпичное здание. Выполнено устройство шаговой обрешетки, выравнивание плоскости ската и монтаж профилированного листа с установкой торцевых планок.", 
    area: "45 м²" 
  },
  { 
    images: [work3Before, work3After], 
    title: "Устройство двускатной кровли", 
    desc: "Монтаж кровельной системы на новом объекте. Выполнено утепление подкровельного пространства, установка пароизоляции и ветрозащитной мембраны. Финишное покрытие — металлочерепица с системой снегозадержания.", 
    area: "160 м²" 
  },
  { 
    images: [work4Before, work4After], 
    title: "Возведение мансардного этажа", 
    desc: "Строительство высокой ломаной кровли с нуля. Выполнен монтаж каркаса фронтонов, усиление стропильной группы, обшивка OSB-плитами и настил оцинкованного профлиста для увеличения жилой площади.", 
    area: "80 м²" 
  },
];

const WorkCard = ({ work, index }: { work: typeof works[0]; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // По умолчанию показываем "После" (индекс 1)

  const toggleImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group"
    >
      <div className="relative h-64 overflow-hidden cursor-pointer" onClick={toggleImage}>
        <img 
          src={work.images[currentImageIndex]} 
          alt={work.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Индикатор До/После */}
        <div className="absolute top-4 left-4 flex gap-2">
           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter backdrop-blur-md border transition-colors ${
             currentImageIndex === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-black/40 text-white border-white/20"
           }`}>
             До
           </span>
           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter backdrop-blur-md border transition-colors ${
             currentImageIndex === 1 ? "bg-primary text-primary-foreground border-primary" : "bg-black/40 text-white border-white/20"
           }`}>
             После
           </span>
        </div>

        {/* Кнопки переключения */}
        <div className="absolute inset-y-0 inset-x-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg" onClick={toggleImage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg" onClick={toggleImage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold leading-tight">{work.title}</h3>
          <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-lg whitespace-nowrap ml-2">
            {work.area}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {work.desc}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full rounded-xl font-bold shadow-sm hover:shadow-md transition-all">
              Хочу так же
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Заявка по объекту: {work.title}</DialogTitle>
            </DialogHeader>
            <CallbackForm />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export const CompletedWorksSection = () => {
  return (
    <section id="completed" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Наши <span className="text-primary italic">объекты</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы не просто меняем покрытие, а создаем надежную инженерную систему, которая защищает ваш дом в любую погоду.
            </p>
          </div>
          <div className="hidden md:block text-right border-l-2 border-primary pl-6">
            <span className="block text-3xl font-black italic">100%</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">гарантия качества</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((w, i) => (
            <WorkCard key={w.title} work={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};