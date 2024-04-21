import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../assets/annie-spratt-dWYU3i-mqEo-unsplash.jpg';
import image2 from '../assets/cnergypro img1.jpg.jpg';
import image3 from '../assets/scott-graham-5fNmWej4tAA-unsplash.jpg';
import Largeh1 from './Largeh1';

function HomeHeader() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <main
            className={styles.homepage}
            style={{
                backgroundImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0) 100%
        ), url('${images[currentImageIndex]}')`,
            }}
        >
            <section className={styles.section}>
                <div>
                    <Largeh1>Reimagine your</Largeh1>
                    <Largeh1>buisness Potential </Largeh1>

                    <h2>
                        Boost your business with our innovative IT solutions for
                        unparalleled growth and efficiency.
                    </h2>
                    <div className={styles.ctaLinks}>
                        <Link to="" className="cta">
                            Explore CynergyPro
                        </Link>
                        <Link to="/hubspot-form" className="cta">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeHeader;
