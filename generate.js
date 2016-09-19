module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    // var productTypes = ["dress", "shoes", "boots", "coat", "trousers", "shorts", "trainers", "t-shirt", "bikini", "trunks", "socks"];
    var productTypes = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    var imageUrlPrefix = "http://lorempixel.com/600/600/";
    return {
        products: _.times(100, function (n) {
            var randomProductType = productTypes[Math.floor(Math.random() * productTypes.length)];
            return {
                id: n,
                name: faker.company.catchPhraseAdjective(),
                shortDescription: faker.lorem.sentence(),
                longDescription: faker.lorem.paragraph(),
                imageUrl: imageUrlPrefix + randomProductType,
                price: faker.random.number(),
                productType: randomProductType,
            }
        })
    }
}
