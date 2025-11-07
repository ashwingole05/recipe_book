import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!recipe.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!recipe.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!recipe.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onAddRecipe({
        id: Date.now(),
        ...recipe
      });
      setRecipe({
        title: '',
        ingredients: '',
        instructions: ''
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="recipe-form-container">
      <h2>Add New Recipe</h2>
      {success && <div className="recipe-success">Recipe added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Recipe Title"
            className="recipe-input"
          />
          {errors.title && <div className="recipe-error">{errors.title}</div>}
        </div>
        
        <div>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (separated by commas)"
            className="recipe-textarea"
          ></textarea>
          {errors.ingredients && <div className="recipe-error">{errors.ingredients}</div>}
        </div>
        
        <div>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Instructions"
            className="recipe-textarea"
          ></textarea>
          {errors.instructions && <div className="recipe-error">{errors.instructions}</div>}
        </div>
        
        <button type="submit" className="recipe-button">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;