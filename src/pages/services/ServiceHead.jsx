import { Link } from 'react-router-dom';
import image from '../../assets/procurement.jpg';
import styles from './ServiceHead.module.css';

function ServiceHead() {
    return (
        <>
            <main
                className={styles.servicePage}
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
                        <h1>Explore our Services</h1>

                        <h2>
                            We are pioneering the creation of a future-ready
                            world through innovative IT solutions.
                        </h2>
                    </div>
                </section>
            </main>

            <div className={styles.serviceDes}>
                <h1>
                    Pioneering IT Solutions for the Digital Age: Building a
                    Future-Ready World.
                </h1>
                <p>
                    Discover how CnergyPro Global Solutions is leading the
                    charge to build a world that is prepared for the future by
                    implementing cutting-edge IT solutions.
                </p>
                <div className="my-6 flex justify-center">
                    <Link to="/hubspot-form" className="cta">
                        Get in Touch
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Government Service</h1>
                        <p>
                            We offer a wide range of IT solutions tailored to
                            meet the unique needs of government agencies,
                            including software development, network
                            infrastructure, cybersecurity, and cloud computing.
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Technology</h1>
                        <p>
                            From software development and mobile app creation to
                            cloud computing and cybersecurity, we provide a
                            comprehensive suite of IT solutions that are
                            designed to meet the needs of modern businesses.
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Logistics</h1>
                        <p>
                            We offer state of the art logistic solutions at an
                            affordable price for premium services. We specialize
                            in providing logistics services to help businesses
                            manage their supply chains more efficiently.
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Education</h1>
                        <p>
                            We offer a wide range of IT solutions, including
                            learning management systems, student information
                            systems, and e-learning platforms, that are designed
                            to enhance the learning experience and improve
                            outcomes.
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Procurement</h1>
                        <p>
                            We offer a comprehensive suite of IT solutions that
                            are designed to streamline procurement operations
                            and reduce costs using spend analytics and contract
                            management solutions
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={styles.serviceCards}>
                    <img src={image} alt="image" />
                    <div className={styles.cardDescription}>
                        <h1>Customer Support</h1>
                        <p>
                            Whether you’re looking to improve your customer
                            service operations or enhance your customer
                            engagement strategies, our team of experts is here
                            to help.
                        </p>
                    </div>
                    <div className="w-90 mx-auto flex justify-center">
                        <Link to="" className="cta">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <Link to="/hubspot-form" className="cta">
                    Get in Touch
                </Link>
            </div>
        </>
    );
}

export default ServiceHead;
