"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  images: string[];
  title: string;
  subtitle?: string;
}

export default function Hero({ images, title, subtitle }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carrossel de Imagens */}
      <div className="absolute inset-0 mx-2 sm:mx-4 my-4 sm:my-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 rounded-lg ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#f3f4f6", // Fallback color
            }}
          ></div>
        ))}
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4 drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Indicadores do Carrossel */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
