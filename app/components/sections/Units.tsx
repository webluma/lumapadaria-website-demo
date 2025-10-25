"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Unit {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface UnitsProps {
  title: string;
  subtitle: string;
  units: Unit[];
}

export default function Units({ title, subtitle, units }: UnitsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let animationId: number;

    const getScrollSpeed = () => {
      // Velocidade 4x mais rápida em mobile, normal em desktop
      return window.innerWidth < 768 ? 2.0 : 0.5;
    };

    const scroll = () => {
      const scrollSpeed = getScrollSpeed();
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset quando chegar ao fim
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4 font-medium uppercase tracking-wide">
            {subtitle}
          </h4>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6 sm:mb-8"
            style={{ fontFamily: "serif" }}
          >
            {title}
          </h2>
        </div>

        {/* Carrossel infinito */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 sm:space-x-12 lg:space-x-16 xl:space-x-24"
            style={{
              width: "200%",
              animation: "scroll 60s linear infinite",
            }}
          >
            {/* Primeira passagem */}
            {units.map((unit) => (
              <div
                key={unit.id}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
              >
                <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
                  />
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {unit.name}
                  </h3>
                </div>
              </div>
            ))}

            {/* Segunda passagem para loop infinito */}
            {units.map((unit) => (
              <div
                key={`${unit.id}-duplicate`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
              >
                <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
                  />
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {unit.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
