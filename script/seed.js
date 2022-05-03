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
      User.create({ username: "stannie", password: "123", isAdmin: true }),
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
        imgURL: "/wine1_demo.png",
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
        imgURL: "/2019_JoshCellars_Cabernet.png",
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
        imgURL: "/2017_SilverOaks_Cabernet.png",
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
        imgURL: "/2018_Goldeneye_Pinot.png",
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
        imgURL: "/2019_ChandondeBrialles.png",
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
        imgURL: "/2018_Susana_Bourdeax.png",
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
        imgURL: "/2018_Lemelson_Theas_Pinot.png",
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
        imgURL: "/2019_Hartford_Pinot.png",
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
        imgURL: "/2016_Chateau_Lestage_Bordeaux.png",
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
        imgURL: "/2017_Marques_Red.png",
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
        imgURL: "/Catena_Zapata_Adrianna_White_Bones_Chardonnay_2019.png",
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
        imgURL: "/Sine_Qua_Non_Aperta_2018.png",
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
        imgURL: "/Marc_Colin_Montrachet_Grand_Cru_2019.png",
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
          "/R_Lopez_de_Heredia_Rioja_White_Vina_Tondonia_Gran_Reserva.png",
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
        imgURL: "/Christian_Moreau_Chablis_Les_Clos_Grand_Cru_2019.png",
        price: 129.99,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "2018 Dominus Estate Christian Moueix",
        year: 2018,
        region: "California",
        type: "Red",
        style: "Cabernet Sauvignon Blend",
        abv: 14.5,
        imgURL: "/2018_Dominus_Estate_Christian_Moueix.png",
        price: 3376.0,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Hospices de Beaune Cuvée Charlotte Dumay Corton Grand Cru",
        year: 2014,
        region: "Burgundy, France",
        type: "Red",
        style: "Pinot Noir",
        abv: 13.5,
        imgURL:
          "/2014_Hospices_de_Beaune_Cuvée_Charlotte_Dumay_Corton_Grand_Cru.png",
        price: 1400.0,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "AF Gros Richebourg Grand Cru",
        year: 2013,
        region: "Cote de Nuits, France",
        type: "Red",
        style: "Pinot Noir",
        abv: 13,
        imgURL: "/2013_AF_Gros_Richebourg_Grand_Cru.png",
        price: 990.2,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Col d'Orcia Brunello di Montalcino (Magnum)",
        year: 1999,
        region: "Tuscany, Italy",
        type: "Red",
        style: "Sangiovese",
        abv: 13.5,
        imgURL: "/1999_Col_d'Orcia_Brunello_di_Montalcino_(Magnum).png",
        price: 919.0,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Promontory 2015",
        year: 2015,
        region: "California, United States",
        type: "Red",
        style: "Cabernet Sauvignon",
        abv: 14.52,
        imgURL: "2015_Promontory.png",
        price: 1558.0,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Veuve Clicquot Brut Champagne",
        year: 2019,
        region: "Champagne, France",
        type: "Champagne",
        style: "Pinot Noir/Chardonnay",
        abv: 12,
        imgURL: "/Veuve_Clicquot_Brut_Champagne.png",
        price: 77.35,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Cristal Brut Champagne 2009",
        year: 2009,
        region: "Champagne, France",
        type: "Champagne",
        style: "Champagne",
        abv: 13.5,
        imgURL: "/2009_Cristal_Brut_Champagne.png",
        price: 3830.0,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "19 Crimes Snoop Dogg Cali Rosé",
        year: 2022,
        region: "California, United States",
        type: "Rose",
        style: "Rose",
        abv: 10.5,
        imgURL: "/19_Crimes_Snoop_Dogg_Cali_Rose.png",
        price: 19.95,
        inventoryCount: 100,
      }),
      Wine.create({
        name: "Bread & Butter Chardonnay",
        year: 2019,
        region: "California, United States",
        type: "White",
        style: "Chardonnay",
        abv: 13.5,
        imgURL: "/Bread_&_Butter.png",
        price: 19.0,
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
      Wine.update(
        {
          description:
            "This is incredible on the nose, offering hot stones, blackcurrants, iodine and wet earth. Full-bodied with a tight center palate, then it opens with a tannin structure that is weightless and spreads across the palate. Totally integrated on the palate. This is a magic-carpet wine. Really incredible. One of the reference points for the vintage. Drinkable now and please try a bottle, but it's one for the cellar. ",
        },
        { where: { id: 16 } }
      ),
      Wine.update(
        {
          description:
            "Allen Meadows' barrel tasting note: This is riper than the Ech and not quite as fresh though there is excellent complexity to the layered aromas of plum, black currant and Asian style tea scents. On the plus side there is a slightly finer mouth feel even though there is clearly more size, weight, power and punch to the broad-shouldered flavors that also brim with dry extract on the velvet-textured finale that seems to go on and on. This is certainly structured but in the context of the appellation this is not imposing and as such, it will be approachable a bit earlier than what would be considered typical.",
        },
        { where: { id: 17 } }
      ),
      Wine.update(
        {
          description:
            "Made up from Corton-Renardes (63%) and a mix of 24 other sectors on the Corton hill, this is a very fine Corton Grand Cru. Charlotte Dumay gave vineyards to the Hospices in 1534, and this is traditionally one of the Hospice's longest living cuvées. Lacks a little in concentration but makes up for this with freshness and elegance. Cool in the mouth, with a blueberry and dusky, dark, fruit character on both the nose and palate. Corton can often be rugged but this is smooth and refined. A very good 2014. Drinking window: 2022-2029. Score - 93. (Andy Howard, MW, decanter.com, Nov. 9, 2020)",
        },
        { where: { id: 18 } }
      ),
      Wine.update(
        {
          description:
            "The 1999 Brunello di Montalcino is starting to show early signs of maturity in its bouquet. Worn-in leather, spices, licorice and tobacco meld into sweet dark cherries and plums in this full-bodied, intense Brunello. There is still more than enough fruit and sheer power to allow the 1999 to drink well for another 15-20 years, perhaps longer. The style is very much on the masculine, virile side of things. If opened today the 1999 needs time to come together in the glass.Drinking window: 2013-2029. Score - 93+. (Antonio Galloni, vinous.com, May 2012)",
        },
        { where: { id: 19 } }
      ),
      Wine.update(
        {
          description:
            "Pale lemon with fine bubbles; the nose is filled with aromas of apple, pear, toast and brioche; the palate is extra-dry and medium to full body with flavours that match the aromas.",
        },
        { where: { id: 20 } }
      ),
      Wine.update(
        {
          description:
            "Insane aromas of lavender, blackberries, wet earth and ripe yet fresh fruit. Full body with very deep fruit, pine needles and hints of chocolate and cedar. Very long and wonderfully polished. This has wonderful depth and focus. Release in 2021. Better after 2024. [and will drink for decades.] Score - 99. (jamessuckling.com, May 3, 2019)",
        },
        { where: { id: 21 } }
      ),
      Wine.update(
        {
          description:
            "The latest incarnation of this famous Champagne now comes from Roederer's own vineyards, a good portion of which are run on biodynamic lines. This still-young wine has great depth and richness, a beautiful balance between ripe fruit and crisp texture that make it alive, crisp and bright. As it matures, it will deepen and become even more intense. Drink now if you must, but preferably wait until 2019. Ranked #38 in Top 100 Cellar Selections of 2016. Score - 97. (Roger Voss, Wine Enthusiast, Dec. 1, 2016)",
        },
        { where: { id: 22 } }
      ),
      Wine.update(
        {
          description:
            "19 Crimes wines are defiant by nature, bold and always uncompromising, just like the D-O-double-G! This rosé was created as a collaboration with entertainment icon Snoop Dogg. A zinfandel-based blend with citrus, strawberry, pear and peach notes. It's light-bodied with a balanced finish. Pair with barbecued shrimp.",
        },
        { where: { id: 23 } }
      ),
      Wine.update(
        {
          description:
            "Based in California, Bread & Butter makes approachable wines. This memorable chardonnay opens with vanilla bean and almond notes, along with crisp minerality and a hint of tropical fruit. It's medium-bodied with a hint of oak leading to a long, buttery finish. Goes well with creamy pasta, roasted vegetables and seafood.",
        },
        { where: { id: 24 } }
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
        imgURL: "/2022_KBS_Hazelnut_Featured.png",
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
        imgURL: "/2020_All_Day_Vacay_Featured.png",
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
        imgURL: "/porter.png",
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
        imgURL: "/dirtyBlonde.png",
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
        imgURL: "/acidHouse.png",
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
        imgURL: "/kentuckyBrunch.png",
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
        imgURL: "/oldTownLager.png",
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
        imgURL: "/kellerbierDunkel.png",
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
        imgURL: "/oysterStout.png",
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
        imgURL: "/beer_delirium_tremens_bottle.png",
        price: 41.0,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Delirium Red",
        brand: "Delirium",
        country: "Belgium",
        type: "Ale",
        style: "Fruit",
        ABV: 8,
        imgURL: "/beer_delirium_red_bottle.png",
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
        imgURL: "/beer_delirium_blond_bottle.png",
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
      Beer.create({
        name: "Guiness Draught",
        brand: "Guiness",
        country: "Ireland",
        type: "Ale",
        style: "Stout",
        ABV: 5,
        imgURL: "/guinessDraught.png",
        price: 3.25,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Abbot Ale",
        brand: "Greene King",
        country: "England",
        type: "Ale",
        style: "Bitter",
        ABV: 5,
        imgURL: "/abbotAle.png",
        price: 3.25,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Kronenbourg 1664 Blanc",
        brand: "Kronenbourg",
        country: "France",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 5,
        imgURL: "/kronenbourgBlanc.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Chimay Premiere",
        brand: "Chimay",
        country: "Belgium",
        type: "Ale",
        style: "Dubbel",
        ABV: 5,
        imgURL: "/chimayPremiere.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Orval Trappist Ale",
        brand: "Orval Brewery",
        country: "Belgium",
        type: "Ale",
        style: "Pale Ale",
        ABV: 6.9,
        imgURL: "/orvalTrappist.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Fuller's London Pride",
        brand: "Fuller's Brewery",
        country: "England",
        type: "Ale",
        style: "Bitter",
        ABV: 6.9,
        imgURL: "/fullers.png",
        price: 3.4,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Innis & Gunn Irish Whiskey Cask",
        brand: "Innis & Gunn",
        country: "Scotland",
        type: "Ale",
        style: "Stout",
        ABV: 6.9,
        imgURL: "/innisGunn.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Rochefort 10",
        brand: "Brasserie de Rochefort",
        country: "Belgium",
        type: "Ale",
        style: "Quadrupel",
        ABV: 4.5,
        imgURL: "/rochefort10.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Spitfire Kentish Ale",
        brand: "Shepherd Neame",
        country: "England",
        type: "Ale",
        style: "Bitter",
        ABV: 4.5,
        imgURL: "/spitfireKentish.png",
        price: 3.35,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Hobgoblin Ipa",
        brand: "Wychwood Brewery",
        country: "England",
        type: "Ale",
        style: "IPA",
        ABV: 5,
        imgURL: "/hobgoblin.png",
        price: 4.95,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "La Trappe Tripel",
        brand: "La Trappe",
        country: "Netherlands",
        type: "Ale",
        style: "Tripel",
        ABV: 8,
        imgURL: "/laTrappe.png",
        price: 8.45,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Sierra Nevada Pale Ale",
        brand: "Sierra Nevada",
        country: "United States",
        type: "Ale",
        style: "Pale Ale",
        ABV: 5.6,
        imgURL: "/sierraNevada.png",
        price: 3.4,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Brewdog Hazy Jane",
        brand: "Brewdog",
        country: "United States",
        type: "Ale",
        style: "IPA",
        ABV: 7.2,
        imgURL: "/brewdog.png",
        price: 3.25,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Lagunitas IPA",
        brand: "Lagunitas",
        country: "United States",
        type: "Ale",
        style: "IPA",
        ABV: 15,
        imgURL: "/lagunitas.png",
        price: 15,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Cascade Brewing Brunch Line 2017",
        brand: "Cascade Brewing",
        country: "United States",
        type: "Ale",
        style: "Fruit",
        ABV: 9.5,
        imgURL: "/cascadeBrewingBrunch.png",
        price: 12.85,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Kona Big Wave Golden Ale",
        brand: "Kona Brewing",
        country: "United States",
        type: "Ale",
        style: "Blonde Ale",
        ABV: 4.3,
        imgURL: "/bigWave.png",
        price: 16.95,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Kilkenny Irish Cream Ale",
        brand: "Kilkenny",
        country: "Ireland",
        type: "Ale",
        style: "Red Ale",
        ABV: 4.3,
        imgURL: "/kilkennyIrish.png",
        price: 11.65,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Cigar City Florida Cracker Belgian Style Wit",
        brand: "Cigar City",
        country: "United States",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 5.5,
        imgURL: "/floridaCracker.png",
        price: 2.8,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Samuel Adams Utopias",
        brand: "Samuel Adams",
        country: "United States",
        type: "Ale",
        style: "Strong Ale",
        ABV: 27.3,
        imgURL: "/samuelAdams.png",
        price: 150.05,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Deschutes Jubelale Winter Ale",
        brand: "Deschutes Brewery",
        country: "United States",
        type: "Ale",
        style: "Winter Warmer",
        ABV: 6.7,
        imgURL: "/DeschutesJubelale.png",
        price: 12.9,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Oskar Blue Old Chub Scotch Ale",
        brand: "Oskar Blues",
        country: "United States",
        type: "Ale",
        style: "Scotch Ale",
        ABV: 8,
        imgURL: "/oldChub.png",
        price: 10.4,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Marke Original Oettinger Weissbier",
        brand: "Private Stock",
        country: "Belgium",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 4.9,
        imgURL: "/oettingerWeissbier.png",
        price: 2.7,
        inventoryCount: 100,
      }),
      Beer.create({
        name: "Modern Times Fortunate Islands",
        brand: "Modern Times",
        country: "United States",
        type: "Ale",
        style: "Wheat Beer",
        ABV: 5,
        imgURL: "/fortunateIslands.png",
        price: 2.45,
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
      Beer.update(
        {
          description:
            "This iconic beer is defined by its distinct and velvety character. Mahogany brown in colour with a creamy white head. Loaded with aromas of coffee, toasted malt and hops. Full and bold on the palate with a creamy texture and the same rich flavours, a delicate touch of bitterness adds pleasing balance to the finish.",
        },
        { where: { id: 17 } }
      ),
      Beer.update(
        {
          description:
            "Amber colour with long-lasting head; floral, oatmeal, malt and hops aromas; medium-bodied, creamy taste with clean bitter finish.",
        },
        { where: { id: 18 } }
      ),
      Beer.update(
        {
          description:
            "For well over 350 years, Kronenbourg has been brewing beer with distinction. This beer offers a slightly cloudy pale golden colour with aromas of floral, tropical fruit and honeysuckle. Crisp and palate-cleansing with flavours of citrus and white peach",
        },
        { where: { id: 19 } }
      ),
      Beer.update(
        {
          description:
            "This premium Belgian Dubbel brew boasts grassy aromas, a creamy texture and a bread-dough taste. Soft and satisfying, it's a real beer- lover's indulgence.",
        },
        { where: { id: 20 } }
      ),
      Beer.update(
        {
          description:
            "Amber colour; toasty aromas with citrus, floral and clove notes; intense and flavourful followed by a rich, hoppy finish.",
        },
        { where: { id: 21 } }
      ),
      Beer.update(
        {
          description:
            "Medium amber colour; the nose suggests caramel, biscuit and light floral notes; on the palate it is dry, medium bodied and malty with flavours of browned butter, toast and toffee.",
        },
        { where: { id: 22 } }
      ),
      Beer.update(
        {
          description:
            "Smooth Scottish stout, Irish whiskey cask-matured. This delicious beer catches the eye with its jet black colour, then delights the nose with aromas of dark chocolate, espresso and vanilla. All without losing its full malt character. On the palate, a beautifully balanced bitterness gives way to a long, chocolatey finish.",
        },
        { where: { id: 23 } }
      ),
      Beer.update(
        {
          description:
            "Hazy mahogany with a thick cream head; on the nose are aromas of raisin, fig, treacle, clove and dark chocolate; on the palate it is full bodied and off-dry, with complex, layered flavours that echo the aromatics.",
        },
        { where: { id: 24 } }
      ),
      Beer.update(
        {
          description:
            "Clear deep amber with a dense cream head; on the nose are notes of toffee, grapefruit, honey, crusty fresh bread, dried flower and grassy hops; on the palate it is medium bodied and moderately carbonated, with flavours of bready malt, caramel and bitter hop presence that lingers on the finish.",
        },
        { where: { id: 25 } }
      ),
      Beer.update(
        {
          description:
            "This spirited IPA from the British-based brewery pours light amber with a light head. Expect citrus, spice, malt, and hop tones. It's medium-bodied, malty, and lightly carbonated with a long, palate-cleansing finish. Serve with beer-battered vegetables or beef stew alongside crusty bread topped with warm butter.",
        },
        { where: { id: 26 } }
      ),
      Beer.update(
        {
          description:
            "Hazy gold in colour, with a thick, log-lasting head; aromas of rich malt, banana, grapefruit and pineapple, with underlying floral notes; medium-bodied, with fine-textured carbonation, moderate bitterness and excellent balance; malty and fruity flavours with a hint of nutmeg.",
        },
        { where: { id: 27 } }
      ),
      Beer.update(
        {
          description:
            "Pours an amber gold, with a moderate head; aromas of sweet roasted malt, biscuit, and citrus, with notes of pine and spice; dryish and medium-bodied with a creamy palate, and flavours of toasted malt, caramel, grapefruit and tropical fruit; a crisp, lingering, pleasantly balanced bitterness on the finish.",
        },
        { where: { id: 28 } }
      ),
      Beer.update(
        {
          description:
            "New England detuned. This full-tilt fruit machine of an IPA packs all the flavour but less of the alcohol. Notes of pineapple,mango, stone-fruit, and a hint of tangerine to mix it up. Brewed with oats and wheat and left unfiltered for a smooth juicy hit.",
        },
        { where: { id: 29 } }
      ),
      Beer.update(
        {
          description:
            "This American-style India pale ale has medium-high hop bitterness on a balanced and medium-weight palate. It is fragrant with floral, citrus-like, piney/resinous aroma and flavour, making it ideal for food matching. Pairs nicely with Sushi, other dishes garnished with fresh ginger, or fish and chips.",
        },
        { where: { id: 30 } }
      ),
      Beer.update(
        {
          description:
            "Cascade Brewing, out of Oregon, named this Mimosa-styled sour beer after the long lines that you might encounter at any good brunch spot. A blend of sour wheat and blond ales aged in ex-chardonnay barrels result in complex citrus and tropical aromas. Pair with brunch staples like eggs Benedict or pancakes with fresh fruit.",
        },
        { where: { id: 31 } }
      ),
      Beer.update(
        {
          description:
            "Established in 1994 on Hawaii's Big Island, the Kona Brewing Co has become a global success. Their Kona Big Wave Golden Ale rolls in with aromas of citrus, toasted nuts and grain, crests with flavours of banana, pineapple and a hint of pine then finishes with moderately bitter citrus notes. Pair with seafood or roast pork.",
        },
        { where: { id: 32 } }
      ),
      Beer.update(
        {
          description:
            "Kilkenny's brewing heritage dates back to 14th century and is a classic Irish ale. Pouring brilliant copper with a foamy white head that sustains for a good length of time; the nose is malty and fresh while the palate is creamy with light coffee, raisin, plum and light bitterness on a medium-length finish.",
        },
        { where: { id: 33 } }
      ),
      Beer.update(
        {
          description:
            "An award-winning, traditional, Belgian style wit beer named in honour of Florida's colonial-era settlers. Hazy in appearance with aromas and flavours of orange zest, lime, spice and candied fruit with floral/herb and bubblegum notes. Well carbonated with a balanced bitter finish. Serve chilled with a citrus slice.",
        },
        { where: { id: 34 } }
      ),
      Beer.update(
        {
          description:
            "An extraordinary, rare craft beer experience like no other. Made using a unique process and blend of ingredients and aged to perfection in barrel and packed with flavour and highly complex boasting an astounding 28% abv, managing to remain well-structured and poised with a long, warm finish.",
        },
        { where: { id: 35 } }
      ),
      Beer.update(
        {
          description:
            "A dark, malty celebration ale with layered flavors and beautifully balanced hopping. Jubelale pours deep garnet in color, medium bodied, with notes of chicory, earth, spice and fruit. To beer lovers, it’s like Yule fire and family.",
        },
        { where: { id: 36 } }
      ),
      Beer.update(
        {
          description:
            "Seven varieties of malt are used to create this heart-warming Scotch ale. It pours dark brown and bursts with aromas of malt, cocoa and cereal grains. On the palate, you're greeted by coffee, plum and raisins, leading to a long-lasting finish. Try with potato pizza topped with smoked Gouda or beef stew and garlic bread.",
        },
        { where: { id: 37 } }
      ),
      Beer.update(
        {
          description:
            "This Weissbier is a cloudy, golden wheat beer with fine aromatic yeasts, according to the German Purity Law of 1516, and made with certified non-GMO ingredients. Winner of the 2015, 2016, 2017, and 2018 Gold Medal at the Monde Selection Awards in Brussells, Belgium.",
        },
        { where: { id: 38 } }
      ),
      Beer.update(
        {
          description:
            "Modern Times Beer is well known for their interesting and flavourful beer. This gold-coloured wheat beer boasts aromas and flavours of citrus, pineapple and apricot; great for summer sipping..",
        },
        { where: { id: 39 } }
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
