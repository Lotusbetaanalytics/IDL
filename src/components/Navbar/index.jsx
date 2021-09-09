import React, {useState} from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import one from '../../assets/slide5.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/mission.jpg';
import { MdApps, MdClose } from "react-icons/md";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className={styles.navbar}>
            <div className={styles.grid}>
            <div className={styles.logo}>
                <img src={logo} alt="IDL Logo" />
            </div>
            <div className={styles.bar} onClick={handleClick}>
             { click ?  <MdClose />  : <MdApps /> }
             </div>
            <div className={click ? styles.navActive : styles.navLinks}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/" ><li>Products
                        
                    <div className={styles.dropdown}>
                        <ul>
                    <Link to="/"><li>FarmFresh </li></Link>
                    <Link to="/"><li>reFresh</li></Link>
                        </ul>

                    </div>
                        </li></Link>
                    <Link to="/"><li>Services 
                        
                    <div className={styles.dropdowns}>
                        <div className={styles.grids}>
                        <div className={styles.customNav}>
                            <div className={styles.cgrid}>
                            <div className={styles.pix}>
                            <img src={two} alt="IDL" />
                            </div>
                            <div className={styles.url}>
                                <ul>
                                <Link to="/"><li>Consltancy Services</li></Link>
                                <Link to="/"><li>Training and Capacity Development</li></Link>
                                    <Link to="/"><li>Outgrowers Milk Collections & Training </li></Link>
                             <Link to="/"><li>Development of Hub Model   </li></Link>
                             </ul>
                            </div>
                        </div>
                        </div>

                        <div className={styles.customNav}>
                        <div className={styles.cgrid}>
                            <div className={styles.pix}>
                            <img src={one} alt="IDL" />
                            </div>
                            <div className={styles.url}>
                                <ul>
                            <Link to="/" ><li>Sales of Animal </li></Link>
                            <Link to="/"><li>Supply Seeds and Seedlings for the Wood Fuel Program</li></Link>
                            <Link to="/" ><li>Sales of Hays & Concentrates</li></Link>
                            <Link to="/"><li>Sales of Bull Semen</li></Link>
                            </ul>
                            </div>
                        </div>
                        </div>

                        <div className={styles.customNav}>
                        <div className={styles.cgrid}>
                            <div className={styles.pix}>
                            <img src={three} alt="IDL" />
                            </div>
                            <div className={styles.url}>
                                <ul>
                            <Link to="/" ><li>Artificial Insemination</li></Link>
                            <Link to="/"><li>Linkages</li></Link>
                            <Link to="/"><li>Ranch, Colonies & Smallholder Farm Mgt.</li></Link>
                            <Link to="/"><li>Demo Farms & Training Centres at Ward Level </li></Link>
                            <Link to="/"><li>Animal Health Services</li></Link>
                            </ul>
                            </div>
                        </div>
                        </div>
                          
                        </div>
                    </div>
                        
                        </li></Link>
                    <Link to="/careers" ><li>Careers</li></Link>
                    <Link to="/news" ><li>News</li></Link>
                    <Link to="/contact" ><li>Contact Us</li></Link>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar
