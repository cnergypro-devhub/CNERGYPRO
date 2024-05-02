import styles from "./Government.module.css";
import image from "../assets/gov.webp";
import { Link } from "react-router-dom";

function Government() {
    return (
        <>
            <div className={styles.government}>
                <h1>Empowering Public Sector Innovation</h1>
            </div>
            <div className={styles.governmentBody}>
                <div className={styles.govRight}>
                    <p>
                        At CnergyPro, we understand the unique challenges facing
                        government agencies in todays rapidly evolving digital
                        landscape. Our government services solutions are
                        designed to empower public sector organizations to drive
                        innovation, enhance efficiency, and deliver better
                        services to citizens.
                    </p>
                </div>
                <div className={styles.govLeft}>
                    <h1>Our Offerings</h1>
                    <p>
                        <span>Digital Transformation:</span> Transform outdated
                        processes and systems with our comprehensive digital
                        transformation solutions tailored for government
                        agencies.
                    </p>
                    <p>
                        <span>Cybersecurity:</span> Protect sensitive data and
                        infrastructure with advanced cybersecurity measures
                        designed to mitigate cyber threats and safeguard citizen
                        information.
                    </p>
                    <p>
                        <span>Data Analytics:</span> Harness the power of data
                        analytics to make informed decisions, improve service
                        delivery, and drive operational efficiency.
                    </p>
                    <div className={styles.link}>
                        <Link to="/hubspot-contact" className="cta ">
                            Let Talk!
                        </Link>
                    </div>
                </div>
                <div className={styles.govLast}>
                    <p>
                        Ready to embark on your government agencys digital
                        journey? Contact us today to learn more about our
                        government services solutions and discover how we can
                        help you achieve your goals.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Government;
