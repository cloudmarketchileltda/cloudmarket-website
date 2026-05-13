import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface MobileMockupCarouselProps {
  images: string[];
}

export const MobileMockupCarousel = ({ images }: MobileMockupCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto w-[240px] h-[480px] rounded-[3rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden flex-shrink-0 ring-1 ring-white/10">
      {/* Side Buttons */}
      <div className="absolute left-[-11px] top-24 w-1 h-12 bg-zinc-800 rounded-l-md border-r border-black/20"></div>
      <div className="absolute left-[-11px] top-40 w-1 h-12 bg-zinc-800 rounded-l-md border-r border-black/20"></div>
      <div className="absolute right-[-11px] top-32 w-1 h-16 bg-zinc-800 rounded-r-md border-l border-black/20"></div>

      {/* Notch / Dynamic Island */}
      <div className="absolute top-3 inset-x-0 mx-auto w-20 h-6 bg-black rounded-full z-20 flex items-center justify-center">
        <div className="w-8 h-1 bg-zinc-800/50 rounded-full"></div>
      </div>

      <div className="overflow-hidden w-full h-full rounded-[2.2rem] bg-black" ref={emblaRef}>
        <div className="flex w-full h-full">
          {images.map((img, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <img
                src={img}
                alt={`App Screen ${index + 1}`}
                className="block w-full h-full object-cover bg-black"
                loading="lazy"
              />
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white w-4" : "bg-white/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

