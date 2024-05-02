import styles from "./Solution.module.css";
import Magnify from "../assets/magnify.webp";
import Padlock from "../assets/padlock.webp";
import Gear from "../assets/gear.webp";
import Cart from "../assets/cart.webp";
import laptop from "../assets/Group 74.png";
import { Link } from "react-router-dom";
import HeaderText from "./HeaderText";
import Largeh1 from "./Largeh1";

function Solution() {
    return (
        <>
            <div className={styles.solution}>
                <div className={styles.solutionTitle}>
                    <HeaderText>See what CnergyPro can do for you</HeaderText>

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
            </div>
            <div className={styles.eCommerce}>
                <div>
                    <div>
                        <Largeh1>Explore Our Online Store</Largeh1>
                        Browse our curated selection of products and services
                        tailored to meet your business needs. From cutting-edge
                        technology solutions to essential office supplies, weve
                        got everything you need to succeed. Start exploring now!
                    </div>
                    <div className={styles.eCommerceLink}>
                        <Link to="" className="cta">
                            Shop Now!
                        </Link>
                    </div>
                </div>
                <img src={laptop} alt="e-commerce laptop" />
            </div>
        </>
    );
}

export default Solution;
