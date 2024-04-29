import { Link } from "react-router-dom";
import styles from "./Procurement.module.css";

function Procurement() {
    return (
        <>
            <div className={styles.government}>
                <h1>Driving Efficiency, Maximizing Savings</h1>
            </div>
            <div className={styles.governmentBody}>
                <div className={styles.govRight}>
                    <p>
                        Efficient procurement processes are essential for
                        businesses looking to maximize savings and drive growth.
                        At CnergyPro, we offer comprehensive procurement
                        solutions designed to streamline processes, optimize
                        vendor management, and deliver measurable results.
                    </p>
                </div>
                <div className={styles.govLeft}>
                    <h1>Our Offerings</h1>
                    <p>
                        <span>Strategic Sourcing:</span> Identify cost-saving
                        opportunities and optimize supplier relationships with
                        our strategic sourcing solutions.
                    </p>
                    <p>
                        <span>Procure-to-Pay (P2P):</span> Streamline
                        procurement processes from requisition to payment with
                        our procure-to-pay solutions.
                    </p>
                    <p>
                        <span>Vendor Management:</span> Centralize vendor
                        information, track performance, and ensure compliance
                        with our vendor management solutions
                    </p>
                </div>
                <div className={styles.govLast}>
                    <p>
                        Ready to optimize your procurement processes and
                        maximize savings? Contact us today to learn more about
                        our procurement solutions and discover how we can help
                        you achieve your business objectives.
                    </p>
                    <div className={styles.link}>
                        <Link to="/hubspot-contact" className="cta mt-12">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Procurement;
