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
                <button className="bg-amber-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                  PEÇA PELO WHATSAPP
                </button>
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
