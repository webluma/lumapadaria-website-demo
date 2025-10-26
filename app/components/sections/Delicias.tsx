import Image from "next/image";

interface DeliciasProps {
  title: string;
  subtitle: string;
  products: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
}

export default function Delicias({ title, subtitle, products }: DeliciasProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Título em script elegante */}
          <h2
            className="text-6xl font-bold text-amber-800 mb-4"
            style={{ fontFamily: "serif" }}
          >
            {title}
          </h2>
          {/* Subtítulo em maiúsculas */}
          <h3 className="text-3xl text-gray-900 mb-12 font-medium uppercase tracking-wide">
            {subtitle}
          </h3>
        </div>

        {/* Cards de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 p-6 text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain mx-auto mb-4"
              />

              <div className="mb-3">
                <Image
                  src={product.name}
                  alt={product.id}
                  width={120}
                  height={40}
                  className="object-contain mx-auto"
                />
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
