import React from 'react'
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdSettingsPhone, MdMessage, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const GIT = () => {
    return (
        <div className={styles.git}>
            <div className={styles.grid}>
            <div className={`${styles.card} ${styles.green}`}>
                <h3 className="text-center">SEND A REQUEST</h3>
            <form>
                <div className="col-md-12 form-group">
                    <input type="text" className="form-control" name="fname" placeholder="First Name" />
                </div>
                <div className="col-md-12 form-group">
                    <input type="text" className="form-control" name="lname" placeholder="Last Name" />
                </div>
                <div className="col-md-12 form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email Address" />
                </div>
                <div className="col-md-12 form-group">
                    <input type="number" className="form-control" name="mobile" placeholder="Contact Number (Optional)" />
                </div>
                <div className="col-md-12 form-group">
                    <textarea className="form-control" name="msg" placeholder="Message"></textarea>
                </div>
                <div className="col-md-6 form-group">
                <input type="submit" className="form-control btn btn-warning" name="send" value="Send Message" />
                </div>
            </form>
        </div>
        <div className={styles.card}>
        <div className={styles.cardSm}>
            <div className={styles.cgrid}>
                <div className={styles.icon}>
                    <div className={styles.circle}>
                        <h1><MdSettingsPhone /></h1>
                    </div>
                </div>
                <div className={styles.text}>
            <p>+234 (0) 9038862224</p>
            <p>+234 (0) 9038862225</p>
            <p>+234 (0) 9038862226</p>
                 </div>
            </div>
        </div>
        <div className={styles.cardSm}>
            <div className={styles.cgrid}>
                <div className={styles.icon}>
                    <div className={styles.circle}>
                        <h1><MdMessage /></h1>
                    </div>
                </div>
                <div className={styles.text}>
                <a href="https://www.facebook.com/FarmFresh.IDL"><FaFacebookSquare />&nbsp;&nbsp;Facebook</a><br />
            <a href="https://instagram.com/integrateddairies/"><FaInstagramSquare />&nbsp;&nbsp;Instagram</a><br />
            <a href="https://twitter.com/IDL_FARMFRESH"><FaTwitterSquare />&nbsp;&nbsp;Twitter</a><br />
                 </div>
            </div>
        </div>



        <div className={`${styles.cardSm} ${styles.cardLg}`}>
            <div className={styles.cgrid}>
                <div className={styles.icon}>
                    <div className={styles.circle}>
                        <h1><MdLocationOn /></h1>
                    </div>
                </div>
                <div className={styles.text}>
                <p><b>Head Office:</b> <br/><br/>No 6 Keana street, adj Christ Embassy, Jos, Plateau State.<br/><br/>
<b>IDL Farm:</b> <br/><br/>No 1 Friesland road, Vom-Jos, Plateau State.<br/><br/>
<b>Lagos Office:</b> <br/><br/>Springville Offices, Block 28, Babatunde Bejide crescent, off Fola Osibo road, Lekki phase 1, Lagos State.</p>
                 </div>
            </div>
        </div>


            </div>
            </div>
        </div>
    )
}

export default GIT
