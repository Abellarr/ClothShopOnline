const { faker } = require('@faker-js/faker');
const host = "http://localhost:8000";


const SEED_PRODUCTS_COUNT = 20;


const delProducts = async () => {
    try {
      const response = await fetch(`${host}/api/products`, 
      {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
};

const seedProducts = async () => {
    const imageLks = [
        'images/products/32_fs.jpg',
        'images/products/395_fs.jpg',
        'images/products/16_fs.jpg',
        'images/products/7584_fs.jpg',
        'images/products/29_fs.jpg',
        'images/products/146_fs.jpg',
        'images/products/391_fs.jpg',
        'images/products/393_fs.jpg',
        'images/products/1828_fs.jpg',
        'images/products/7500_fs.jpg',
        'images/products/9126_fs.jpg',
        'images/products/9352_fs.jpg',
        'images/products/372_fs.jpg',
        'images/products/415_fs.jpg',
        'images/products/428_fs.jpg',
        'images/products/557_fs.jpg',
        'images/products/571_fs.jpg',
        'images/products/576_fs.jpg'
    ]

    const products = [];
    for (let i = 0; i < SEED_PRODUCTS_COUNT; i++) {
        products.push({
            imageLink: imageLks[Math.floor(Math.random() * 17)],
            productLink: null,
            style: faker.commerce.product(),
            productName: faker.commerce.productName(),
            rating: faker.datatype.float({ min: 3, max: 5, precision: 0.1 }),
            numRatings: faker.datatype.number({ min:10, max: 900 }),
            price:faker.datatype.float({ min: 5, max: 40, precision: 0.01}),
        });
    }

    for (let i=0; i < products.length; i++) {
      try {
          const response = await fetch(`${host}/api/products`, 
          {
              method: "POST",
              credentials: "same-origin",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(products[i])
          });
          const data = await response.json();
          console.log(data);
          console.log('Seed successful');
      } catch (error) {
          console.error("Error fetching products:", error);
      }
  }
};

delProducts().then(() => seedProducts());