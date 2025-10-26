import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function EncomendasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header da página */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 xl:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "serif" }}
          >
            FAÇA SEU PEDIDO AQUI
          </h1>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Seção Principal */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Primeira seção - Para comer já */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                Para comer já
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Escolha, peça e aproveite. Delícias fresquinhas prontas para
                deixar o seu dia mais gostoso, do jeito que só a Luma Padaria
                sabe fazer.
              </p>

              <div className="pt-3 sm:pt-4">
                <button className="bg-amber-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                  PEÇA PELO IFOOD
                </button>
              </div>
            </div>

            {/* Imagem da primeira seção */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/hero2.jpg"
                alt="Produtos frescos da Luma Padaria"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full max-w-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Segunda seção - Para eventos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mt-12 sm:mt-16 lg:mt-20">
            {/* Imagem da segunda seção */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/hero5.jpg"
                alt="Produtos para eventos da Luma Padaria"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full max-w-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                Para eventos
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Aniversários, reuniões ou comemorações especiais. Faça sua
                encomenda com antecedência e surpreenda seus convidados com o
                sabor da Luma Padaria.
              </p>

              <div className="pt-3 sm:pt-4">
                <a
                  href="https://wa.me/5541000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  PEÇA PELO WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        brandName={siteData.footer.brandName}
        links={siteData.footer.links}
        copyright={siteData.footer.copyright}
        developer={siteData.footer.developer}
      />
    </div>
  );
}
