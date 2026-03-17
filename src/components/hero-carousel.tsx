"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Hotel } from "@/lib/mock-data";

export function HeroCarousel({ hotels }: { hotels: Hotel[] }) {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4500, // Slower, dreamier transitions
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <Carousel opts={{ loop: true }} plugins={[plugin]} className="h-full">
      <CarouselContent className="ml-0">
        {hotels.map((h) => (
          <CarouselItem key={h.slug} className="pl-0">
            <div className="relative h-dvh w-full overflow-hidden group">
              <Image
                src={h.image}
                alt={h.name}
                fill
                priority
                className="object-cover transition-transform duration-15000 ease-out scale-100 group-hover:scale-[1.12] motion-safe:animate-slow-pan"
              />
              {/* Deeper luxury overlays */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 glass" />
      <CarouselNext className="right-4 top-1/2 -translate-y-1/2 glass" />
    </Carousel>
  );
}

