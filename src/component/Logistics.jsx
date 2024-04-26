import { Link } from "react-router-dom";
import styles from "./Logistics.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
function Logistics() {
    return (
        <>
            <div className={styles.logistics}>
                <h1>
                    Streamlining Operations, <br /> Enhancing Efficiency
                </h1>
                <div>
                    <Link to="/hubspot-contact" className="cta mt-12">
                        Let Talk!
                    </Link>
                </div>
            </div>
            <div className={styles.logisticsBody}>
                <div className={styles.logFirst}>
                    <p>
                        At CnergyPro, we understand the unique challenges facing
                        government agencies in todays rapidly evolving digital
                        landscape. Our government services solutions are
                        designed to empower public sector organizations to drive
                        innovation, enhance efficiency, and deliver better
                        services to citizens.
                    </p>
                </div>
                <div>
                    <h1>Our Offerings</h1>
                    <div className={styles.logMark}>
                        <div className={styles.logCols}>
                            <div className={styles.icon}>
                                <IoCheckmarkCircleOutline />
                            </div>
                            <div>
                                <h1>Digital Transformation</h1>
                            </div>
                            <div>
                                <p>
                                    Transform outdated processes and systems
                                    with our comprehensive digital
                                    transformation solutions tailored for
                                    government agencies
                                </p>
                            </div>
                        </div>
                        <div className={styles.logCols}>
                            <div className={styles.icon}>
                                <IoCheckmarkCircleOutline />
                            </div>
                            <div>
                                <h1>Digital Transformation</h1>
                            </div>
                            <div>
                                <p>
                                    Transform outdated processes and systems
                                    with our comprehensive digital
                                    transformation solutions tailored for
                                    government agencies
                                </p>
                            </div>
                        </div>
                        <div className={styles.logCols}>
                            <div className={styles.icon}>
                                <IoCheckmarkCircleOutline />
                            </div>
                            <div>
                                <h1>Digital Transformation</h1>
                            </div>
                            <div>
                                <p>
                                    Transform outdated processes and systems
                                    with our comprehensive digital
                                    transformation solutions tailored for
                                    government agencies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Logistics;
