// Recipe.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Ingredient from './Ingredient';
import peruvianRecipes from '../data/peruvianRecipes';

function Recipe() {
  const { id } = useParams();
  // Ahora puedes usar 'id' para buscar tu receta
  const recipe = peruvianRecipes.find(recipe => recipe.id === Number(id));

  // Asegúrate de que 'recipe' no es 'undefined' antes de intentar acceder a sus propiedades
  if (!recipe) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </ul>
      <h3>Instrucciones:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;