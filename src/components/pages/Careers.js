import React from 'react'
import Banner from '../Banner'
import Footer from '../Footer';
import About from '../About';
import { Link } from 'react-router-dom';




const Careers = () => {
    return (
        <>
            <Banner name="Careers" />
            <About Title="Careers" Heading="Job opportunities">
         <p>Are you looking for longevity, an opportunity to make a difference, and a place where your abilities will be valued? 
             At IDL we are always looking for talented individuals who are innovative and driven.</p>

             <Link to="careers/traniees" className="btn btn-success">Graduate And Management Trainee Programme</Link>
             

             </About>
             <Footer />
        </>
    )
}

export default Careers
