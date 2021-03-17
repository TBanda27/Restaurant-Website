import React, {useState, useEffect} from 'react'
import {FaQuoteLeft} from 'react-icons/fa';
import data from './testimonialsData';

const  Testimony = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

     useEffect(() => {
        const lastIndex = people.length -1;
        if(index < 0){
        setIndex(lastIndex);
        }
        if(index > lastIndex){
        setIndex(0);
        }
        }, [index, people])

        // for auto slide
        useEffect(() => {
            const slider = setInterval(() => {setIndex(index+1);}, 2500)
             return ()=> clearInterval(slider);
        }, [index])
    return (
        <div className = 'testimonies'>
            <h4>TESTIMONIALS</h4>
            <h1>Satisfied <span className = 'primary-background'>Customers</span></h1>
            <div className="testimony-div">
                {
                    people.map((person, personIndex) =>{
                        const {id, image, name, title, quote} = person;
                        let position = 'nextSlide';
                        if (personIndex === index){
                            position = 'activeSlide';
                        }
                        if (personIndex === index -1 || (index ===0 && personIndex === people.length -1)){
                            position = 'lastSlide';
                        }
                        return(
                            <article className={position} key = {id}>
                                <img src={image} alt={name} className = 'person-img'/>
                                <h5 className = 'primary-background'>{name}</h5>
                                <p className ='title'>{title}</p>
                                <FaQuoteLeft/>
                                <p className = 'quote'>{quote}</p>
                            </article>
                            )
                    })
                }
                
            </div>
            <div className = 'slider-buttons'>   
                {people.map((person, btnIndex) =>{
                    return(
                    <button
                        className = {`slider-btn ${index === btnIndex && 'active-btn'}`} 
                        onClick ={()=>setIndex(btnIndex)} 
                        key = {person.id} > 
                    </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimony;