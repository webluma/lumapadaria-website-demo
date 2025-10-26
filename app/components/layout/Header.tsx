"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

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
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/home/padaria_logo.png"
              alt="Luma Padaria"
              width={120}
              height={40}
              className="object-contain"
            />
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
              KIT EVENTOS
            </Link>
            <Link
              href="/contato"
              className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-xs xl:text-sm"
            >
              CONTATO
            </Link>
          </nav>

          {/* User Icon - Hidden for now */}
          {false && (
            <div className="relative group">
              <button className="flex items-center space-x-2 text-amber-800 hover:text-amber-900 transition-colors">
                <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {isAuthenticated && (
                  <span className="hidden xl:block text-xs xl:text-sm font-medium uppercase">
                    {user}
                  </span>
                )}
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {isAuthenticated ? (
                    <>
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Painel Admin
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Sair
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Fazer Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

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
              {/* User Section - Hidden for now */}
              {false && (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3 text-amber-800 py-2">
                    <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium uppercase">
                      {isAuthenticated ? user : "Usuário"}
                    </span>
                  </div>
                  {isAuthenticated ? (
                    <>
                      <Link
                        href="/admin"
                        className="text-black hover:text-gray-600 transition-colors font-medium uppercase text-sm py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        PAINEL ADMIN
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-red-600 hover:text-red-700 transition-colors font-medium uppercase text-sm py-2 text-left"
                      >
                        SAIR
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/admin"
                      className="text-amber-800 hover:text-amber-900 transition-colors font-medium uppercase text-sm py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAZER LOGIN
                    </Link>
                  )}
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
