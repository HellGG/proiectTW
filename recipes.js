const COURSE_TYPES = ["Main", "Dessert", "Drink"];
const MENU_CATEGORIES = ["Pasta", "Grill", "Bar"];

const recipes = [
  {
    id: 1,
    name: "Carbonara Pasta",
    available: true,
    courseType: "Main",
    menuCategory: "Pasta",
  },
  {
    id: 2,
    name: "Lamb Ribs with Citrus Glaze",
    available: false,
    courseType: "Main",
    menuCategory: "Grill",
  },
  {
    id: 3,
    name: "Craft IPA Beer",
    available: true,
    courseType: "Drink",
    menuCategory: "Bar",
  },
];

function listRecipeNames(list) {
  return list.map((recipe) => recipe.name);
}

function findRecipeById(list, id) {
  return list.find((recipe) => recipe.id === id);
}

function countAvailableRecipes(list) {
  return list.filter((recipe) => recipe.available).length;
}

function searchRecipes(list, text) {
  const searchText = text.toLowerCase();

  return list.filter((recipe) =>
    [recipe.name, recipe.courseType, recipe.menuCategory]
      .some((value) => value.toLowerCase().includes(searchText))
  );
}

function nextRecipeId(list) {
  return list.reduce((maxId, recipe) => Math.max(maxId, recipe.id), 0) + 1;
}

function addRecipe(list, name, courseType, menuCategory) {
  if (typeof name !== "string" || !name.trim()) {
    console.warn("Numele rețetei nu poate fi gol.");
    return list;
  }

  const recipeName = name.trim();
  if (recipeName.length > 100) {
    console.warn("Numele rețetei nu poate depăși 100 de caractere.");
    return list;
  }

  if (!COURSE_TYPES.includes(courseType)) {
    console.warn("Tipul preparatului nu este valid.");
    return list;
  }

  if (!MENU_CATEGORIES.includes(menuCategory)) {
    console.warn("Categoria din meniu nu este validă.");
    return list;
  }

  const newRecipe = {
    id: nextRecipeId(list),
    name: recipeName,
    available: false,
    courseType,
    menuCategory,
  };

  return [...list, newRecipe];
}

function toggleRecipeAvailability(list, id) {
  return list.map((recipe) =>
    recipe.id === id
      ? { ...recipe, available: !recipe.available }
      : recipe
  );
}

function deleteRecipe(list, id) {
  return list.filter((recipe) => recipe.id !== id);
}

console.log("--- Citire ---");
console.log("Rețete:", listRecipeNames(recipes).join(", "));
console.log("Rețeta cu id 2:", findRecipeById(recipes, 2));
console.log("Disponibile:", countAvailableRecipes(recipes));
console.log(
  "Căutare «CARBONARA»:",
  listRecipeNames(searchRecipes(recipes, "CARBONARA")).join(", ")
);
console.log("Următorul id după ștergerea id-ului 2:", nextRecipeId(deleteRecipe(recipes, 2)));

console.log("--- Adăugare ---");
let recipeList = addRecipe(recipes, "Mushroom Risotto", "Main", "Pasta");
console.log("Lista nouă:", recipeList.length, "rețete");
console.log("Lista inițială a rămas cu:", recipes.length, "rețete");

console.log("--- Modificare și ștergere ---");
recipeList = toggleRecipeAvailability(recipeList, 1);
console.log("Disponibile după comutarea rețetei 1:", countAvailableRecipes(recipeList));
recipeList = deleteRecipe(recipeList, 3);
console.log("După ștergerea rețetei 3:", listRecipeNames(recipeList).join(", "));

console.log("--- Validare ---");
addRecipe(recipeList, "   ", "Main", "Pasta");
addRecipe(recipeList, "Grilled Trout", "Snack", "Grill");
addRecipe(recipeList, "Grilled Trout", "Main", "Seafood");
