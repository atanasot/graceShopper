"use strict";

const {
  db,
  models: { User, Wine, Beer },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  try {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log("db synced!");

    // Creating Users
    const users = await Promise.all([
      User.create({ username: "cody", password: "123" }),
      User.create({ username: "murphy", password: "123" }),
    ]);

    // Creating Products - Wine
    const wines = await Promise.all([
      Wine.create({
        name: "Duckhorn",
        year: 2017,
        region: "California",
        type: "Red",
        style: "Cabernet Sauvignon",
        abv: 14.5,
        imgURL: "/wine1_demo.jpeg",
        price: 154.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Josh Cellars",
        year: 2019,
        region: "California",
        type: "Red",
        style: "Cabernet Sauvignon",
        abv: 13.5,
        imgURL: "/2019_JoshCellars_Cabernet.jpeg",
        price: 17.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Silver Oak",
        year: 2017,
        region: "California",
        type: "Red",
        style: "Cabernet Sauvignon",
        abv: 14.2,
        imgURL: "/2017_SilverOaks_Cabernet.jpeg",
        price: 89.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Goldeneye",
        year: 2018,
        region: "California",
        type: "Red",
        style: "Pinot Noir",
        abv: 14.5,
        imgURL: "/2018_Goldeneye_Pinot.jpeg",
        price: 58.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Chandon de Brialles",
        year: 2019,
        region: "France",
        type: "Red",
        style: "Pinot Noir",
        abv: 13.5,
        imgURL: "/2019_ChandondeBrialles.jpeg",
        price: 249.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Susana Balboa",
        year: 2018,
        region: "Argentina",
        type: "Red",
        style: "Bordeaux",
        abv: 13.5,
        imgURL: "/2018_Susana_Bourdeax.jpeg",
        price: 43.99,
        price: 43.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Lemelson Theas",
        year: 2018,
        region: "Washington",
        type: "Red",
        style: "Pinot Noir",
        abv: 13.8,
        imgURL: "/2018_Lemelson_Theas_Pinot.jpeg",
        price: 34.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Hartford Court Russian River",
        year: 2019,
        region: "California",
        type: "Red",
        style: "Pinot Noir",
        abv: 14.5,
        imgURL: "/2019_Hartford_Pinot.jpeg",
        price: 40.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Chateau Lestage",
        year: 2016,
        region: "France",
        type: "Red",
        style: "Bourdeaux",
        abv: 14.0,
        imgURL: "/2016_Chateau_Lestage_Bordeaux.jpeg",
        price: 45.99,
        inventoryCount: 100,
      }),

      Wine.create({
        name: "Marques de Caceres",
        year: 2017,
        region: "Spain",
        type: "Red",
        style: "Bourdeaux",
        abv: 14.0,
        imgURL: "/2017_Marques_Red.jpeg",
        price: 20.99,
        inventoryCount: 100,
      }),
    ]);

    // Creating Products - Beer
    await Promise.all([
      Beer.create({
        name: "KBS - Hazelnut",
        brand: "Founders Brewing Company",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "Stout",
        ABV: 12,
        imgURL: "/2022_KBS_Hazelnut_Featured.jpg",
        price: 17.5,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "All Day Vacay",
        brand: "Founders Brewing Company",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 4.6,
        imgURL: "/2020_All_Day_Vacay_Featured.jpg",
        price: 17.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Vanilla Java Porter",
        brand: "Atwater Brewery",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "Porter",
        ABV: 5,
        imgURL: "/porter.jpg",
        price: 18.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Detroit Pale Ale",
        brand: "Atwater Brewery",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "Pale Ale",
        ABV: 5,
        imgURL: "/paleAle.png",
        price: 16.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Dirty Blonde",
        brand: "Atwater Brewery",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 4.5,
        imgURL: "/dirtyBlonde.jpg",
        price: 16.99,
        inventoryCount: 100,
      }),
    ]);

    console.log(`seeded ${users.length} users`);
    console.log(`seeded successfully`);
    return {
      users: {
        cody: users[0],
        murphy: users[1],
      },
    };
  } catch (error) {
    console.log(error);
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
