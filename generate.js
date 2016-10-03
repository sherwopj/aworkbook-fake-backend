module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    // var productTypes = ["dress", "shoes", "boots", "coat", "trousers", "shorts", "trainers", "t-shirt", "bikini", "trunks", "socks"];
    // var productTypes = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
     var productTypes = ["buildings", "food", "nature", "people", "technology", "objects"];
    var imageUrlPrefix = "https://source.unsplash.com/category/";
    return {
        products: _.times(100, function (n) {
            var randomProductType = productTypes[Math.floor(Math.random() * productTypes.length)];
            return {
                id: n,
                name: faker.company.catchPhraseAdjective(),
                shortDescription: faker.lorem.sentence(),
                longDescription: faker.lorem.paragraph(),
                imageUrl: imageUrlPrefix + randomProductType + "/600x600",
                price: faker.finance.amount(10,300,2),
                productType: randomProductType,
            }
        })
    }
}
