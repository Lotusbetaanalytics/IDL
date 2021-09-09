import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import agro from '../../assets/agro.jpg';
import farmfresh from '../../assets/farmfresh12.jpg';
import milk from '../../assets/milk2.jpg';

const News = () => {
    return (
        <div className={styles.news}>
            <h1 className="text-center"><b>Latest News</b></h1>
            <div className={styles.grid}>
                <Link to="/news">
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={agro} alt="Agro" />
                    </div>
                    <div className={styles.text}>
                        <h5>Integrated Dairies To Attend Nigeria Agrofood Event</h5>
                        <p>We’re pleased to announce that we will be exhibiting at the Agrofood Nigeria 2016 trade show later this month. T
                            he event is in its second year and focuses on agriculture, food, beverage & packaging technology</p>
                    </div>
                </div>
                </Link>
                <Link to="/news">
                <div className={styles.card}>
                    <div className={styles.img}>
                    <img src={milk} alt="Milk" />
                    </div>
                    <div className={styles.text}>
                        <h5>The Best Approach To Storing Milk And Yoghurt</h5>
                        <p>Correct and safe storage of food and drink products is important. By storing food and drink correctly you will get the best out of your produce, </p>
                    </div>
                </div>
               </Link>
               <Link to="/news">
                <div className={styles.card}>
                    <div className={styles.img}>
                    <img src={farmfresh} alt="Agro" />
                    </div>
                    <div className={styles.text}>
                        <h5>Why Our Milk And Yoghurt Products Are Good For You!</h5>
                        <p>There are many health benefits to regularly including dairy products like our milk and yoghurts in your diet.</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default News
