import styles from "./Mission.module.css";
import image from "../assets/innovation.webp";
import Largeh1 from "./Largeh1";
import { Link } from "react-router-dom";

function Mission() {
    return (
        <>
            <main
                className={styles.missionPage}
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
                    <div className={styles.large}>
                        <Largeh1 type="red">
                            Empowering Businesses to Thrive in the Digital Age{" "}
                        </Largeh1>
                    </div>
                </section>
            </main>

            <div className={styles.missionVision}>
                <div className={styles.left}>
                    <h1>Mission Statement</h1>
                    <p>
                        At CnergyPro, our mission is to empower businesses to
                        thrive in the digital age by delivering innovative IT
                        solutions tailored to their unique needs. We believe
                        that technology has the power to transform organizations
                        and drive sustainable growth, and we are committed to
                        helping our clients achieve their goals and surpass
                        their expectations.
                    </p>
                </div>
                <div className={styles.right}>
                    <h1>Our Vision</h1>
                    <p>
                        At CnergyPro, we envision a future where businesses
                        harness the full potential of technology to drive
                        growth, innovation, and sustainability. We believe that
                        by leveraging cutting-edge IT solutions, organizations
                        can overcome challenges, seize opportunities, and
                        achieve their long-term objectives.
                    </p>
                </div>
                <div className={styles.right2}>
                    <h1>Commitment to Innovation</h1>
                    <p>
                        Our vision guides our commitment to innovation, as we
                        continuously explore new technologies and strategies to
                        help our clients stay ahead of the curve. We are
                        dedicated to pushing boundaries, challenging the status
                        quo, and driving positive change in the digital
                        landscape.
                    </p>
                </div>
            </div>
            <div className={styles.ourValues}>
                <h1>Our Values</h1>
                <p>
                    <span>Integrity:</span> We uphold the highest ethical
                    standards in all our dealings, fostering trust and
                    credibility with our clients and partners.
                </p>
                <p>
                    <span>Transparency:</span> We believe in open communication
                    and transparency, keeping our clients informed every step of
                    the way.
                </p>
                <p>
                    <span>Collaboration:</span> We foster a culture of
                    collaboration and teamwork, recognizing that the best
                    solutions emerge from diverse perspectives and experiences.
                </p>
                <p>
                    <span>Innovation:</span> We embrace innovation and
                    creativity, constantly seeking new ways to push boundaries
                    and exceed expectations.
                </p>
            </div>
            <div className={styles.partner}>
                <h1>Partner with Us to Shape the Future</h1>
                <p>
                    Ready to shape the future of your business with CnergyPro?
                    Contact us today to learn more about our innovative IT
                    solutions and discover how we can help you achieve your
                    goals in the digital age.
                </p>
                <div className={styles.link}>
                    <Link to="/hubspot-talk" className="cta">
                        Partner with Us
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Mission;
