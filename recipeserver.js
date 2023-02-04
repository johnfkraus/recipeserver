// recipe server that imitates the RecipePuppy API.

const http = require("http");
const host = 'localhost';
const port = 8001;

const data = {
    "title": "Recipe Puppy",
    "version": 0.1,
    "href": "http:\/\/www.recipepuppy.com\/",
    "results": [
        {
            "title": "Monterey Turkey Omelet",
            "href": "http:\/\/allrecipes.com\/Recipe\/Monterey-Turkey-Omelet\/Detail.aspx",
            "ingredients": "butter, eggs, garlic, green pepper, monterey jack cheese, onions, turkey, water",
            "thumbnail": "http:\/\/img.recipepuppy.com\/5506.jpg"
        },
        {
            "title": "Cheesy Bacon and Potato Omelet \r\n\r\n",
            "href": "http:\/\/www.kraftfoods.com\/kf\/recipes\/cheesy-bacon-potato-omelet-112465.aspx",
            "ingredients": "bacon, potato, onions, garlic, eggs, cheddar cheese, black pepper, parsley",
            "thumbnail": "http:\/\/img.recipepuppy.com\/600267.jpg"
        },
        {
            "title": "\nShrimp Omelet Recipe\n\n",
            "href": "http:\/\/cookeatshare.com\/recipes\/shrimp-omelet-52483",
            "ingredients": "garlic, onions, vegetable oil, tomato, shrimp, salt, black pepper, eggs",
            "thumbnail": "http:\/\/img.recipepuppy.com\/767245.jpg"
        },
        {
            "title": "Mild Curry Omelet",
            "href": "http:\/\/allrecipes.com\/Recipe\/Mild-Curry-Omelet\/Detail.aspx",
            "ingredients": "coriander, cumin, eggs, garlic, green onion, vegetable oil, onions, red pepper, salt, turmeric",
            "thumbnail": ""
        },
        {
            "title": "Spanish Omelet with Fresh Avocado Salsa",
            "href": "http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=366747",
            "ingredients": "sausage, onions, green pepper, garlic, eggs, salt, black pepper, nonstick cooking spray, butter, goat cheese, avocado, black pepper",
            "thumbnail": "http:\/\/img.recipepuppy.com\/550787.jpg"
        },
        {
            "title": "Zucchini Pepperoni Omelet",
            "href": "http:\/\/www.cooks.com\/rec\/view\/0,1916,138188-236200,00.html",
            "ingredients": "garlic, green pepper, zucchini, pepperoni, onions, olive oil, oregano",
            "thumbnail": ""
        },
        {
            "title": "Aussie Omelet",
            "href": "http:\/\/allrecipes.com\/Recipe\/Aussie-Omelet\/Detail.aspx",
            "ingredients": "cheddar cheese, curry powder, eggs, garlic, green pepper, milk, olive oil, onions, salt, shrimp, tomato",
            "thumbnail": ""
        }
    ]
}

// const requestListener = function (req, res) {
const requestListener = function (_, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data, null, 3));
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`This is a server that imitates the RecipePuppy application API.  You can use this app for Cypress web testing, in case RecipePuppy on the Internet is not working.`)
    console.log(`Server is running on http://${host}:${port}`);
});

