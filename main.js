var sides = [
Miso Glazed Carrots,
Coleslaw,
Garden Salad,
Crispy Potatoes,
Sweet Potato Tots,
Coconut Rice,
Caeser Salad,
Shrimp Summer Rolls,
Garlic Butter Mushrooms,
Hush Puppies,
Macaroni and Cheese
];

var mains = [
Spaghetti and Meatballs,
Pineapple Chicken,
Shakshuka,
Thai Yellow Curry,
Bibimbap,
Chicken Parmesean,
Butternut Squash Soup,
BBQ Chicken Burgers,
Ramen,
Empanadas,
Chicken Fried Rice,
Sheet Pan Fajitas,
Margarita Pizza,
Macaroni and Cheese
];

var desserts = [
Apple Pie,
Lemon Meringue Pie,
Black Forest Cake,
Banana Bread,
Peach Cobbler,
Cheesecake
Funfetti Cake,
Baklava,
Flan,
Macarons,
Macaroons,
Chocolate Cupcakes,
Pavlova,
Pumpkin Pie,
Key Lime Pie,
Tart Tatin,
Croissants,
Eclairs
];

//  Query Selectors & Elements

var sideRadioButton = document.getElementById("#side")
var mainRadioButton = document.getElementById("#mainDish")
var dessertRadioButton = document.getElementById("#dessert")
var entireMealRadioButton = document.getElementById("#entireMeal")

var letsCookButton = document.querySelector(".cookButton")
var cookPot = document.querySelector("cook-pot-img")

// Event Listeners

letsCookButton.addEventListener("click", functionNameHere)

// Functions

function getRandomIndex(recipes) {
  return Math.floor(Math.random() * recipes.length);
}


