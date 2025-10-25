import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function UnidadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header da página */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "serif" }}
          >
            CONHEÇA NOSSAS UNIDADES
          </h1>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Seção das Unidades */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {siteData.units.units.map((unit, index) => (
              <div key={unit.id} className="bg-white mb-8 lg:mb-12">
                {/* Imagem da unidade */}
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Informações da unidade - Centralizadas */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">
                    {unit.name}
                  </h3>

                  <p className="text-gray-700 text-base sm:text-lg">
                    {unit.address}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base">
                    Domingo a quinta das 7h às 21h | Sexta e sábado das 7h às
                    22h
                  </p>

                  {/* Linha divisória */}
                  <hr className="border-gray-300 my-4" />

                  <p className="text-gray-600 text-sm sm:text-base">
                    Padaria • Confeitaria • Salgados • Almoço • Pizzas • Vinhos
                  </p>

                  {/* Linha divisória */}
                  <hr className="border-gray-300 my-4" />

                  {/* Botões de ação - Centralizados */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200 text-sm sm:text-base">
                      MENU {unit.name.toUpperCase()}
                    </button>
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base">
                      WHATSAPP
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
