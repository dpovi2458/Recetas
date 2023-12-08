//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import peruvianRecipes from './data/peruvianRecipes';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RecipeList recipes={peruvianRecipes} />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  </Router>
);

export default App;


