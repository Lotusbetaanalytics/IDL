import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import logo2 from '../../assets/farmfresh.png'
import logo3 from '../../assets/refresh.png'
import styles from './styles.module.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className={styles.product}>
            <h1 className="text-success">Our Products and Services</h1>
            <div className={styles.grid}>
                <Link to="/about">
                <div className={styles.card}>
                <img src={logo} alt="IDL Logo" />
                <div className={styles.circle}>
                        <h3><FaArrowAltCircleRight /></h3>
                </div>
            </div>
                </Link>
                <a href="https://farmfresh.lotusbetaanalytics.ca">
            <div className={styles.card}>
            <img src={logo2} alt="Farmfresh Logo" />
            <div className={styles.circle}>
                        <h3><FaArrowAltCircleRight /></h3>
                </div>
            </div>
            </a>
            <Link to="/">
            <div className={styles.card}>
            <img src={logo3} alt="Refresh logo" />
            <div className={styles.circle}>
                        <h3><FaArrowAltCircleRight /></h3>
                </div>
            </div>
            </Link>
            </div>
            
        </div>
    )
}

export default Product
