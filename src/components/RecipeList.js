// RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const RecipeList = ({ recipes }) => (
  <div>
    <h1 className="titulo-recetas">Lista de Recetas</h1>
    {recipes.map(recipe => (
      <div key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
          <h2>{recipe.name}</h2>
        </Link>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
      </div>
    ))}
  </div>
);

export default RecipeList;
