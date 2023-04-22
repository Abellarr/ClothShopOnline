const { Pool } = require('pg');
const { faker } = require('@faker-js/faker');

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "shopping",
    password: "password",
    port: 5432,
});

const SEED_PRODUCTS_COUNT = 100;

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
    try {
        await pool.query('TRUNCATE TABLE products CASCADE');
        await pool.query('ALTER SEQUENCE products_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO products (imageLink, productLink, style, productName, rating, numRatings, price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        for (let i = 0; i < SEED_PRODUCTS_COUNT; i++) {
            console.log(`seeded ${i+1} users!`)
            const { imageLink, productLink, style, productName, rating, numRatings, price } = products[i];
            await pool.query(queryString, [imageLink, productLink, style, productName, rating, numRatings, price]);
        }
        console.log('Products seeded successfully!');
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};





seedProducts().then(() => pool.end());