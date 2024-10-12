import React from 'react';
import { IRecipe } from '../IRecipe'; 

interface IRecipeProps {
    recipeData: IRecipe; 
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div>
            <h3>{recipeData.name}</h3>
            <img src={recipeData.image} alt={recipeData.name} />
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {recipeData.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ol>
                    {recipeData.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
            <div>
                <p>Preparation Time: {recipeData.prepTimeMinutes} minutes</p>
                <p>Cooking Time: {recipeData.cookTimeMinutes} minutes</p>
                <p>Servings: {recipeData.servings}</p>
                <p>Difficulty: {recipeData.difficulty}</p>
                <p>Cuisine: {recipeData.cuisine}</p>
                <p>Calories per serving: {recipeData.caloriesPerServing}</p>
                <p>Rating: {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
                <p>Meal Types: {recipeData.mealType.join(', ')}</p>
            </div>
        </div>
    );
};

export default Recipe;

