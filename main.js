var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
  "Macaroni and Cheese",
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesan",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
  "Macaroni and Cheese",
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];

//  Query Selectors & Elements
var sideRadioButton = document.getElementById("side");
var mainRadioButton = document.getElementById("mainDish");
var dessertRadioButton = document.getElementById("dessert");
var entireMealRadioButton = document.getElementById("entireMeal");

var letsCookButton = document.querySelector(".cookButton");
var cookPot = document.querySelector(".cook-pot-img");
var mealBox = document.querySelector("#mealBox");
var suggestionMeal = document.querySelector(".suggestionMeal");
var mealPlaceholder = document.querySelector(".meal-suggestion-placeholder");

// Event Listeners
letsCookButton.addEventListener("click", showNewFood);

// variables
var side = sides[getRandomIndex(sides)];
var main = mains[getRandomIndex(mains)];
var dessert = desserts[getRandomIndex(desserts)];

// Functions
function getRandomIndex(recipes) {
  return Math.floor(Math.random() * recipes.length);
}

function showNewFood() {
  cookPot.classList.add("hidden");
  suggestionMeal.classList.remove("hidden");
  if (sideRadioButton.checked) {
    mealPlaceholder.innerText = sides[getRandomIndex(sides)];
  } else if (mainRadioButton.checked) {
    mealPlaceholder.innerText = mains[getRandomIndex(mains)];
  } else if (dessertRadioButton.checked) {
    mealPlaceholder.innerText = desserts[getRandomIndex(desserts)];
  } else {
    entireMealRadioButton.checked;
    var entireMeal = `Side: ${side}, Main Dish: ${main}, Dessert: ${dessert}`;
    mealPlaceholder.innerText = entireMeal;
  }
}

function hide(element) {
  for (var i = 0; i < element.length; i++) {
    element[i].classList.add("hidden");
  }
}
function show(element) {
  for (var i = 0; i < element.length; i++) {
    element[i].classList.remove("hidden");
  }
}
