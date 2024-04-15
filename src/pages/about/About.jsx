import image from '../../assets/aboutus.jpg';
import Card from '../../assets/card 1.webp';
import styles from './About.module.css';

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
                        At our company, we comprise a dedicated team of
                        passionate professionals committed to providing
                        cutting-edge IT solutions that empower businesses to
                        succeed in todays digital era.
                    </h2>
                </div>
            </main>
            <div className={styles.card}>
                <div>
                    <img src={Card} alt="card" />
                </div>
                <div>
                    <h1>Our Mission</h1>
                    <p>
                        To understand each of our clients’ unique needs and
                        challenges and develop customised solutions that help
                        them achieve their goals. We are committed to putting
                        the customer first and delivering solutions that are
                        tailored to meet their specific needs.
                    </p>
                </div>
            </div>

            <div className={styles.threeD}>
                <div className={styles.threeDHead}>
                    <h1>Our 6-D Process</h1>
                    <p>
                        Our IT solutions are customised to your specific
                        business needs thanks to close cooperation and open
                        communication.
                    </p>
                </div>
                <div className={styles.dCards}>
                    <div className={styles.dCard}>
                        <h1>Discover</h1>
                        <p>
                            We start by discovering our client’s unique needs
                            and challenges. We work closely with our clients to
                            understand their business operations and goals, as
                            well as any pain points they are experiencing.
                        </p>
                    </div>
                    <div className={styles.dCard}>
                        <h1>Define</h1>
                        <p>
                            Once we have a clear understanding of our client’s
                            needs, we define the scope of the project and
                            develop a clear plan of action. We set specific
                            goals and objectives, as well as a timeline and
                            budget for the project.
                        </p>
                    </div>
                    <div className={styles.dCard}>
                        <h1>Design</h1>
                        <p>
                            We then move on to the design phase, where we create
                            a customized solution that meets our client’s unique
                            needs. We work closely with our clients to ensure
                            that the solution is both effective and
                            user-friendly.
                        </p>
                    </div>
                    <div className={styles.dCard}>
                        <h1>Develop</h1>
                        <p>
                            Once the solution is designed, we move on to the
                            development phase. Our team of experienced
                            professionals develops the solution using the latest
                            technology and best practices.
                        </p>
                    </div>
                    <div className={styles.dCard}>
                        <h1>Deploy</h1>
                        <p>
                            Once the solution is developed, we deploy it to our
                            client’s environment. We work closely with our
                            client to ensure a smooth transition and provide
                            training and support to ensure that the solution is
                            fully operational.
                        </p>
                    </div>
                    <div className={styles.dCard}>
                        <h1>Deliver</h1>
                        <p>
                            We deliver the solution to our client and continue
                            to provide ongoing support and maintenance. We work
                            closely with our clients to ensure that the solution
                            continues to meet their needs and helps them achieve
                            their goals.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
