import styles from "./OurTeam.module.css";
import ceo from "../../assets/ceo.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import team from "../../assets/team.jpg";
import { Link } from "react-router-dom";

function OurTeam() {
    return (
        <div className={styles.team}>
            <img src={team} alt="" />
            <div className={styles.info}>
                <h1>Meet the CnergyPro Team</h1>
                <p>Passionate Professionals Dedicated to Your Success</p>
                <div>
                    <p>
                        Get to know the faces behind CnergyPro! Our diverse team
                        of talented individuals is united by a shared passion
                        for excellence and a commitment to client satisfaction.
                        With years of experience and expertise in the industry,
                        our team brings a wealth of knowledge and innovation to
                        every project.
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.teamCard}>
                    <div className={styles.mainCard}>
                        <img src={ceo} alt="ceo" />

                        <div className={styles.bio}>
                            <h1>bob cnergypro</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Unde temporibus eos vitae,
                                molestias dolorem esse.
                            </p>
                            <div className={styles.icon}>
                                <FaXTwitter />
                                <FaLinkedin />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainCard}>
                        <img src={ceo} alt="ceo" />

                        <div className={styles.bio}>
                            <h1>bob cnergypro</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Unde temporibus eos vitae,
                                molestias dolorem esse.
                            </p>
                            <div className={styles.icon}>
                                <FaXTwitter />
                                <FaLinkedin />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.linkText}>
                <p>
                    Take a closer look at the talented individuals who make up
                    the CnergyPro team. From seasoned IT professionals to
                    creative designers and strategic consultants, each member
                    brings a unique set of skills and perspectives to the table.
                </p>
                <h1>Want to speak to one of them?</h1>
                <div className={styles.link}>
                    <Link to="/hubspot-talk" className="cta">
                        Book a time
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
