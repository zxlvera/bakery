const { uuid } = require('uuidv4');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert(
        [
          {
            "id": uuid(),
            "type": "croissants",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/croissants-1_curtch.jpg",
            "name": "Orignal Croissant",
            "price": "12",
            "rating": "4.9"
          },
          {
            "id": uuid(),
            "type": "croissants",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/croissants-2_acrz4r.jpg",
            "name": "Chocolate Croissant",
            "price": "12",
            "rating": "4.7"
          },
          {
            "id": uuid(),
            "type": "croissants",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392191/bakery/croissants-3_byfw5c.jpg",
            "name": "Almond Croissant",
            "price": "13",
            "rating": "4.4"
          },
          {
            "id": uuid(),
            "type": "croissants",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/croissants-4_uk1tzi.jpg",
            "name": "Trio Croissants",
            "price": "30",
            "rating": "4.5"
          },
          {
            "id": uuid(),
            "type": "cupcakes",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/cupcakes-1_xdgw9k.jpg",
            "name": "Love Cupcake",
            "price": "27",
            "rating": "4.3"
          },
          {
            "id": uuid(),
            "type": "cupcakes",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392191/bakery/cupcakes-2_wawk6d.jpg",
            "name": "Fruit Cupcake",
            "price": "25",
            "rating": "4.5"
          },
          {
            "id": uuid(),
            "type": "cupcakes",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392191/bakery/cupcakes-3_qmeh9h.jpg",
            "name": "GreenRose Cupcake",
            "price": "30",
            "rating": "4.8"
          },
          {
            "id": uuid(),
            "type": "cookies",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/cookies-1_xi4isr.jpg",
            "name": "Macarons",
            "price": "12",
            "rating": "4.1"
          },
          {
            "id": uuid(),
            "type": "cookies",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/cookies-2_uwchip.jpg",
            "name": "Chocolate Cookies",
            "price": "13",
            "rating": "4.3"
          },
          {
            "id": uuid(),
            "type": "cookies",
            "src": "https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/cookies-3_yvrcbz.jpg",
            "name": "Gingerbread ",
            "price": "20",
            "rating": "3.5"
          }
        ]
      );
    });
};
