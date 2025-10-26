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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-2xl text-gray-600 mb-4 font-medium uppercase tracking-wide">
            {subtitle}
          </h4>
          <div className="mb-8">
            <Image
              src={title}
              alt="Encomendas"
              width={300}
              height={80}
              className="object-contain mx-auto"
            />
          </div>
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
                    {option.buttons.map((button, index) =>
                      button.text === "PEÇA PELO WHATSAPP" ? (
                        <a
                          key={index}
                          href="https://wa.me/5541000000000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-2 rounded-md font-semibold text-sm transition-colors bg-green-500 text-white hover:bg-green-600"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          {button.text}
                        </a>
                      ) : (
                        <button
                          key={index}
                          className="px-6 py-2 rounded-md font-semibold text-sm transition-colors bg-amber-800 text-white hover:bg-amber-900"
                        >
                          {button.text}
                        </button>
                      )
                    )}
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
