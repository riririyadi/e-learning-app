import React, { useEffect } from 'react';
import Navbar from './Navbar'
import "../styles/About.css"
import Footer from "./Footer";


export default function About() {

  useEffect(() => {
 document.title = "E-learning | About"
  }, [])
    return (
        <div>
            <Navbar />
            <div className="about container">
            <div  className="centering" style={{flexDirection:"column"}}>
            <h5><b>Meet Us</b></h5>
            <div className="team-image"></div>
            <p className="mt-4 p-4">The team with best work ethic and passion, to bring all the good things to the system.</p>
            </div>
            </div>

     <Footer />
             
        </div>
    )
}
