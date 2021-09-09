import React from 'react'
import styles from './styles.module.css'
import vision from '../../assets/vision.jpg'
import mission from '../../assets/mission.jpg'
import core from '../../assets/slide4.jpg'
const Page = () => {
    return (
        <div className={styles.aboutpage}>

            <div className={styles.pcard}>
                <div className={styles.pgrid}>
                    <div className={styles.pimg}>
                        <img src={vision} alt="About IDL" />
                    </div>
                    <div className={styles.text}>
                        <h1>Our Vision</h1>
                        <p>To be the premiere producer of fresh dairy products in West Africa.</p>
                    </div>

                </div>  
            </div>

            <div className={styles.pcard}>
                <div className={styles.pgrid}>
                    
                    <div className={styles.text}>
                        <h1>Our Mission</h1>
                        <p>To meet the expectations of stakeholders by producing high quality dairy products that are affordable and satisfy the nutritional needs of our customers at all times</p>
                    </div>
                    <div className={styles.pimg}>
                        <img src={mission} alt="About IDL" />
                    </div>
                </div>  
            </div>


            <div className={styles.pcard}>
                <div className={styles.pgrid}>
                    <div className={styles.pimg}>
                        <img src={core} alt="About IDL" />
                    </div>
                    <div className={styles.text}>
                        <h1>Core Values</h1>
                       <ul>
                           <li>Teamwork</li>
                           <li>Leadership</li>
                           <li>Innovation</li>
                           <li>Excellence</li>
                           <li>Integrity</li>
                           <li>'Can do'attitude</li>
                       </ul>
                    </div>

                </div>  
            </div>
        </div>

    )
}

export default Page
