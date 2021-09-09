import React from 'react'
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CareerPage = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.card}>
            <h2 className="text-success"><b>{props.Title}</b></h2>
            <h3>{props.Heading}</h3>
            <p>{props.children}</p>
            </div>
           
            </div>

    )
}

export default CareerPage
