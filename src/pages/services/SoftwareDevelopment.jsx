import { Link } from "react-router-dom";
import styles from "./SoftwareDevelopment.module.css";
import { BiCustomize } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

function SoftwareDevelopment() {
    return (
        <>
            <div className={styles.softwareDevelopment}>
                <h1>
                    Bringing Your Ideas to Life, <br /> Driving Innovation
                </h1>
                <div>
                    <Link to="/hubspot-contact" className="cta mt-12">
                        Let Talk!
                    </Link>
                </div>
            </div>
            <div className={styles.softBody}>
                <div className={styles.softLeft}>
                    <div>
                        <p>
                            In today&apos;s digital world, custom software
                            solutions are essential for businesses looking to
                            stay competitive and drive innovation. At CnergyPro,
                            we offer comprehensive software development
                            solutions designed to bring your ideas to life,
                            streamline processes, and drive business growth.
                        </p>
                    </div>
                    <div>
                        <p>
                            Ready to turn your software ideas into reality?
                            Contact us today to learn more about our software
                            development solutions and discover how we can help
                            you achieve your business objectives.
                        </p>
                        <div className={styles.link}>
                            <Link to="/hubspot-talk" className="cta mt-9">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.softRight}>
                    <h1>Our Offerings</h1>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <BiCustomize />
                        </div>
                        <p>
                            <span>Custom Application Development:</span> Create
                            tailored software solutions that meet your unique
                            business needs and objectives.
                        </p>
                    </div>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <MdDeveloperMode />
                        </div>
                        <p>
                            <span>Mobile App Development:</span> Reach customers
                            on the go and enhance user experiences with our
                            mobile app development services.
                        </p>
                    </div>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <CiGlobe />
                        </div>
                        <p>
                            <span>Web Development:</span> Build responsive and
                            intuitive websites and web applications that engage
                            users and drive conversions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SoftwareDevelopment;
