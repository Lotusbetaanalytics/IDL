import React from 'react'
import styles from './styles.module.css'

const Banner = (props) => {
    return (
        <div className={styles.banner}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Banner
