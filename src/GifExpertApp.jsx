import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer']);
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [ ...cat, 'Valorant']);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewValue={onAddCategory}
            />
            <button onClick={onAddCategory}>Agregar</button>
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

/*
const apiKey = 'vgmh7rwpk0EgkCjY7h6bypMISTbBquxj';
const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
*/