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
    ]);

    // Creating Products - Beer
    const beer = await Promise.all([
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
