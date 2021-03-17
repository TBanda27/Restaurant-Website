import React, {useState} from 'react';

// make a button out of every category
// if button is pressed pass it to the filter function so that it displays the food items in that list

const  Categories =({categories, filterItems}) => {
    const [value, setValue] = useState(0);
    return (
        <div className = "btn-container">
            {categories.map((category, index) =>
                {
                    return(
                        <button 
                            key = {index}
                            type = 'button'
                            className = {`btn ${index === value && 'active-btn'}`}
                            onClick = {()=>{filterItems(category); setValue(index)}}
                            >
                                {category}
                        </button>
                        );
                }
            )}
        </div>
    )
}
export default Categories;