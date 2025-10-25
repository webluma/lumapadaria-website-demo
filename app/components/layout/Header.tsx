import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/sobre"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              SOBRE NÓS
            </Link>
            <Link
              href="/produtos"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              PRODUTOS
            </Link>
            <Link
              href="/unidades"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              UNIDADES
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex items-center space-x-3">
            {/* Circular Logo */}
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            {/* Brand Name */}
            <div className="text-center">
              <div className="text-3xl font-bold text-black uppercase tracking-wide">
                LUMA
              </div>
              <div className="text-sm font-medium text-black uppercase tracking-wider">
                PADARIA
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/encomendas"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              ENCOMENDAS
            </Link>
            <Link
              href="/coffee-break"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              COFFEE BREAK
            </Link>
            <Link
              href="/contato"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm"
            >
              CONTATO
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
