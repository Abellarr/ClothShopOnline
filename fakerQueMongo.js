const { faker } = require('@faker-js/faker');
const { reviews } = require('./mongo/models');
const host = "http://localhost:8000";


const SEED_QUESTIONS_COUNT = 6;


const delQuestions = async () => {
    try {
      const response = await fetch(`${host}/api/questions`, 
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
      console.error("Error fetching questions:", error);
    }
};

const seedQuestions = async () => {
    const questions = [];

    for (let i = 0; i < SEED_QUESTIONS_COUNT; i++) {
        questions.push({
            userNameQ: faker.internet.userName(),
            isVerified: true,
            dateQuestion: `${Math.ceil(Math.random()*12)}/${Math.ceil(Math.random()*28)}/${Math.ceil(Math.random()*(22-17)+17)}`,
            question: faker.lorem.sentence(Math.floor(Math.random*(15-5)+5)),
            numAnswers: 1,
            userNameA: 'Cloth Shop Online',
            dateAnswer: `${Math.ceil(Math.random()*12)}/${Math.ceil(Math.random()*28)}/${Math.ceil(Math.random()*(22-21)+21)}`,
            answer: faker.lorem.sentence(Math.floor(Math.random*(15-5)+5)),
            numThumbsUp: faker.datatype.number({ min: 10, max: 100 }),
            numThumbsDown: faker.datatype.number({ min: 10, max: 100 })
        });
    }
    
    for (let i=0; i < questions.length; i++) {
        try {
            const response = await fetch(`${host}/api/questions`, 
            {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(questions[i])
            });
            const data = await response.json();
            console.log(data);
            console.log('Seed successful');
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    }
};

seedQuestions();