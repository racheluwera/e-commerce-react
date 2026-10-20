import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    title: "AWESOME FURNITURE",
    highlight: "50% OFF",
    subtitle: "TRENDY DESIGNS",
  },
  {
    bg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    title: "MODERN LIVING",
    highlight: "30% OFF",
    subtitle: "NEW ARRIVALS",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[180px] sm:h-[280px] md:h-[360px] overflow-hidden">
      <img src={slides[current].bg} alt="hero" className="w-full h-full object-cover" />

      <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-black/60 text-white px-4 sm:px-8 py-2 sm:py-4 text-center">
        <p className="text-sm sm:text-xl font-light tracking-widest">{slides[current].title}</p>
        <p className="text-base sm:text-2xl font-bold">
          <span className="text-[#7cb800]">{slides[current].highlight}</span> {slides[current].subtitle}
        </p>
      </div>

      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#7cb800] text-white p-2 hover:bg-[#6aa300] transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#7cb800] text-white p-2 hover:bg-[#6aa300] transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;
