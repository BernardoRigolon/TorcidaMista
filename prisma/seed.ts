import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Camisa Japão 2 2022',
      description: 'Camisa Japão 2 2022 - M Feminina. Utilizada pela Seleção Japonesa na Copa do Mundo de 2022..',
      price: 149.99,
      createdAt: new Date(),
      image: '/japaobranca.png'
    },
    {
      title: 'Camisa Japão 1 2022',
      description: 'Camisa Japão 1 2022 - M Masculina. Utilizada pela Seleção Japonesa na Copa do Mundo de 2022.',
      price: 149.99,
      createdAt: new Date(),
      image: '/japaoazul.png'
    },
    {
      title: 'Camisa Fluminense 1 2019',
      description: 'Camisa Fluminense 1 2019 - P Feminina. Utilizada pela equipe Tricolor no ano de 2019.',
      price: 199.99,
      createdAt: new Date(),
      image: '/flu.png'
    },
    {
      title: 'Camisa Napoli 1 23/24',
      description: 'Camisa Napoli 1 23/24 - G Masculina. Utilizada pela equipe Napolitana na temporada europeia 23/24.',
      price: 399.99,
      createdAt: new Date(),
      image: '/napoli.png'
    },
    {
      title: 'Camisa Tupi 1 2019',
      description: 'Camisa Tupi 1 2019 - P Masculina. Utilizada pelo Galo Carijó no ano de 2019.',
      price: 49.99,
      createdAt: new Date(),
      image: '/tupi.png'
    },
    {
      title: 'Camisa Fluminense 3 2023',
      description: 'Camisa Fluminense 3 2023 - G Feminina. Camisa comemorativa em homenagem ao cantor tricolor Cartola, utilizada pelo Gigante das Laranjeiras no ano de 2023.',
      price: 299.99,
      createdAt: new Date(),
      image: '/flucartola.png'
    },
    {
      title: 'Camisa Mexico 2 2022',
      description: 'Camisa México 2 2022 - M Feminina. Utilizada pela Seleção Mexicana na Copa do Mundo de 2022.',
      price: 149.99,
      createdAt: new Date(),
      image: '/mexico.png'
    },
    {
      title: 'Camisa Barcelona 1 22/23',
      description: 'Camisa Barcelona 1 22/23 - G Masculina. Utilizada pelo clube catalão na temporada europeia 22/23.',
      price: 399.99,
      createdAt: new Date(),
      image: '/barcelona.png'
    },
    {
      title: 'Camisa Fluminense 3 2012',
      description: 'Camisa Fluminense 3 2012 - M Masculina. Utilizada na conquista do Tetracampeonato Brasileiro do clube carioca. Considerada por muitos (eu) a camisa mais linda da história do esporte.',
      price: 999.99,
      createdAt: new Date(),
      image: '/flugrena.png'
    },
    {
      title: 'Camisa Brasil 1 1994',
      description: 'Camisa Brasil 1 1994 - P Masculina. Camisa retrô, utilizada na conquista do Tetra pela Seleção Brasileira na Copa de 1994.',
      price: 79.99,
      createdAt: new Date(),
      image: '/brasil.png'
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
