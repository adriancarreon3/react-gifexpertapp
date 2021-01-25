import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Barry Allen']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Pokemon']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ol>
                {
                    categories.map( (category, index) => {
                      return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>

        </>
    );
}


export default GitExpertApp;