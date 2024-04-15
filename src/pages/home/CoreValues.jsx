import styles from './CoreValues.module.css';
import Innovation from '../../assets/innovation.webp';
import Software from '../../assets/enterprise software.jpg';
import Costumer from '../../assets/costumer.webp';
import Star from '../../assets/star.jpg';
import Interity from '../../assets/intregrity.jpg';
import Realy from '../../assets/Reliability.jpg';
import Testimonial from './Testimonial';

function CoreValues() {
    return (
        <>
            <div className={styles.coreValue}>
                <div className={styles.valueTitle}>
                    <h1>Our Core Value</h1>
                    <p>
                        CnergyPro is guided by deeply rooted core values that
                        shape our culture, decision-making processes, and
                        interactions with stakeholders, ultimately shaping its
                        identity and impact in the industry.
                    </p>
                </div>
                <div className={styles.valueImageText}>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Innovation} alt="software image" />
                        <h1>Innovation</h1>
                        <p>
                            Encouraging and fostering creativity and
                            out-of-the-box thinking.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Costumer} alt="software image" />
                        <h1>Customer-Centric</h1>
                        <p>
                            Prioritizing customer needs and satisfaction in all
                            endeavors.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Star} alt="software image" />
                        <h1>Excellence</h1>
                        <p>
                            Striving for the highest standards of quality and
                            performance.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Interity} alt="software image" />
                        <h1>Integrity</h1>
                        <p>
                            Upholding honesty, transparency, and ethical conduct
                            in all interactions.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Realy} alt="software image" />
                        <h1>Reliability</h1>
                        <p>
                            Keeping promises and commitments, fostering trust
                            and reliability.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <img src={Software} alt="software image" />
                        <h1>Accountability</h1>
                        <p>
                            Taking responsibility for actions and duties, both
                            individually and as a team.
                        </p>
                    </div>
                </div>
            </div>
            <Testimonial />
        </>
    );
}

export default CoreValues;
