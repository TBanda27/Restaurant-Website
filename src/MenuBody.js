import React, {useState, useEffect} from 'react';
import menu from './MenuData'
import Menu from './Menu';
import Footer from './Footer'
import Navbar from './Navbar'

const foodMenu = [ 'All', ...new Set(menu.map((menuItem) => menuItem.category))]
// const all = menu.filter((menuItem) => menuItem.category === 'breakfast');
function MenuBody() {
    const [menuItems, setMenuItems] = useState(menu);
    const [foodCategories, setFoodCategories] = useState(foodMenu)
    const [value, setValue] = useState(0);

    const filterItems = (category) =>{
        if (category === 'All'){
            setMenuItems(menu);
        }
        else{
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems);
        }
    }
    return (
        <div className = 'secondary-background'>
            <Navbar/>
            <div className="container ">
                <div className="menu-body">
                    
                    <h1>Our <span className = 'primary-background'>Menu</span> </h1>
                    <p>We have mouth watering dishes prepared by our expert chefs ready to be devoured by you. Order yours today and enjoy yourself.</p>
                    <div className="categories-btn">
                        {foodCategories.map((foodmenu, index) =>
                            {
                                return <button
                                    key= {index}
                                    className = {`category-btn ${index === value && 'active-category'}`}
                                    onClick = { ()=>{filterItems(foodmenu); setValue(index)}}
                                    >
                                    {foodmenu}
                                </button>
                            }
                        )}
                    </div> 
                    <div className="menu-items-section">
                        {menuItems.map((item)=>{
                            const {id, title, category, price, img, desc} = item;
                            return <div key = {id} className = "menu-item">
                                <img src={img} alt={title} className= 'menu-img'/> 
                                <div className="menu-info">
                                    <header>
                                        <h4>{title}</h4>
                                        <h5 className="primary-background">{price}</h5>
                                    </header>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        })} 
                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}
// date of birth
// transcripts
// academic certificates
// female
// EC Number
// Date of completion
// level of teaching
// province except Harare
// MAshWest
// Disability Nil
// Marriage status
// language shona and english
// 

export default MenuBody
