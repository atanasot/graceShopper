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
      Wine.create({
        name: "Catena Zapata Adrianna White Bones Chardonnay",
        year: 2019,
        region: "Mendoza, Argentina",
        type: "White",
        style: "Chardonnay",
        abv: 12.6,
        imgURL: "/Catena_Zapata_Adrianna_White_Bones_Chardonnay_2019.jpg",
        price: 129.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Sine Qua Non Aperta",
        year: 2018,
        region: "California",
        type: "White",
        style: "Other White Blends",
        abv: 12.5,
        imgURL: "/Sine_Qua_Non_Aperta_2018.jpg",
        price: 299.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Marc Colin Montrachet Grand Cru",
        year: 2019,
        region:
          "Puligny-Montrachet, Cote de Beaune, Cote d'Or, Burgundy, France",
        type: "White",
        style: "Chardonnay",
        abv: 12.5,
        imgURL: "/Marc_Colin_Montrachet_Grand_Cru_2019.jpg",
        price: 1799.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "R. Lopez de Heredia Rioja White Vina Tondonia Gran Reserva",
        year: 2001,
        region: "Rioja, Spain",
        type: "White",
        style: "Other White Blends ",
        abv: 12.5,
        imgURL:
          "/R_Lopez_de_Heredia_Rioja_White_Vina_Tondonia_Gran_Reserva.jpg",
        price: 499.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Christian Moreau Chablis Les Clos Grand Cru",
        year: 2019,
        region: "Chablis, Burgundy, France",
        type: "White",
        style: "Chardonnay",
        abv: 13,
        imgURL: "/Christian_Moreau_Chablis_Les_Clos_Grand_Cru_2019.jpg",
        price: 129.99,
        inventoryCount: 100,
      }),
    ]);
    await Promise.all([
      Wine.update(
        {
          description:
            "Lush, energetic and intense, this gorgeous 2017 Napa Valley Cabernet begins with aromas of blackberry, huckleberry and chocolate, as well as hints of mint, cardamom, clove and graham cracker. On the palate it displays lovely brightness, with firm, resolved tannins framing flavors of boysenberry and black currant. As it evolves in the glass, subtle sweet and savory notes are revealed, carrying the wine to a long, focused finish.",
        },
        { where: { id: 1 } }
      ),
      Wine.update(
        {
          description:
            "Our Cabernet Sauvignon was the first wine we made. This is the wine that started it all, setting the exacting standards that we hold ourselves to for all of our varietals. Round and juicy, our Cabernet Sauvignon has flavors of blackberry, toasted hazelnut and cinnamon, complemented by hints of vanilla and toasted oak.",
        },
        { where: { id: 2 } }
      ),
      Wine.update(
        {
          description:
            "The 2017 Napa Valley Cabernet Sauvignon is ruby in color with notes of blackberry, blueberry, roasted coffee beans, coriander and a hint of nutmeg. Smooth upon entry, this wine is broad and plush on the mid-palate. It has an elegant density throughout and a long, generous finish.",
        },
        { where: { id: 3 } }
      ),
      Wine.update(
        {
          description:
            "A classic expression of Anderson Valley Pinot Noir, this wine begins with enticing aromas of bright cranberry, strawberry, blueberry, and blackberry, as well as savory hints of black tea, dried herbs, pennyroyal, and saddle leather. The lush fruit notes are echoed on the flavorful palate, where they mingle with layers of moist earth and wild mushrooms, with firm tannins and bright acidity carrying the wine to a poised and polished finish.",
        },
        { where: { id: 4 } }
      ),
      Wine.update(
        {
          description:
            "This cuvée comes from four parcels which total 1.12 hectare, situated mid-slope and spread in homogenous fashion over the whole appellation, giving a nice typicity of Bressandes. The soils are deep and made up in equal parts of limestone and clay, giving the wine lovely balance and great length on the palate. It is a terroir that is very representative of the appellation Corton. The vines average 40 years-old and face east. 80% whole cluster. Aged in 20% new oak and the rest neutral barrels. ",
        },
        { where: { id: 5 } }
      ),
      Wine.update(
        {
          description:
            "Deep red color. This wine has vibrant aromas of black fruit, tobacco and pepper with spicy-floral hints. It has an intense and well balanced acidity. The oak is beautifully integrated with elegant and fine grained tannins. A subtle minerality provides freshness and good length.",
        },
        { where: { id: 6 } }
      ),
      Wine.update(
        {
          description:
            "As the house cuvee, Thea’s Selection is a blend of fruit sourced from all seven of their organic, estate vineyards that span three different Willamette Valley AVAs. As such, it is a wonderful representation of the vintage across all of their sites. The nose is inviting with blueberry and blackberry fruit that is nuanced by subtle spice notes of black licorice, black tea, cinnamon and graham cracker. The rich, silky tannins give in to a long and robust finish that leaves the taste of black cherries and dark chocolate lingering on the palate.",
        },
        { where: { id: 7 } }
      ),
      Wine.update(
        {
          description:
            "Aromas of black cherry, blueberry, black currant, allspice, and loam are followed by flavors of wild raspberries, dark berries, and a crushed rock minerality. The dense entry is followed by a sweet and juicy mouthfeel, supported by acidity, silky tannins, and a subtle earthy finish.",
        },
        { where: { id: 8 } }
      ),
      Wine.update(
        {
          description:
            "Château Lestage shows a deep purple color. It has an attractive, clean and pure bouquet with lifted strawberry and raspberry scents infused with a touch of vanilla from new oak. On the palate, the wine offers a lot of ripe red fruit and black current flavors. It shows good structure with silky tannins, for some good aging. The finish is long and harmonious.",
        },
        { where: { id: 9 } }
      ),
      Wine.update(
        {
          description:
            "Nice depth with a luminous sparkle. A bouquet of fine notes of toasted wood and spices, combined with red candied fruit on a licorice base. Full-bodied on the palate with a background of ripe fruit and smooth elegant tannins. A long silky aftertaste.",
        },
        { where: { id: 10 } }
      ),
      Wine.update(
        {
          description:
            "The nose lively citrus notes and white stone fruit . The palate is a voluptuous wine with intense flavors of pear, apple and subtle floral and mineral hints . The finish is long and clean with a strong mineral side.",
        },
        { where: { id: 11 } }
      ),
      Wine.update(
        {
          description:
            "Marc Colin Puligny-Montrachet Le Trezin is intense and complex, with opulent fruit, and lacy streak of mineral and tons of stuffing.",
        },
        { where: { id: 12 } }
      ),
      Wine.update(
        {
          description:
            "Held back in barrel longer than usual (24 months) and based on 38% Chardonnay, 25% Viognier, 22% Roussanne, and the rest Muscat and Petit Manseng, the 906 case 2018 Aperta is incredibly exotic (it reminds me of the La Dorian Condrieu from Guigal) with notes of tangerine, flower oil, apricots, and toasty nuances. With good acidity, full-bodied richness, and just flat-out gorgeous purity as well as balance, this singular white will benefit from just a year in bottle and I suspect evolve gracefully for a decade.",
        },
        { where: { id: 13 } }
      ),
      Wine.update(
        {
          description:
            "The White Tondonia Gran Reserva is golden in color with perfumed, persistent and complex aromas. Aged 10 years, being racked twice per year, this wine is round and very smooth on the palate.",
        },
        { where: { id: 14 } }
      ),
      Wine.update(
        {
          description:
            "An incredibly complex and delicious Chardonnay that easily holds its weight against the great masters in Puligny, Meursault and Corton-Charlemagne. Muscular yet refined and finessed, it greets the nose with a hedonistic bouquet of lush citrus, tart green apples, white flowers, fresh herbs and delicate yet pronounced saline minerals, all supported by just the slightest hint of toast. Laser-precise on the palate with zippy acidity and immaculate detail.",
        },
        { where: { id: 15 } }
      ),
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
      Beer.create({
        name: "Acid House",
        brand: "Bellwoods Brewery",
        state: "Ontario",
        country: "Canada",
        type: "Ale",
        style: "IPA",
        ABV: 7.0,
        imgURL: "/acidHouse.jpg",
        price: 16.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Kentucky Brunch",
        brand: "Toppling Goliath Brewing Co",
        state: "Iowa",
        country: "USA",
        type: "Ale",
        style: "Stout",
        ABV: 12.0,
        imgURL: "/kentuckyBrunch.jpg",
        price: 20.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Old Town Lager",
        brand: "Aslin Beer Co",
        state: "Virginia",
        country: "USA",
        type: "Lager",
        style: "Pale Lager",
        ABV: 12.0,
        imgURL: "/oldTownLager.jpg",
        price: 20.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Kellerbier Dunkel",
        brand: "Seinsheimer Kellerbräu",
        state: "Seinsheim",
        country: "Germany",
        type: "Lager",
        style: "Dunkel",
        ABV: 7.8,
        imgURL: "/kellerbierDunkel.jpg",
        price: 13.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "OYSTER STOUT",
        brand: "HenHouse Brewing Co",
        state: "California",
        country: "USA",
        type: "Ale",
        style: "Stout",
        ABV: 4.8,
        imgURL: "/oysterStout.jpg",
        price: 8.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Two Hearted Ale",
        brand: "Bell's",
        state: "Michigan",
        country: "USA",
        type: "Ale",
        style: "IPA",
        ABV: 7,
        imgURL: "/twoHearted.png",
        price: 11.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Lager of the Lakes",
        brand: "Bell's",
        state: "Michigan",
        country: "USA",
        type: "Lager",
        style: "Pilsner",
        ABV: 7,
        imgURL: "/twoHearted.png",
        price: 10.99,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Delirium Tremens",
        brand: "Delirium",
        country: "Belgium",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 8.5,
        imgURL: "/beer_delirium_tremens_bottle",
        price: 41.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Delirium Red",
        brand: "Delirium",
        country: "Belgium",
        type: "Ale",
        style: "Fruit Beer",
        ABV: 8,
        imgURL: "/beer_delirium_red_bottle",
        price: 42.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Delirium Blond",
        brand: "Delirium",
        country: "Belgium",
        type: "Ale",
        style: "Pale Ale",
        ABV: 11.5,
        imgURL: "/beer_delirium_blond_bottle",
        price: 48.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Grolsch Premium Lager",
        brand: "Grolsch",
        country: "Netherlands",
        type: "Lager",
        style: "Pale Lager",
        ABV: 5,
        imgURL: "/Grolsch.png",
        price: 9.99,
        inventoryCount: 100,
      }),
    ]);

    await Promise.all([
      Beer.update(
        {
          description:
            "You’re going to need a bigger suitcase – All Day Vacay has arrived. Take a well-earned respite from the mundane and let this session wheat ale whisk you away with its slight, summery sweetness – complemented by delicate notes of citrus. Whether it’s a staycay or vacay, it’s the perfect companion for any type of adventure.",
        },
        { where: { id: 1 } }
      ),
      Beer.update(
        {
          description:
            "Originally blended for the working class in Central London, English Style Porters give nod to the masses, mixing traditional old style ales with more modern ales. While relatively dark, English Style Porters eschew burnt flavors for more mellow profiles.",
        },
        { where: { id: 2 } }
      ),
      Beer.update(
        {
          description:
            "The perfectly balanced and decadent drinking experience of KBS meets the classic taste of hazelnut. Taking this bourbon barrel-aged stout to a new level, KBS Hazelnut allows the existing premium coffee and chocolate notes to soar to new heights when accented by the nutty sweetness of hazelnut.",
        },
        { where: { id: 3 } }
      ),
      Beer.update(
        {
          description:
            "Moderate in body with the crisp piney finish of American hops. Relive the style that changed everything. American Pale Ales are cleaner, brighter more hoppy versions of the buttery English Classic. In a world of over-hopped beer, balance is the lost art in the style. These can vary widely from deep golden to rich amber.",
        },
        { where: { id: 4 } }
      ),
      Beer.update(
        {
          description:
            "Brewed to be a bright straw color, lightly sweet, with wheat added to create a crispness at the back of the palate. Crushed Orange Peel & Coriander are subtly added to the final stage of the hot side, which lend to the clean head aroma.",
        },
        { where: { id: 5 } }
      ),
      Beer.update(
        {
          description:
            "Welcome to Acid House. Here, we explore the boundaries of flavor, pushing to the brink of comprehension. Vol. 1: Pomegranate, blueberry, blackberry, cranberry and MOSTRA Son of Ghost Bear coffee beans. Notes of dense berry bliss with a touch of chocolate-dipped fruit.",
        },
        { where: { id: 6 } }
      ),
      Beer.update(
        {
          description:
            "A meticulously curated blend of the best of what our barrel room holds. Kentucky Brunch takes time and care to mature, and those that take the time and care in pouring the beer will experience the development of a delayed-release, mocha hued head. Intense aromatics of espresso and maple syrup lead into bourbon drenched maple candy and chocolate brownies on the palate. The culmination of everything one would want on a chilly morning.",
        },
        { where: { id: 7 } }
      ),
      Beer.update(
        {
          description:
            "Sometimes you gotta remember that it’s a marathon and not a sprint and you just need a workhorse of a beer that is built for crushing. And sometimes you just want a cold, refreshing beer without all the fuss. That’s why we made Old Town Lager. Old Town Lager is dangerously clean, crisp and with just a dash of floral hops. So whether you’ve got a day full of chores ahead of you or you’ve committed yourself to an afternoon of grilling and watching football, Old Town Lager is gonna get you thru it. Lager Then Life.",
        },
        { where: { id: 8 } }
      ),
      Beer.update(
        {
          description:
            "Kellerbier Dunkel from the brewery Engel - excellent dark unfiltered beer with a soft, balanced and full of flavor. Kellerbir - an old German style beer that is produced in the Middle Ages. The name Kellerbir translates as beer from the cellar, since after its manufacture means the exposure in deep repositories. The beer enriched with vitamins (yeast), a plurality of essential nutrients, minerals, amino acids and micronutrients. Beer Kellerbier Dunkel made of dark and pale malt and a mixture of bitter and aromatic hops from the Hallertau region.",
        },
        { where: { id: 9 } }
      ),
      Beer.update(
        {
          description:
            "Brewed in the Bay Area of San Francisco, this beer is a true blue oyster lover’s dream. It uses admiral maltings and roast barley for a sweet and briny aroma and a flavor of salted brownies.",
        },
        { where: { id: 10 } }
      ),
      Beer.update(
        {
          description:
            "Brewed with 100% Centennial hops from the Pacific Northwest and named after the Two Hearted River in Michigan’s Upper Peninsula, this IPA is bursting with hop aromas ranging from pine to grapefruit from massive hop additions in both the kettle and the fermenter.  Perfectly balanced with a malt backbone and combined with the signature fruity aromas of Bell's house yeast, this beer is remarkably drinkable and well suited for adventures everywhere.",
        },
        { where: { id: 11 } }
      ),
      Beer.update(
        {
          description:
            "Following in the tradition of Czech Pilsners by offering a combination of firm malt and herbal hop bitterness, Bell’s Lager of the Lakes is as refreshing and crisp as a swim in the Great Lakes.",
        },
        { where: { id: 12 } }
      ),
      Beer.update(
        {
          description:
            "Feels like the sound shot of alcohol is igniting the mouth. In reality the tongue and palate are warmed. The taste is characterized by its roundness. The aftertaste is strong, long-lasting and dry bitter.",
        },
        { where: { id: 13 } }
      ),
      Beer.update(
        {
          description:
            "Sweet and fruity, with a nice balance between sweet and sour. An excellent dessert beer.  Deep dark red colour, with a light pink, compact and lacing head.  Soft fruity aroma, with hints of almond and mildly sour cherries.",
        },
        { where: { id: 14 } }
      ),
      Beer.update(
        {
          description:
            "Delirium Tremens matured during 9 months in oak bourbon barrels (Buffalo Trace Distillery).  Aroma: vanilla, bourbon, fruitiness and spiciness of Delirium Tremen",
        },
        { where: { id: 15 } }
      ),
      Beer.update(
        {
          description:
            "A CRISP, MALTY PILSNER WITH DEPTH OF FLAVOUR, THAT APPEALS TO A DEVELOPED PALETTE",
        },
        { where: { id: 16 } }
      ),
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
