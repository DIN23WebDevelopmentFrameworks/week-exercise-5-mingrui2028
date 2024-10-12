import React, { useEffect, useState } from 'react';
import RecipeTagList from './components/RecipeTagList';
import RecipeList from './components/RecipeList';
import { IRecipe } from './interface';

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch('https://dummyjson.com/recipes/tags');
            const data = await response.json();
            setTags(data);
        };
        fetchTags();
    }, []);

   
    useEffect(() => {
        const fetchRecipes = async () => {
            if (selectedTag) {
                const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
                const data = await response.json();
                setRecipes(data.recipes); 
            }
        };
        fetchRecipes();
    }, [selectedTag]);

    const handleSelectTag = (tag: string) => {
        setSelectedTag(tag);
    };

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
            {selectedTag && <RecipeList recipes={recipes} />}
        </div>
    );
};

export default App;
