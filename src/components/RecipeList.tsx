import React from 'react';
import Recipe from './Recipe'; 
import { IRecipe } from '../IRecipe'; 

interface IRecipeListProps {
    recipes: IRecipe[]; 
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;

