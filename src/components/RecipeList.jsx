import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes, onDeleteRecipe }) => {
  return (
    <div className="recipe-list-container">
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-header">
              <h3 className="recipe-title">{recipe.title}</h3>
              <button 
                onClick={() => onDeleteRecipe(recipe.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
            <div className="recipe-details">
              <div className="recipe-ingredients">Ingredients: {recipe.ingredients}</div>
              <div className="recipe-instructions">Instructions: {recipe.instructions}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;