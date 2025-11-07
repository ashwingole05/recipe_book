import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pancakes",
      ingredients: "Flour, eggs, milk, sugar, baking powder, butter",
      instructions: "1. Mix dry ingredients\n2. Add wet ingredients\n3. Cook on griddle\n4. Serve with syrup"
    }
  ]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList 
        recipes={recipes} 
        onDeleteRecipe={handleDeleteRecipe} 
      />
    </div>
  );
}

export default App;