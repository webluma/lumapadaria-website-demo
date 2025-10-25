import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Banoffee from "./components/sections/Banoffee";
import Orders from "./components/sections/Orders";
import Units from "./components/sections/Units";
import Footer from "./components/layout/Footer";
import { siteData } from "./data/siteData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero images={siteData.hero.images} title={siteData.hero.title} />

      <Products products={siteData.products} />

      <Banoffee
        title={siteData.banoffee.title}
        subtitle={siteData.banoffee.subtitle}
        description={siteData.banoffee.description}
        image={siteData.banoffee.image}
      />

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              {siteData.quality.description}
            </p>
          </div>
        </div>
      </section>

      <Orders
        title={siteData.orders.title}
        subtitle={siteData.orders.subtitle}
        image={siteData.orders.image}
        options={siteData.orders.options}
      />

      <Units
        title={siteData.units.title}
        subtitle={siteData.units.subtitle}
        units={siteData.units.units}
      />

      <Footer
        brandName={siteData.footer.brandName}
        links={siteData.footer.links}
        copyright={siteData.footer.copyright}
        developer={siteData.footer.developer}
      />
    </div>
  );
}
