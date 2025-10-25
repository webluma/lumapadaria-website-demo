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
    const scrollSpeed = 0.5; // Velocidade lenta

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset quando chegar ao fim
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-2xl text-gray-600 mb-4 font-medium uppercase tracking-wide">
            {subtitle}
          </h4>
          <h2
            className="text-6xl font-bold text-amber-800 mb-8"
            style={{ fontFamily: "serif" }}
          >
            {title}
          </h2>
        </div>

        {/* Carrossel infinito */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-24"
            style={{
              width: "200%",
              animation: "scroll 60s linear infinite",
            }}
          >
            {/* Primeira passagem */}
            {units.map((unit) => (
              <div key={unit.id} className="flex-shrink-0 w-[500px]">
                <div className="relative h-64 w-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {unit.name}
                  </h3>
                </div>
              </div>
            ))}

            {/* Segunda passagem para loop infinito */}
            {units.map((unit) => (
              <div
                key={`${unit.id}-duplicate`}
                className="flex-shrink-0 w-[500px]"
              >
                <div className="relative h-64 w-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-900">
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
