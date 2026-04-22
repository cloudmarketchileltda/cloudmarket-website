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
    <div className="relative mx-auto w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-xl overflow-hidden flex-shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 mx-auto w-24 h-5 bg-zinc-900 rounded-b-xl z-20"></div>

      <div className="overflow-hidden w-full h-full rounded-[2rem] bg-background" ref={emblaRef}>
        <div className="flex w-full h-full">
          {images.map((img, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <img
                src={img}
                alt={`App Screen ${index + 1}`}
                className="block w-full h-full object-fill bg-background"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-3" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
