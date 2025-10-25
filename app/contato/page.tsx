"use client";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { siteData } from "../data/siteData";

export default function ContatoPage() {
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
            ENTRE EM CONTATO CONOSCO
          </h1>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Seção Principal */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Endereços - Lado Esquerdo */}
            <div>
              {siteData.units.units.map((unit, index) => (
                <div key={unit.id}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
                    {unit.name}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2">
                    {unit.address}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2">
                    <strong>Telefone:</strong> (41) 9999-9999
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
                    <strong>WhatsApp:</strong> (41) 9999-9999
                  </p>

                  {/* Linha divisória entre endereços (exceto no último) */}
                  {index < siteData.units.units.length - 1 && (
                    <hr className="border-gray-300 mb-6 sm:mb-8" />
                  )}
                </div>
              ))}
            </div>

            {/* Formulário - Lado Direito (sem container) */}
            <div>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                    placeholder="(41) 99999-9999"
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
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
