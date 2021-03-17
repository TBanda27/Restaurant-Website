import React, {useState, useEffect} from 'react'
import menu from './galleryData';

const  Gallery = () => {
    const [food, setFood] = useState(menu);
    return (
        <div className = 'gallery'>
            <h4>galleries</h4>
            <h1>Photo <span className = 'primary-background'>Gallery</span></h1>
            <div className="gallery-div">
                {food.map((foodItem) => {
                    const {id, img, title} = foodItem;
                    return (
                        <div className='gallery-images' key ={id} >
                            <img src={img} alt={title} className = 'gallery-pic'/>
                        </div>
                        )
                })}
            </div>
            {/* <button className='primary-background'>More Galleries</button> */}
        </div>
    )
}

export default Gallery;