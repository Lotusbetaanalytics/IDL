import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { SiHappycow } from "react-icons/si";
import { RiShoppingBasket2Line, RiShoppingCart2Fill, RiShieldCrossFill } from "react-icons/ri";

import { BiPhoneCall } from "react-icons/bi";


const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.card}>
                <h5>What We Do</h5>
                <h1 className="text-success"><b>Our Services</b></h1><br />
                <div className={styles.grid}>
                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><SiHappycow /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Artificial Insemination</b></h5>
                                <p>Integrated Dairies Limited uses Artificial Insemination for breeding activities due to the numerous advantages </p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><BiPhoneCall /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Consultancy Services</b></h5>
                                <p>Do you own a farm? Do you want to own a farm? At Integrated Dairies Limited, we offer consultancy services on farming and farm related activities.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><RiShoppingBasket2Line /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Sales of Hay & Concentrates</b></h5>
                                <p>Do you own a farm? Do you want to own a farm? At Integrated Dairies Limited, we offer consultancy services on farming and farm related activities.</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><RiShoppingCart2Fill /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Sales of Animal</b></h5>
                                <p>Sales of animals is one of the services offered by integrated dairies limited.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><RiShieldCrossFill /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Animal Health Services</b></h5>
                                <p>Programs with NVRI and the Faculty of Veterinary Medicine,  University of Jos, in animal health, vaccination, disease control, </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSm}>
                        <div className={styles.sgrid}>
                            <div className={styles.tiny}>
                                <h1 className="text-success"><SiHappycow /></h1>
                            </div>
                            <div className={styles.tiny}>
                                <h5><b>Outgrowers Milk Collection and Training</b></h5>
                                <p>Purchase of raw milk from about 1500 smallholder dairy farmers under our out- growers program and training of local dairy farmers</p>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className="col-md-4 text-center mx-auto">
                <Link to="/services" className="btn btn-success btn-block">View More</Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Services
