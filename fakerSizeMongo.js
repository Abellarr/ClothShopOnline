const { faker } = require('@faker-js/faker');
const host = "http://localhost:8000";




const delSizes = async () => {
    try {
      const response = await fetch(`${host}/api/sizes`, 
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
      console.error("Error fetching sizes:", error);
    }
};

const seedSizes = async () => {
    const colorList = [
        "White",
        "Black",
        "Antique Cherry Red",
        "Antique Sapphire",
        "Ash",
        "Azalea",
        "Cardinal Red",
        "Carolina Blue",
        "Charcoal",
        "Cherry Red",
        "Dark Chocolate",
        "Dark Heather",
        "Forest",
        "Garnet",
        "Gold",
        "Graphite Heather",
        "Heather Sport Dark Green",
        "Heather Sport Dark Maroon",
        "Heather Sport Dark Navy",
        "Heather Sport Royal",
        "Heather Sport Scarlet Red",
        "Heliconia",
        "Indigo Blue",
        "Irish Green",
        "Light Blue",
        "Light Pink",
        "Maroon",
        "Military Green",
        "Mint Green",
        "Navy",
        "Old Gold",
        "Orange",
        "Orchid",
        "Purple",
        "Red",
        "Royal",
        "Safety Green",
        "Safety Orange",
        "Safety Pink",
        "Sand",
        "Sapphire",
        "Sport Grey",
        "Violet",
    ];
    const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
    

    const sizeData = [];
    for (let i = 0; i < colorList.length; i++) {
        for (let j = 0; j < sizes.length; j++) {
            sizeData.push({
                productID: 1,
                color: colorList[i],
                size: sizes[j],
                price:faker.datatype.float({ min: 15, max: 30, precision: 0.01}),
                salePrice:faker.datatype.float({ min: 8, max: 15, precision: 0.01}),
                numAvailable: faker.datatype.number({ min:10, max: 900 })
            });
        }
    }

    for (let i=0; i < sizeData.length; i++) {
      try {
          const response = await fetch(`${host}/api/sizes`, 
          {
              method: "POST",
              credentials: "same-origin",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(sizeData[i])
          });
          const data = await response.json();
          console.log(data);
          console.log('Seed successful');
      } catch (error) {
          console.error("Error fetching sizes:", error);
      }
  }
};

seedSizes();