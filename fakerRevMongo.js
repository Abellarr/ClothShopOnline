const { faker } = require('@faker-js/faker');
const host = "http://localhost:8000";


const SEED_REVIEWS_COUNT = 6;


const delReviews = async () => {
    try {
      const response = await fetch(`${host}/api/reviews`, 
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

const seedReviews = async () => {
    const reviews = [];

    for (let i = 0; i < SEED_REVIEWS_COUNT; i++) {
        reviews.push({
            username: faker.internet.userName(),
            isverified: true,
            date: `${Math.ceil(Math.random()*12)}/${Math.ceil(Math.random()*28)}/${Math.ceil(Math.random()*(22-17)+17)}`,
            rating: faker.datatype.float({ min: 2, max: 5, precision: 0.1}),
            delivery: (Math.random() > 5 ? 'On time': 'Early'),
            decoration: faker.commerce.productName(),
            overallrating: faker.datatype.float({ min: 2, max: 5, precision: 0.1}),
            fit: faker.commerce.productAdjective(),
            qualityrating: faker.datatype.float({ min: 2, max: 5, precision: 0.1}),
            title: faker.lorem.sentence(5),
            notes: faker.lorem.sentence(),
            numthumbsup: faker.datatype.number({ min: 10, max: 100 }),
            numthumbsdown: faker.datatype.number({ min: 10, max: 100 })
        });
    }

    for (let i=0; i < reviews.length; i++) {
        try {
            const response = await fetch(`${host}/api/reviews`, 
            {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviews[i])
            });
            const data = await response.json();
            console.log(data);
            console.log('Seed successful');
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
};

delReviews().then(() => seedReviews());