import Image from "next/image";

interface BanoffeeProps {
  subtitle: string;
  description: string;
  image: string;
}

export default function Banoffee({
  subtitle,
  description,
  image,
}: BanoffeeProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Subtítulo em maiúsculas */}
          <h4 className="text-2xl text-gray-600 mb-4 font-medium uppercase tracking-wide">
            {subtitle}
          </h4>

          {/* Imagem centralizada */}
          <div className="flex justify-center mb-12">
            <Image
              src={image}
              alt="Banoffee da Luma Padaria"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>

          {/* Texto descritivo */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
