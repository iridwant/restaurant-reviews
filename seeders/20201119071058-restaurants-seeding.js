'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'Kayu Kayu Restaurant',
      address: 'Jl. Jalur Sutera No.Kav. 28A, Pakualam, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15325',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bebek Tepi Sawah',
      address: 'Living World, Jl. Alam Sutera Boulevard No.Kav.21, Pakulonan, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15325',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'HAKA Dimsum Shop',
      address: 'Ruko Sektor I, Jl. Griya Loka Raya No.6, Rawa Buntu, Serpong Sub-District, South Tangerang City, Banten 15310',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bandar Djakarta',
      address: 'Pintu Timur, Taman Impian Jaya Ancol, Jl. Lodan timur No.7, RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Imperial Kitchen & Dimsum',
      address: 'GF Unit 02, Jl. Boulevard Graha Raya, Paku Jaya, North Serpong, South Tangerang City, Banten 15324',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', {})
  }
};