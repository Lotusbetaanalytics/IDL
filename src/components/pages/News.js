import React from 'react'
import Banner from '../Banner'
import Footer from '../Footer';
import About from '../About';


const News = () => {
    return (
        <>
            <Banner name="News" />
            <About Title="News" Heading="Coming Soon !!!!!!">
         {/* <p>Are you looking for longevity, an opportunity to make a difference, and a place where your abilities will be valued? 
             At IDL we are always looking for talented individuals who are innovative and driven.</p> */}

             </About> 
             <Footer />
        </>
    )
}

export default News
