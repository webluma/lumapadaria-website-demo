"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              href="/sobre"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              SOBRE NÓS
            </Link>
            <Link
              href="/produtos"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              PRODUTOS
            </Link>
            <Link
              href="/unidades"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              UNIDADES
            </Link>
          </nav>

          {/* Center Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* Circular Logo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">
                L
              </span>
            </div>
            {/* Brand Name */}
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black uppercase tracking-wide">
                LUMA
              </div>
              <div className="text-xs sm:text-sm font-medium text-black uppercase tracking-wider">
                PADARIA
              </div>
            </div>
          </Link>

          {/* Right Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              href="/encomendas"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              ENCOMENDAS
            </Link>
            <Link
              href="/coffee-break"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              COFFEE BREAK
            </Link>
            <Link
              href="/contato"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              CONTATO
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
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
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/sobre"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SOBRE NÓS
              </Link>
              <Link
                href="/produtos"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRODUTOS
              </Link>
              <Link
                href="/unidades"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                UNIDADES
              </Link>
              <Link
                href="/encomendas"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ENCOMENDAS
              </Link>
              <Link
                href="/coffee-break"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COFFEE BREAK
              </Link>
              <Link
                href="/contato"
                className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTATO
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
