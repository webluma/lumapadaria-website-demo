import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Imagem no topo do card */}
              <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Conteúdo do card */}
              <div className="p-4 sm:p-6 text-center">
                {/* Título como imagem */}
                <div className="mb-2 sm:mb-3">
                  <Image
                    src={product.name}
                    alt={product.id}
                    width={120}
                    height={40}
                    className="object-contain mx-auto"
                  />
                </div>

                {/* Descrição */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
