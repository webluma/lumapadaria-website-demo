import Image from "next/image";

interface OrderOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttons: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

interface OrdersProps {
  title: string;
  subtitle: string;
  image: string;
  options: OrderOption[];
}

export default function Orders({
  title,
  subtitle,
  image,
  options,
}: OrdersProps) {
  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem à esquerda */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="Produtos da padaria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Opções de pedido à direita */}
          <div className="order-1 lg:order-2 space-y-12">
            {options.map((option) => (
              <div key={option.id} className="flex items-start space-x-4">
                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Botões */}
                  <div className="space-y-2">
                    {option.buttons.map((button, index) => (
                      <button
                        key={index}
                        className="px-6 py-2 rounded-md font-semibold text-sm transition-colors bg-amber-800 text-white hover:bg-amber-900"
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
