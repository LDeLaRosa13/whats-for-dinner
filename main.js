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

// Functions
function getRandomIndex(recipes) {
  return Math.floor(Math.random() * recipes.length);
}

function showNewFood() {
  cookPot.classList.add("hidden");
  suggestionMeal.classList.remove("hidden");
  if (sideRadioButton.checked) {
    mealPlaceholder.innerText = getMeal(sides);
  } else if (mainRadioButton.checked) {
    mealPlaceholder.innerText = getMeal(mains);
  } else if (dessertRadioButton.checked) {
    mealPlaceholder.innerText = getMeal(desserts);
  } else {
    var entireMeal = `${getMeal(mains)} with a side of ${getMeal(
      sides
    )} and ${getMeal(desserts)} for dessert!`;
    mealPlaceholder.innerText = entireMeal;
  }
}

function getMeal(mealArray) {
  return mealArray[getRandomIndex(mealArray)];
}
