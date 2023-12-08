// Ingredient.js
import React from 'react';

const Ingredient = ({ ingredient }) => (
  <li>{ingredient.name}: {ingredient.quantity}</li>
);

export default Ingredient;