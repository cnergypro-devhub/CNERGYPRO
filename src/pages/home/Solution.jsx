import styles from './Solution.module.css';
import Magnify from '../../assets/magnify.png';
import Padlock from '../../assets/padlock.png';
import Gear from '../../assets/gear.png';
import Cart from '../../assets/cart.png';
import E_commerce from '../../assets/ecommerce.webp';
import { Link } from 'react-router-dom';

function Solution() {
    return (
        <div className={styles.solution}>
            <div className={styles.solutionTitle}>
                <h1>See what CnergyPro can do for you</h1>
                <p>
                    Were here to support your business with our tailored IT
                    solutions, designed to meet your needs.
                </p>
            </div>
            <div className={styles.iconsImage}>
                <div>
                    <img src={Magnify} alt="magnifying glass" />
                    <h2 className="my-6 text-center">
                        Enterprise Software Assessment
                    </h2>
                </div>
                <div>
                    <img src={Padlock} alt="magnifying glass" />
                    <h2 className="my-6 text-center">Cyber Security</h2>
                </div>
                <div>
                    <img src={Gear} alt="magnifying glass" />
                    <h2 className="my-6 text-center">
                        Data center & Field Service Segment
                    </h2>
                </div>
                <div>
                    <img src={Cart} alt="magnifying glass" />
                    <h2 className="my-6 text-center">Procurement</h2>
                </div>
            </div>
            <div className={styles.eCommerce}>
                <img src={E_commerce} alt="e-commerce image" />
                <div className={styles.eCommerceLink}>
                    <Link to="" className="cta">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Solution;
