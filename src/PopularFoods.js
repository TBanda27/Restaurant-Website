import React, {useState, useEffect} from 'react';
import menu from './foodlist';
import Categories from './Categories';
import Menu from './Menu';
// import logo from './logo.svg';

 // get distinct food categories
const foodCategories = [...new Set(menu.map((menuItem) =>menuItem.category))];
const breakfast = menu.filter((item) => item.category === 'breakfast');
const PopularFoods = () => {
    const [menuItems, setMenuItems] = useState(breakfast);
    const [categories, setCategories] = useState(foodCategories);
    
    const filterItems = (category) =>{
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
    
    return (
        <div className = 'popular-foods container'>
            <div className = "meal-sections">
                <div className="popular-meals">
                    <div className="popular-meals-headings">
                        <h6>SELECT YOUR MEAL</h6>
                        <h1>Popular <span className='primary-background'>Foods</span></h1>    
                    </div>
                    <Categories categories = {categories} filterItems = {filterItems}/>             
                </div>
                <div className='meals '>
                    <Menu menu ={menuItems} />    
                </div>      
            </div> 
            <div className="popular-desserts">
                <div className="popular-desserts-heading">
                    <h5>CHOOSE DESSERTS</h5>
                    <h2>Popular <span className="primary-background">Desserts</span> </h2>
                </div>
                <div className="popular-desserts-div">
                    <div className="dessert-item">
                        <div className="dessert-item-img">
                            <img src='./doughnut.png' alt=""/>
                        </div>
                        <div className="dessert-item-name">
                            <h3>Doughnut</h3>
                            <h4 className ="primary-background">$30</h4>
                        </div>
                    </div>
                    <div className="dessert-item">
                        <div className="dessert-item-img">
                            <img src="./png6.png" alt=""/>
                        </div>
                        <div className="dessert-item-name">
                            <h3>Rose Muffin</h3>
                            <h4 className ="primary-background">$10</h4>
                        </div>
                    </div>
                    <div className="dessert-item">
                        <div className="dessert-item-img">
                            <img src="./chocolate-cake.png" alt=""/>
                        </div>
                        <div className="dessert-item-name">
                            <h3>Chocolate Cake</h3>
                            <h4 className ="primary-background">$20</h4>
                        </div>
                    </div>
                    <div className="dessert-item">
                        <div className="dessert-item-img">
                            <img src='./chocolate-cake.png' alt=""/>
                        </div>
                        <div className="dessert-item-name">
                            <h3>Cherry Muffin</h3>
                            <h4 className ="primary-background">$30</h4>
                        </div>
                    </div>  
                </div>    
            </div>
        </div>
    )
}

export default PopularFoods;