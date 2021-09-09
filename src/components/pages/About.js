import React from 'react'
import Banner from '../Banner'
import About from '../About';
import Footer from '../Footer';
import Page from '../About/Page';

const Abouts = () => {
    return (
        <>
            <Banner name="About Us" />
            <About Title="About Us" Heading="Integrated Dairies Limited (IDL)">
         <p>Integrated Dairies Limited is a wholly owned indigenous integrated dairy company and one of the prominent players in the dairy industry involved in all parts of the dairy value chain – feed and forage production, animal husbandry, milk production and eventual processing into high quality pasteurized milk, drinking and stirred yoghurt and ice cream (with capacity to produce cheese and butter). Located on 550 hectares of land within the National Veterinary Research Institute (NVRI) premises in Vom, Jos Plateau State. 
             The farm is home to Holstein Friesian Cows with an average daily milking of 18 litres/cow.</p>

             </About> 
             <Page />
             <Footer />
        </>
    )
}

export default Abouts
