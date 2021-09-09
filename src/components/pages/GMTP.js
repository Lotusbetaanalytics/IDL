import React from 'react'
import Banner from '../Banner'
import Footer from '../Footer';
import CareerPage from '../Career';
import { FacebookProvider, Like } from 'react-facebook';
import ReactTwitterFollowButton from 'react-twitter-follow-button';
import InstagramButton from  "react-instagram-button";
import styles from './styles.module.css'




const redirect = () => {
    window.location.href="https://integrateddairies.alanandgrant.com/";
}


const GMTP = () => {
    return (
        <>
            <Banner name="Careers" />
            <CareerPage Title="Graduate And Management Trainee Programme" Heading="Integrated Dairies Limited Producers of Farmfresh milk and yoghurts.">
             <p>Integrated Dairies Limited (IDL) is a premier producer of dairy product in Nigeria and a leading conglomerate in the FCMG Industry 
                 with its head office in Jos, Plateau state.</p>

             <p>As part of our expansion plans, we are making a call for young, innovative and 
                 ambitious talents who are seeking opportunities to grow a career in our organization.</p>

                <h5>The Ideal Candidates should have:</h5>
                <p>A minimum of second class upper first degree in 
                A minimum of <b>second class upper </b> first degree in <b>Engineering, Management Science, Social Science, Agriculture and other Science related disciplines;</b> preferably in Agronomy, Animal Science, Instrumentation Engineer, Mechatronics, Mechanical Engineering, Electrical Engineering, Electrical Electronics, Agricultural Science/Economics, Veterinary Medicine etc.
                </p>
                <h4 className="text-success">Graduate Trainees</h4>
                <p>Fresh HND/Bsc Graduates
who have Completed the mandatory National Youth Service (NYSC)
With relevant research or project experience on farming, production, animal care, Breeding etc.</p>

<h4 className="text-success">Management Trainees</h4>
<p>2 – 3 years post-NYSC experience from similar companies along the Industry Value-Chain.
With relevant professional qualifications or ongoing certification program (may be an advantage).</p>

<p><b>Application closes on the 12th of March 2021</b></p>


<div className={styles.show} id="show">
<p>Like Our Social Media Handles, then Click Apply</p>
<FacebookProvider appId="829894354230817" onClick={redirect}>
   <Like href="http://www.facebook.com/FarmFresh.IDL" colorScheme="dark" OnResponse={redirect}  /> 
      </FacebookProvider>
      <ReactTwitterFollowButton twitterAccount="IDL_FARMFRESH" showLarge={true} showName={true} showCount={true} />
      <InstagramButton username={"integrateddairies"} />
</div>

              


<a href="https://integrateddairies.alanandgrant.com/" className="btn btn-success">Click Here to Apply Now</a>


             </CareerPage>
             <Footer />
        </>
    )
    
}

export default GMTP;


