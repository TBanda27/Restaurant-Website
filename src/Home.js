import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import PopularFoods from './PopularFoods'
import Testimonials from './Testimonials'
import Events from './Events'
import BookTable from './BookTable'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className="backgroundA">
        <Navbar/>
        <Body/>
      </div> 
      <div className="secondary-background">
          <PopularFoods/>
      </div>
      <div className="tetiary-background">
          <Testimonials/>   
      </div>  
      <Events/> 
     <div className="tetiary-background">
          <BookTable/>   
      </div> 
      <Footer/>
    </>
  )
}

export default Home