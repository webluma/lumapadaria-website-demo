import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function ProdutosPage() {
  const productCategories = [
    {
      id: "paes",
      name: "Pães",
      description:
        "Pães frescos e artesanais, feitos com ingredientes selecionados e muito carinho. Do pão francês ao pão de forma, temos o que você precisa para começar bem o dia.",
      image: "/images/produtos.png",
    },
    {
      id: "doces",
      name: "Doces",
      description:
        "Doces deliciosos e irresistíveis, perfeitos para adoçar qualquer momento. Bolos, tortas, doces tradicionais e sobremesas especiais.",
      image: "/images/produtos2.jpg",
    },
    {
      id: "salgados",
      name: "Salgados",
      description:
        "Salgados crocantes e saborosos, ideais para lanches e refeições. Coxinhas, pastéis, empadas e muito mais para satisfazer seu paladar.",
      image: "/images/produtos3.png",
    },
    {
      id: "cafeteria",
      name: "Cafeteria",
      description:
        "Cafés especiais, bebidas quentes e frias, sucos naturais e vitaminas. O ambiente perfeito para uma pausa deliciosa.",
      image: "/images/produtos4.png",
    },
  ];

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
            NOSSOS PRODUTOS
          </h1>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Seção dos Produtos */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {productCategories.map((category, index) => (
              <div key={category.id} className="bg-white">
                {/* Imagem do produto */}
                <div className="relative h-48 sm:h-56 lg:h-64 w-full mb-4 sm:mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                </div>

                {/* Informações do produto */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    {category.name}
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Linha divisória */}
                  <hr className="border-gray-300 my-3 sm:my-4" />

                  {/* Botão de ação */}
                  <div className="pt-3 sm:pt-4">
                    <button className="bg-amber-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                      VER CARDÁPIO
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
