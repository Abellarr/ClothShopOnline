# Cloth Shop Online
---

### Hello!
... and welcome to ClothShopOnline.com, a project I worked on for the System Design Capstone (SDC) for the Operation LevelUp: Web Immersive Software Engineering course I am taking through Galvanize, Inc. The purpose of this project was to take a single-page web application built by another team in the course and follow an optimization pathway to learn about making our applications more efficient and to try out different new ways to build them outside of what we have learned so far.

The original project was a standard PERN (PostgreSQL, Express, React, Node) stack with the backend deployed through Render and the frontend run locally on a host machine. For my SDC project, I decided to test how utilizing a MERN (MongoDB, Express, React, Node) stack could affect load performance and server data response times, and how the current application would handle scaling the number of products in the database well above what was originally intended with the original project. I also wanted to see what challenges a junior developer would face with changing database types (SQL to NoSQL) in an application and still be able to keep it functioning.

During initial research for this project, I narrowed my choice of database down to Redis and MongoDB, and chose to go with MongoDB for a test database because it is completely different than anything I've worked with before and it seems to be a very popular choice for companies that build their applications outside of the RDBMS norms. The knowledge, wisdom, and experience I've gained through the research, creating, and testing of this project was absolutely amazing and I'm fortunate to have the opportunity to work on something like this during my coursework.

## Testing/Methodologies and Results

To see a complete report on my testing, methodologies and results, click the image below to check out my video:

> Image with link goes here (still working on it at the moment)

## Setup

If you would like to try this setup out and run some of the tests for yourself, follow these steps:

**Initial setup:**
1. Fork and clone this repository to your desired folder
2. Navigate to the root folder on your command line and run `npm install`
3. Once completed, run `npm install --force --prefix client`
4. If Docker Desktop is not installed, download it [here](https://www.docker.com/products/docker-desktop/) and install the appropriate version for your machine.
5. Now that all of your packages are installed and Docker is good to go, run `docker compose up`. This will start the databases in containers inside of Docker.
6. To create and seed the tables inside of the PostgreSQL database, run `npm run migrate` from the command line, and, once that is finished, run `npm run seed`
7. To create and seed the tables inside of the MongoDB database, you'll need to follow a few steps:
    - From the command line, run `nodemon mongServer.js` You will see a log stating that the server is listening on port 8000 and Connected to Database
    - On a different terminal, run `node fakerProdMongo.js`, followed by `node fakerRevMongo.js` `node fakerSizeMongo.js` and `node fakerQueMongo.js`
    - If you have MongoShell installed on your machine, you can connect to the database and run commands here to ensure the seed data is loaded
    
**To test the Front-End:**
1. Make sure one of the servers are up and running, either by running `nodemon apiServer.js` for PostgreSQL database or `nodemon mongServer.js` for MongoDB database
2. From the command line, navigate to the /client folder and run `npm start` to start up the web application
3. From your Chrome browser, navigate to http://localhost:3000 to load the web page
4. Open Chrome Developer Tools and navigate to Lighthouse from the dropdown near the top of the panel
5. Set options to Navigation, Desktop and select the Performance checkbox under Categories
6. Click the Analyze page load button and check out your results!

**To test the Server:**
1. Make sure one of the servers are up and running, either by running `nodemon apiServer.js` for PostgreSQL database or `nodemon mongServer.js` for MongoDB database
2. From the command line, ensure you are on the root folder for the repo and run `node script.js`
3. Check out your results!
    
**To seed bulk data into the databases:**

For PostgreSQL database:
1. From the command line, run `nodemon apiServer.js`
2. From your editor, view the fakerPg.js file and look for a variable named "SEED_PRODUCTS_COUNT" which will be set to a number. Modify that number to how many products you want to create and save the file.
3. From the command line, run `node fakerPg.js`

For MongoDB database:
1. From the command line, run `nodemon mongServer.js`
2. From your editor, view the fakerProdMongo.js file and look for a variable named "SEED_PRODUCTS_COUNT" which will be set to a number. Modify that number to how many products you want to create and save the file.
3. From the command line, run `node fakerProdMongo.js`
    
Have fun testing it out for yourself!


## Contributors/Acknowledgements

While the SDC Project was more of a solo venture, I want to give a huge shoutout to the following:

- Kevin Sossa for being instrumental in helping me get Grafana K6 up and running, and insight for testing the server portion of the project.
- Shuyi Hoo for saving my project by helping me get through some initial struggles with getting my MongoDB database working and seeded.
- Brennan Mulligan for his expert insight to Faker and guidance with getting my bulk data files fleshed out.
- Phil Witkin for being an awesome instructor and guiding us along our journey.

Another shoutout to the team who created the original project and for making outstanding documentation that guided me through the intial setup:
- Melvin Richardson
- Fortun Joseph Binghay
- Jesthen Baez
- Kari Tinsley


## Technologies Used

- Front-End - Testing was completed with Lighthouse (ChromeDevTools)
- Servers - Both servers were built with Express utilizing Node and testing was completed using Grafana K6
- Database - The PostgreSQL and MongoDB databases were built and containerized in Docker utilizing Docker-Compose
- Original Project - HTML5, CSS3, JavaScript, React, Node, PostgreSQL, Docker, Render



