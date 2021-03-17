import React from 'react'

function Menu({menu}) {
    return (
        <div className = "meals">
            <div className="food-container">
                {menu.map((item)=>{
                    const {id, title, category, price, img, desc} = item;
                    return <div key = {id} className = "food-item">
                        <img src={img} alt={title}/> 
                        <h3>{title}</h3>
                        <h5 className="primary-background">${price}</h5>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default Menu
