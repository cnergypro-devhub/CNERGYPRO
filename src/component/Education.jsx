import { IoIosArrowDown } from "react-icons/io";
import styles from "./Education.module.css";
import Largeh1 from "./Largeh1";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

function Education() {
    const [isLOpen, setIsLOpen] = useState(false);
    const [isSOpen, setIsSOpen] = useState(false);
    return (
        <div className={styles.education}>
            <div className={styles.educationHead}>
                <Largeh1>
                    TTTransforming Learning Experiences, Empowering Educators
                </Largeh1>
                <div className={styles.eduTextBody}>
                    <p>
                        In todays digital era, education institutions face
                        unique challenges in delivering quality learning
                        experiences and supporting student success. At
                        CnergyPro, we offer innovative education solutions
                        designed to transform learning environments, empower
                        educators, and enhance student outcomes
                    </p>
                </div>
            </div>

            <div className={styles.eduBody}>
                <div className={styles.offerings}>
                    <h1>Our offerings</h1>
                    <div
                        className={styles.hide}
                        onClick={() => setIsLOpen((prev) => !prev)}
                    >
                        <div className={styles.arrowBox}>
                            <h2 className={isLOpen ? styles.open : ""}>
                                Learning Management Systems (LMS)
                            </h2>
                            {isLOpen ? (
                                <MdKeyboardArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            )}
                        </div>
                        {isLOpen && (
                            <p>
                                Enhance teaching and learning experiences with
                                our customizable learning management systems.
                            </p>
                        )}
                    </div>
                    <div
                        className={styles.hide}
                        onClick={() => setIsSOpen((prev) => !prev)}
                    >
                        <div className={styles.arrowBox}>
                            <h2 className={isSOpen ? styles.open : ""}>
                                Student Information Systems (SIS)
                            </h2>
                            {isSOpen ? (
                                <MdKeyboardArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            )}
                        </div>
                        {isSOpen && (
                            <p>
                                Streamline administrative tasks and improve data
                                management with our student information systems.
                            </p>
                        )}
                    </div>
                </div>
                <div className={styles.right}>
                    Ready to transform your educational institution with
                    cutting-edge technology solutions? Contact us today to learn
                    more about our education solutions and discover how we can
                    help you achieve your academic goals.
                    <div className={styles.link}>
                        <Link to="/hubspot-contact" className="cta mt-12">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
