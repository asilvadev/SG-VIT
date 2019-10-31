"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pecas",
      [
        {
          name: "Zontrax",
          sinopse:
            "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
          director: "Kerr Gamil",
          duration: "19:21:49",
          classificacao: "Adulto",
          genero: "Infantil",
          price: 110,
          image: "http://dummyimage.com/213x202.jpg/cc0000/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Y-Solowarm",
          sinopse:
            "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",
          director: "Catie Pryke",
          duration: "16:43:01",
          classificacao: "Adulto",
          genero: "Drama",
          price: 80,
          image: "http://dummyimage.com/231x112.jpg/dddddd/000000",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Flowdesk",
          sinopse:
            "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
          director: "Amalia Matthews",
          duration: "1:20:00",
          classificacao: "Livre",
          genero: "Drama",
          price: 112,
          image: "http://dummyimage.com/147x230.jpg/ff4444/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Cookley",
          sinopse:
            "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
          director: "Nathalie Listone",
          duration: "3:23:16",
          classificacao: "Adulto",
          genero: "Musical",
          price: 100,
          image: "http://dummyimage.com/165x160.jpg/dddddd/000000",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Flowdesk",
          sinopse:
            "maecenas leo odio condimentum id luctus nec molestie sed justo",
          director: "Carolyn Blanking",
          duration: "16:11:48",
          classificacao: "Livre",
          genero: "Drama",
          price: 54,
          image: "http://dummyimage.com/196x247.jpg/cc0000/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Zamit",
          sinopse:
            "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit",
          director: "Roshelle Bier",
          duration: "23:33:46",
          classificacao: "Adulto",
          genero: "Drama",
          price: 113,
          image: "http://dummyimage.com/126x239.jpg/dddddd/000000",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Rank",
          sinopse:
            "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
          director: "Gaynor Whitters",
          duration: "19:33:21",
          classificacao: "Adulto",
          genero: "Musical",
          price: 56,
          image: "http://dummyimage.com/133x140.jpg/cc0000/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Zamit",
          sinopse:
            "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
          director: "Stanleigh Quibell",
          duration: "16:29:24",
          classificacao: "Livre",
          genero: "Comedia",
          price: 94,
          image: "http://dummyimage.com/207x194.jpg/5fa2dd/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Rank",
          sinopse:
            "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam",
          director: "Alwyn Beven",
          duration: "18:06:33",
          classificacao: "Adulto",
          genero: "Drama",
          price: 65,
          image: "http://dummyimage.com/109x221.jpg/cc0000/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Stringtough",
          sinopse:
            "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
          director: "Judith Cliburn",
          duration: "17:48:43",
          classificacao: "Livre",
          genero: "Infantil",
          price: 131,
          image: "http://dummyimage.com/105x250.jpg/ff4444/ffffff",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pecas", null, {});
  }
};
