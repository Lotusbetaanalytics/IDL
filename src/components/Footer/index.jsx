import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo.png';
import logo2 from '../../assets/naija.png';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
            <div className={styles.card}>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>FarmFresh</li></Link>
                <Link to="/"><li>reFresh</li></Link>
                <Link to="/"><li>Contact</li></Link>
                <img src={logo1} alt="IDL" />
                <img src={logo2} alt="Proudly Nigerian" />
            </ul>
        </div>
        <div className={styles.card}>
       <p><b>Head Office:</b> <br/><br/>No 6 Keana street, adj Christ Embassy, Jos, Plateau State.<br/><br/>
<b>IDL Farm:</b> <br/><br/>No 1 Friesland road, Vom-Jos, Plateau State.<br/><br/>
<b>Lagos Office:</b> <br/><br/>Springville Offices, Block 28, Babatunde Bejide crescent, off Fola Osibo road, Lekki phase 1, Lagos State.</p>
        </div>
        <div className={styles.card}>
            <p>+234 (0) 9038862224</p>
            <p>+234 (0) 9038862225</p>
            <p>+234 (0) 9038862226</p>
            <p>Follows us</p>
            <a href="https://www.facebook.com/FarmFresh.IDL"><FaFacebookSquare /></a>
            <a href="https://instagram.com/integrateddairies/"><FaInstagramSquare /></a>
            <a href="https://twitter.com/IDL_FARMFRESH"><FaTwitterSquare /></a>
        </div>
            </div>
        </div>
    )
}

export default Footer
