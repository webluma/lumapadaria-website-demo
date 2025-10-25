"use client";

import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { siteData } from "../data/siteData";
import {
  loadAdminData,
  saveAdminData,
  updateKitPrice,
  updateKit,
  AdminData,
  CoffeeBreakKit,
} from "../data/adminData";

function AdminContent() {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPrices, setEditingPrices] = useState<{ [key: string]: string }>(
    {}
  );
  const [editingKits, setEditingKits] = useState<{
    [key: string]: Partial<CoffeeBreakKit>;
  }>({});

  useEffect(() => {
    const data = loadAdminData();
    setAdminData(data);
    // Inicializar dados para edição
    const prices: { [key: string]: string } = {};
    const kits: { [key: string]: Partial<CoffeeBreakKit> } = {};
    data.coffeeBreakKits.forEach((kit) => {
      prices[kit.id] = kit.price;
      kits[kit.id] = {
        title: kit.title,
        units: kit.units,
        price: kit.price,
        priceUnit: kit.priceUnit,
        salgados: [...kit.salgados],
        doces: [...kit.doces],
        incluso: [...kit.incluso],
      };
    });
    setEditingPrices(prices);
    setEditingKits(kits);
  }, []);

  const handlePriceChange = (kitId: string, value: string) => {
    setEditingPrices((prev) => ({
      ...prev,
      [kitId]: value,
    }));
  };

  const handleKitChange = (
    kitId: string,
    field: keyof CoffeeBreakKit,
    value: string | string[]
  ) => {
    setEditingKits((prev) => ({
      ...prev,
      [kitId]: {
        ...prev[kitId],
        [field]: value,
      },
    }));
  };

  const handleArrayItemChange = (
    kitId: string,
    field: "salgados" | "doces" | "incluso",
    index: number,
    value: string
  ) => {
    setEditingKits((prev) => {
      const currentArray = prev[kitId]?.[field] || [];
      const newArray = [...currentArray];
      newArray[index] = value;
      return {
        ...prev,
        [kitId]: {
          ...prev[kitId],
          [field]: newArray,
        },
      };
    });
  };

  const addArrayItem = (
    kitId: string,
    field: "salgados" | "doces" | "incluso"
  ) => {
    setEditingKits((prev) => {
      const currentArray = prev[kitId]?.[field] || [];
      return {
        ...prev,
        [kitId]: {
          ...prev[kitId],
          [field]: [...currentArray, ""],
        },
      };
    });
  };

  const removeArrayItem = (
    kitId: string,
    field: "salgados" | "doces" | "incluso",
    index: number
  ) => {
    setEditingKits((prev) => {
      const currentArray = prev[kitId]?.[field] || [];
      const newArray = currentArray.filter((_, i) => i !== index);
      return {
        ...prev,
        [kitId]: {
          ...prev[kitId],
          [field]: newArray,
        },
      };
    });
  };

  const handleSave = () => {
    if (!adminData) return;

    // Atualizar cada kit com todas as alterações
    let updatedData = adminData;
    Object.keys(editingKits).forEach((kitId) => {
      const kitUpdates = editingKits[kitId];
      if (kitUpdates) {
        updatedData = updateKit(kitId, kitUpdates);
      }
    });

    setAdminData(updatedData);
    setIsEditing(false);
    alert("Kits atualizados com sucesso!");
  };

  const handleCancel = () => {
    if (!adminData) return;

    // Restaurar valores originais
    const prices: { [key: string]: string } = {};
    const kits: { [key: string]: Partial<CoffeeBreakKit> } = {};
    adminData.coffeeBreakKits.forEach((kit) => {
      prices[kit.id] = kit.price;
      kits[kit.id] = {
        title: kit.title,
        units: kit.units,
        price: kit.price,
        priceUnit: kit.priceUnit,
        salgados: [...kit.salgados],
        doces: [...kit.doces],
        incluso: [...kit.incluso],
      };
    });
    setEditingPrices(prices);
    setEditingKits(kits);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header da página */}
      <div className="bg-white py-8 sm:py-12 lg:py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "serif" }}
            >
              ÁREA ADMINISTRATIVA
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Gerencie os preços e configurações da plataforma
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Principal */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total de Kits
                  </p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Preço Médio
                  </p>
                  <p className="text-2xl font-bold text-gray-900">R$ 20,83</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Última Atualização
                  </p>
                  <p className="text-lg font-bold text-gray-900">Hoje</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Status</p>
                  <p className="text-lg font-bold text-gray-900">Ativo</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Gerenciamento de Preços */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Gerenciamento de Kits
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Configure todos os detalhes dos kits de coffee break
                  </p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    EDITAR KITS
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      SALVAR
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      CANCELAR
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {adminData?.coffeeBreakKits.map((kit, index) => (
                  <div
                    key={kit.id}
                    className="bg-gray-50 rounded-lg p-6 border-2 border-transparent hover:border-gray-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600 font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          {isEditing ? (
                            <div className="space-y-2">
                              <input
                                type="text"
                                value={editingKits[kit.id]?.title || kit.title}
                                onChange={(e) =>
                                  handleKitChange(
                                    kit.id,
                                    "title",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-lg font-bold text-gray-900"
                              />
                              <input
                                type="text"
                                value={editingKits[kit.id]?.units || kit.units}
                                onChange={(e) =>
                                  handleKitChange(
                                    kit.id,
                                    "units",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600"
                              />
                            </div>
                          ) : (
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">
                                {kit.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {kit.units}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Preço:
                        </span>
                        {isEditing ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">R$</span>
                            <input
                              type="text"
                              value={editingKits[kit.id]?.price || kit.price}
                              onChange={(e) =>
                                handleKitChange(kit.id, "price", e.target.value)
                              }
                              className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center font-semibold text-sm"
                              placeholder={kit.price}
                            />
                          </div>
                        ) : (
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              R$ {kit.price}
                            </span>
                            <p className="text-xs text-gray-500">
                              {kit.priceUnit}
                            </p>
                          </div>
                        )}
                      </div>

                      {isEditing && (
                        <div className="space-y-4 pt-4 border-t border-gray-200">
                          {/* Salgados */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                Salgados:
                              </span>
                              <button
                                onClick={() => addArrayItem(kit.id, "salgados")}
                                className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                              >
                                + Adicionar
                              </button>
                            </div>
                            <div className="space-y-2">
                              {(
                                editingKits[kit.id]?.salgados || kit.salgados
                              ).map((item, itemIndex) => (
                                <div key={itemIndex} className="flex gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) =>
                                      handleArrayItemChange(
                                        kit.id,
                                        "salgados",
                                        itemIndex,
                                        e.target.value
                                      )
                                    }
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                  />
                                  <button
                                    onClick={() =>
                                      removeArrayItem(
                                        kit.id,
                                        "salgados",
                                        itemIndex
                                      )
                                    }
                                    className="text-red-600 hover:text-red-800 px-2"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Doces */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                Doces:
                              </span>
                              <button
                                onClick={() => addArrayItem(kit.id, "doces")}
                                className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                              >
                                + Adicionar
                              </button>
                            </div>
                            <div className="space-y-2">
                              {(editingKits[kit.id]?.doces || kit.doces).map(
                                (item, itemIndex) => (
                                  <div key={itemIndex} className="flex gap-2">
                                    <input
                                      type="text"
                                      value={item}
                                      onChange={(e) =>
                                        handleArrayItemChange(
                                          kit.id,
                                          "doces",
                                          itemIndex,
                                          e.target.value
                                        )
                                      }
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                    />
                                    <button
                                      onClick={() =>
                                        removeArrayItem(
                                          kit.id,
                                          "doces",
                                          itemIndex
                                        )
                                      }
                                      className="text-red-600 hover:text-red-800 px-2"
                                    >
                                      ×
                                    </button>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Incluso */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                Incluso:
                              </span>
                              <button
                                onClick={() => addArrayItem(kit.id, "incluso")}
                                className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                              >
                                + Adicionar
                              </button>
                            </div>
                            <div className="space-y-2">
                              {(
                                editingKits[kit.id]?.incluso || kit.incluso
                              ).map((item, itemIndex) => (
                                <div key={itemIndex} className="flex gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) =>
                                      handleArrayItemChange(
                                        kit.id,
                                        "incluso",
                                        itemIndex,
                                        e.target.value
                                      )
                                    }
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                  />
                                  <button
                                    onClick={() =>
                                      removeArrayItem(
                                        kit.id,
                                        "incluso",
                                        itemIndex
                                      )
                                    }
                                    className="text-red-600 hover:text-red-800 px-2"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {!isEditing && (
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Salgados:</span>
                            <span className="font-medium">
                              {kit.salgados.length} itens
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Doces:</span>
                            <span className="font-medium">
                              {kit.doces.length} itens
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
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

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminContent />
    </ProtectedRoute>
  );
}
