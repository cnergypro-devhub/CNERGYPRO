import { Link } from "react-router-dom";
import image from "../../assets/aboutus.webp";
import Card from "../../assets/card 1.webp";
import CoreValues from "../home/CoreValues";
import styles from "./About.module.css";

function About() {
    return (
        <>
            <main
                className={styles.aboutPage}
                style={{
                    backgroundImage: `linear-gradient(
                    to right,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 100%
        ), url('${image}')`,
                }}
            >
                <section className={styles.section}>
                    <div>
                        <h1>About our company</h1>

                        <h2>
                            Enabling Businesses to Flourish in the Era of
                            Digital Advancement
                        </h2>
                    </div>
                </section>

                <div className={styles.heroCard}>
                    <h1>Empowering Digital Business Success</h1>
                    <h2>
                        At CnergyPro, were dedicated to delivering innovative IT
                        solutions that help businesses thrive in the digital
                        age. With a deep understanding of evolving technologies
                        and a commitment to client success, we provide
                        cutting-edge solutions tailored to meet the unique needs
                        of every organization.
                    </h2>
                </div>
            </main>

            <div className={styles.card}>
                <h1>Why Chose us?</h1>
                <h2></h2>
                <p>
                    <span>Expertise:</span> Our team of passionate professionals
                    brings years of experience and expertise to every project,
                    ensuring unparalleled quality and results.
                </p>
                <p>
                    <span>Client-Centric Approach:</span> We prioritize the
                    needs and goals of our clients above all else, working
                    closely with them to develop customized solutions that drive
                    success.
                </p>
                <p>
                    <span>Innovation:</span> We stay at the forefront of
                    technological advancements and industry trends, constantly
                    exploring new ways to innovate and elevate our services.
                </p>
            </div>

            <div className={styles.darkBg}>
                <div className={styles.left}>
                    <h1>Ready to Experience the CnergyPro Difference?</h1>
                    <p>
                        Whether you are looking to streamline operations,
                        enhance cybersecurity, or drive digital transformation,
                        CnergyPro is here to help.
                    </p>
                    <div className={styles.link}>
                        <Link to="/hubspot-talk" className="cta">
                            Lets Connect
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="" alt="" />
                </div>
            </div>

            {/* <CoreValues /> */}
        </>
    );
}

export default About;
