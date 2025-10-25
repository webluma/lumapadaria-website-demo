import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function SobrePage() {
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
            NOSSA HISTÓRIA
          </h1>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Seção Principal */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6"
              style={{ fontFamily: "serif" }}
            >
              Do nosso forno para a sua mesa
            </h2>
          </div>

          {/* Primeira seção - Imagem à esquerda, texto à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
            {/* Imagem à esquerda */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/about.jpg"
                alt="Produtos da Luma Padaria"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
                priority
              />
            </div>

            {/* Texto à direita */}
            <div className="flex items-center">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  A história da Luma Padaria começou em 2010, no coração de
                  Curitiba, com um pequeno ponto, uma família unida e a vontade
                  de oferecer produtos frescos, feitos com qualidade e
                  dedicação. Logo, o cheirinho do pão saindo do forno e o
                  atendimento acolhedor conquistaram o bairro e, pouco a pouco,
                  a Luma Padaria conquistou Curitiba.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Ao longo dos anos, crescemos com consistência, mantendo a
                  essência que nos fez nascer: respeito pelas receitas, cuidado
                  com cada detalhe e a presença em todos os momentos do dia.
                  Hoje, com três unidades na cidade, continuamos oferecendo o
                  pão quentinho da manhã, o almoço caseiro, o doce da tarde e a
                  pizza artesanal da noite, sempre com a mesma verdade no
                  preparo.
                </p>
              </div>
            </div>
          </div>

          {/* Segunda seção - Texto à esquerda, imagem à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Texto à esquerda */}
            <div className="flex items-center">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Somos muito mais do que uma padaria. Somos parte da rotina de
                  quem busca praticidade com sabor e qualidade com carinho.
                  Acreditamos que comer bem é uma das melhores partes do dia.
                  Por isso, tudo o que fazemos é pensado para ser gostoso.
                  Valorizamos o que é simples, mas bem feito, como aquele pão
                  que lembra casa, o café que reenergiza, o prato que acolhe.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  A Luma Padaria é feita de famílias, de encontros, de pausas
                  que merecem ser saboreadas com calma. Cada uma das nossas três
                  unidades tem o mesmo cuidado com o preparo, a mesma dedicação
                  no atendimento e o mesmo compromisso com a qualidade. Seguimos
                  crescendo sem perder o que nos trouxe até aqui: o prazer de
                  servir bem, todos os dias.
                </p>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/about2.jpg"
                alt="Pão artesanal da Luma Padaria"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
              />
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
