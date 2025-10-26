export const siteData = {
  hero: {
    images: [
      "/hero.jpg",
      "/hero2.jpg",
      "/hero3.jpg",
      "/hero4.jpg",
      "/hero5.jpg",
    ],
    title: "PARA TODOS OS\nMOMENTOS DO DIA",
  },
  
  delicias: {
    title: "Delícias",
    subtitle: "DO CAFÉ-DA-MANHÃ AO JANTAR",
    products: [
      {
        id: "paes",
        name: "/images/delicias/paes.png",
        description: "Do pão francês às receitas artesanais. Variedade e frescor em cada fornada.",
        image: "/images/paes.png"
      },
      {
        id: "doces",
        name: "/images/delicias/doces.png",
        description: "Tortas, bolos e sobremesas que deixam qualquer pausa mais gostosa.",
        image: "/images/doces.png"
      },
      {
        id: "salgados",
        name: "/images/delicias/salgados.png",
        description: "Clássicos de padaria e diversas opções especiais para qualquer hora.",
        image: "/images/salgados.png"
      },
      {
        id: "cafes",
        name: "/images/delicias/cafes.png",
        description: "Cafés especiais e bebidas quentes. Perfeitos para acompanhar nossos produtos.",
        image: "/images/cafes.png"
      }
    ]
  },

  products: [
    {
      id: "paes",
      name: "/images/delicias/paes.png",
      description: "Do pão francês às receitas artesanais. Variedade e frescor em cada fornada.",
      image: "/images/paes.png"
    },
    {
      id: "doces",
      name: "/images/delicias/doces.png",
      description: "Tortas, bolos e sobremesas que deixam qualquer pausa mais gostosa.",
      image: "/images/doces.png"
    },
    {
      id: "salgados",
      name: "/images/delicias/salgados.png",
      description: "Clássicos de padaria e diversas opções especiais para qualquer hora.",
      image: "/images/salgados.png"
    },
    {
      id: "cafes",
      name: "/images/delicias/cafes.png",
      description: "Cafés especiais e bebidas quentes. Perfeitos para acompanhar nossos produtos.",
      image: "/images/cafes.png"
    }
  ],


  banoffee: {
    subtitle: "UM ÍCONE DA NOSSA COZINHA",
    description: "Pequeno no tamanho, mas gigante no sabor, ele carrega a tradição da Luma Padaria e o toque artesanal que transforma cada receita em uma obra-prima. Feito com uma base delicadamente crocante e recheios que derretem na boca, da intensidade do chocolate belga ao frescor das frutas selecionadas, o Banoffee conquistou seu lugar como ícone da nossa casa. Ele não é apenas um doce, é um pedacinho da nossa história que está presente nas mesas, nas celebrações e nos momentos que merecem ser inesquecíveis.",
    image: "/images/banoffee.png"
  },

  quality: {
    description: "Nosso cuidado com a seleção dos ingredientes garante que cada pão, cada doce e refeição tenha o sabor autêntico, a textura perfeita e o aroma irresistível que fazem parte da nossa tradição."
  },

  orders: {
    title: "/images/home/encomendas1.png",
    subtitle: "FAÇA SEU PEDIDO",
    image: "/images/encomendas.png",
    options: [
      {
        id: "comer-ja",
        title: "Para comer já",
        description: "Escolha, peça e aproveite. Delícias fresquinhas prontas para deixar o seu dia mais gostoso, do jeito que só a Luma Padaria sabe fazer.",
        icon: "",
        buttons: [
          {
            text: "PEÇA PELO IFOOD",
            href: "#",
            variant: "primary" as const
          }
        ]
      },
      {
        id: "eventos",
        title: "Para eventos",
        description: "Aniversários, reuniões ou comemorações especiais. Faça sua encomenda com antecedência e surpreenda seus convidados com o sabor da Luma Padaria.",
        icon: "",
        buttons: [
          {
            text: "PEÇA PELO WHATSAPP",
            href: "#",
            variant: "secondary" as const
          }
        ]
      }
    ]
  },

  units: {
    title: "/images/home/unidades.png",
    subtitle: "NOSSOS ENDEREÇOS",
    units: [
      { 
        id: "1", 
        name: "Luma Pátio Batel", 
        address: "Shopping Center, Loja 78",
        image: "/location1.jpg"
      },
      { 
        id: "2", 
        name: "Luma Vista Alegre", 
        address: "Rua da Paz, 789",
        image: "/location2.jpg"
      },
      { 
        id: "3", 
        name: "Luma Park Shopping", 
        address: "Shopping Park, Loja 45",
        image: "/location3.jpg"
      }
    ]
  },

  finalCta: {
    title: "Do nosso forno\npara a sua mesa."
  },

  footer: {
    brandName: "Luma Padaria",
    links: [
      { title: "UNIDADES", href: "/unidades" },
      { title: "ENCOMENDAS", href: "/encomendas" },
      { title: "CONTATO", href: "/contato" },
      { title: "TRABALHE CONOSCO", href: "/trabalhe-conosco" },
      { title: "POLÍTICA DE PRIVACIDADE", href: "/privacidade" }
    ],
    copyright: "© 2025 Grupo WebLuma | Curitiba",
    developer: "Desenvolvido por WebLuma | Desenvolvimento Web"
  }
};
