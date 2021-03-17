import React, {useState, useEffect} from 'react'
import events from './eventsData'
import { FaAngleDoubleRight } from 'react-icons/fa'

const  Events = () =>{
    const [event, setEvent] = useState(events);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = event.length -1;
        if(index < 0){
        setIndex(lastIndex);
        }
        if(index > lastIndex){
        setIndex(0);
        }
        }, [index, event])

        // for auto slide
        useEffect(() => {
            const slider = setInterval(() => {setIndex(index+1);}, 4000)
             return ()=> clearInterval(slider);
        }, [index])

    return (
        <div className = 'secondary-background'>
            <div className="container">
                <section className="eventsHeadings">
                    <h4>Events</h4>
                    <h1>Enjoy <span className = 'primary-background'>Our Events</span></h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </section>
                <div className = 'events'>
                        {event.map((eventItem, eventIndex) =>{
                            const {id, image, price, details, info,  event} = eventItem;
                            let position = 'nextEvent';
                            if (eventIndex === index){
                            position = 'activeEvent';
                            }
                            if (eventIndex === index -1 || (index ===0 && eventIndex === event.length -1)){
                                position = 'lastEvent';
                            }
                            return(
                                <article>
                                    <div className= {position} key ={id}>
                                        <div className="event-image">
                                            <img src={image} alt={event}/>
                                        </div>
                                        <div className="event-details">
                                            <h2>{event}</h2>
                                            <h4 className="primary-background">${price}</h4>
                                            <p>{info}</p>
                                            { details.map((detail, index) =>{
                                                return (
                                                    <div className="event-description" key={index}>  
                                                        <p><FaAngleDoubleRight className = "event-icon"></FaAngleDoubleRight>   {detail}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </article>
                                )
                            })
                        }          
                </div>
                <div className = 'event-buttons-container'>   
                    {event.map((eventItem, eventIndex) =>{
                        return(
                        <button
                            className = {`event-btn ${index === eventIndex && 'active-event-button'}`} 
                            onClick ={()=>setIndex(eventIndex)} 
                            key = {eventItem.id} > 
                        </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events;
