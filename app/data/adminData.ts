// Dados administrativos da plataforma
export interface CoffeeBreakKit {
  id: string;
  title: string;
  units: string;
  price: string;
  priceUnit: string;
  salgados: string[];
  doces: string[];
  incluso: string[];
}

export interface AdminData {
  coffeeBreakKits: CoffeeBreakKit[];
  lastUpdated: string;
}

// Dados iniciais dos kits de coffee break
export const initialAdminData: AdminData = {
  coffeeBreakKits: [
    {
      id: "1",
      title: "COFFEE BREAK 1",
      units: "7 UNIDADES (DOCES E SALGADOS) POR PESSOA",
      price: "17,50",
      priceUnit: "por pessoa",
      salgados: [
        "Empadinha (frango ou palmito)",
        "Mini Bauru de Frios",
        "Mini Pão de Queijo",
        "Salgados Fritos (coxinha, risoles de carne, bolinha de queijo, quibe, pastel de carne ou pastel de queijo)"
      ],
      doces: [
        "Carolina (doce de leite, limão, brigadeiro, creme chiffon ou trufa)",
        "Mini Churros"
      ],
      incluso: [
        "300ml de bebida por pessoa (suco ou refrigerante)",
        "Descartáveis (copos e guardanapos)"
      ]
    },
    {
      id: "2",
      title: "COFFEE BREAK 2",
      units: "8 UNIDADES (DOCES E SALGADOS) POR PESSOA",
      price: "20,50",
      priceUnit: "por pessoa",
      salgados: [
        "Mini Sanduíche (frios, salame italiano, salpicão de frango ou peito de peru)",
        "Semi-folhado (frango ou palmito)",
        "Mini Croissant de Queijo",
        "Mini Bauru de Frios",
        "Mini Pão de Queijo",
        "Mini Pão de Batata"
      ],
      doces: [
        "Carolina (doce de leite, limão, brigadeiro, creme chiffon ou trufa)",
        "Mini Sonho de Goiaba"
      ],
      incluso: [
        "400ml de bebida por pessoa (suco ou refrigerante)",
        "Descartáveis (copos e guardanapos)"
      ]
    },
    {
      id: "3",
      title: "COFFEE BREAK 3",
      units: "10 UNIDADES (DOCES E SALGADOS) POR PESSOA",
      price: "24,50",
      priceUnit: "por pessoa",
      salgados: [
        "Mini Sanduíche (frios, salame italiano, salpicão de frango ou peito de peru)",
        "Semi-folhado (frango ou palmito)",
        "Salgados Fritos (coxinha, risoles de carne, bolinha de queijo, quibe, pastel de carne ou pastel de queijo)",
        "Empadinha (frango ou palmito)",
        "Mini Bauru de Frios",
        "Mini Pão de Queijo"
      ],
      doces: [
        "Carolina (doce de leite, limão, brigadeiro, creme chiffon ou trufa)",
        "Mini Tortelete de Morango",
        "Mini Sonho de Goiaba",
        "Mini Churros"
      ],
      incluso: [
        "400ml de bebida por pessoa (suco ou refrigerante)",
        "Descartáveis (copos e guardanapos)"
      ]
    }
  ],
  lastUpdated: new Date().toISOString()
};

// Função para salvar dados no localStorage (simulação de banco de dados)
export const saveAdminData = (data: AdminData): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminData', JSON.stringify(data));
  }
};

// Função para carregar dados do localStorage
export const loadAdminData = (): AdminData => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('adminData');
    if (saved) {
      return JSON.parse(saved);
    }
  }
  return initialAdminData;
};

// Função para atualizar preço de um kit
export const updateKitPrice = (kitId: string, newPrice: string): AdminData => {
  const currentData = loadAdminData();
  const updatedKits = currentData.coffeeBreakKits.map(kit => 
    kit.id === kitId ? { ...kit, price: newPrice } : kit
  );
  
  const updatedData: AdminData = {
    ...currentData,
    coffeeBreakKits: updatedKits,
    lastUpdated: new Date().toISOString()
  };
  
  saveAdminData(updatedData);
  return updatedData;
};

// Função para atualizar um kit completo
export const updateKit = (kitId: string, updatedKit: Partial<CoffeeBreakKit>): AdminData => {
  const currentData = loadAdminData();
  const updatedKits = currentData.coffeeBreakKits.map(kit => 
    kit.id === kitId ? { ...kit, ...updatedKit } : kit
  );
  
  const updatedData: AdminData = {
    ...currentData,
    coffeeBreakKits: updatedKits,
    lastUpdated: new Date().toISOString()
  };
  
  saveAdminData(updatedData);
  return updatedData;
};
