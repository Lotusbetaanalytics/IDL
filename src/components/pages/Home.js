import React from 'react'
import About from '../About';
import Slider from '../Carousel/Carousel';
import Footer from '../Footer';
import News from '../News';
import Product from '../Product';
import Services from '../Services';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
         <Slider />  
         <About Title="Welcome to" Heading="Integrated Dairies Limited (IDL)">
         <p>Integrated Dairies Limited (IDL) was incorporated as a Private Limited Liability Company in April 2003.<br />

Since then, we have been producing and processing fresh milk and dairy products in Nigeria. 
We are currently operating on 550 hectares of land located inside the National Veterinary Research Institute (NVRI) in Vom, Plateau State,
 a highland excellent for animal husbandry, where our dairy farm and main processing facilities are situated.</p>
 <Link to="/about" className="btn btn-warning">More Information</Link>
             </About> 
         <Product />
         <Services />
         <News />
         <Footer />
        </>
    )
}

export default Home
