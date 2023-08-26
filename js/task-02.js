const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElement = document.querySelector('ul#ingredients');
const ingredientCallback = ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.innerText = ingredient;
  newIngredient.className = 'item';
  ingredientsElement.append(newIngredient);
};
ingredients.forEach(ingredientCallback);
