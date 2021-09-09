import React from 'react'
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.grid}>
            <div className={styles.card}>
            <h1 className="text-success"><b>{props.Title}</b></h1>
            <h3>{props.Heading}</h3>
            <p>{props.children}</p>
            </div>
            <div className={styles.img}>
            
            </div>
            </div>
        </div>
    )
}

export default About
