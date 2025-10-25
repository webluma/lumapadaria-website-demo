"use client";

import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { siteData } from "../data/siteData";
import { loadAdminData, AdminData } from "../data/adminData";

export default function CoffeeBreakPage() {
  const [adminData, setAdminData] = useState<AdminData | null>(null);

  useEffect(() => {
    const data = loadAdminData();
    setAdminData(data);
  }, []);

  const coffeeBreakOptions =
    adminData?.coffeeBreakKits.map((kit) => ({
      id: kit.id,
      title: kit.title,
      units: kit.units,
      salgados: kit.salgados,
      doces: kit.doces,
      incluso: kit.incluso,
      price: `R$ ${kit.price}`,
      priceUnit: kit.priceUnit,
    })) || [];

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
            COFFEE BREAK PARA EMPRESAS E EVENTOS
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
          {/* Texto introdutório */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              A Luma Padaria oferece soluções completas de coffee break com
              qualidade, variedade e praticidade. Seja para reuniões,
              treinamentos ou eventos corporativos, entregamos tudo pronto para
              servir, com o cuidado e o sabor que são a marca da nossa história
              desde 2010.
            </p>
          </div>

          {/* Título das opções */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
              Escolha o Coffee Break ideal para você
            </h2>
          </div>

          {/* Grid das opções de coffee break */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {coffeeBreakOptions.map((option) => (
              <div
                key={option.id}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm flex flex-col h-full"
              >
                {/* Título e unidades */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2">
                    {option.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {option.units}
                  </p>
                </div>

                {/* Conteúdo flexível */}
                <div className="flex-1">
                  {/* Salgados */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                      SALGADOS
                    </h4>
                    <ul className="space-y-1">
                      {option.salgados.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Doces */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                      DOCES
                    </h4>
                    <ul className="space-y-1">
                      {option.doces.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Incluso */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                      INCLUSO
                    </h4>
                    <ul className="space-y-1">
                      {option.incluso.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preço e Botão - Sempre no final */}
                <div className="mt-auto">
                  {/* Preço */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                      {option.price}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {option.priceUnit}
                    </div>
                  </div>

                  {/* Botão */}
                  <div className="text-center">
                    <button className="bg-amber-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200 text-xs sm:text-sm w-full">
                      ENCOMENDE AQUI
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informações importantes - Logo abaixo do primeiro kit */}
          <div className="mt-6 sm:mt-8 lg:mt-12">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4 text-center">
                Informações Importantes
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-3 flex-shrink-0"></span>
                  Pedido mínimo 10 pessoas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-3 flex-shrink-0"></span>
                  Taxa de entrega conforme endereço (consultar valores)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-3 flex-shrink-0"></span>
                  Realizar pedido com pelo menos 48h de antecedência
                </li>
              </ul>
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
