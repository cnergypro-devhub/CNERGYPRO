import styles from './Solution.module.css';
import Magnify from '../../assets/magnify.png';
import Padlock from '../../assets/padlock.png';
import Gear from '../../assets/gear.png';
import Cart from '../../assets/cart.png';
import Software from '../../assets/enterprise software.jpg';
import Cyber from '../../assets/c1.jpg';
import Feild from '../../assets/feild service.jpg';
import Procure from '../../assets/procurement.jpg';
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
        </div>
    );
    // return (
    //     <>
    //         <section className={styles.solution}>
    //             <div className={styles.solution}>
    //                 <div className={styles.solutionTitle}>
    //                     <h1>See what CnergyPro can do for you</h1>
    //                     <p>
    //                         We understand what you are going through, and that
    //                         is why we are keen on helping you reimagine your
    //                         business through our diverse range of IT solutions
    //                         tailored to meet your needs.
    //                     </p>
    //                 </div>
    //                 <div className={styles.imageTextBlock}>
    //                     <div className={styles.segment}>
    //                         <div className={styles.img}>
    //                             <img src={Software} alt="software" />
    //                         </div>
    //                         <div className={styles.text}>
    //                             <h1>Enterprise Software Assessment</h1>
    //                             <p>
    //                                 We evaluate your existing network
    //                                 infrastructure, understand your business
    //                                 requirements, and devise a strategic plan to
    //                                 optimize network performance and
    //                                 scalability.
    //                             </p>
    //                             <div className={styles.link}>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Learn More
    //                                 </Link>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Request Service
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className={styles.segment}>
    //                         <div className={styles.text}>
    //                             <h1>Cybersecurity</h1>
    //                             <p>
    //                                 Our Cybersecurity solutions will safeguard
    //                                 your business’ sensitive data, prevent
    //                                 breaches, ensure regulatory compliance,
    //                                 maintain your business’ continuity, and
    //                                 preserve customer trust.
    //                             </p>
    //                             <div className={styles.link}>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Learn More
    //                                 </Link>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Request Service
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                         <div className={styles.img}>
    //                             <img src={Cyber} alt="software" />
    //                         </div>
    //                     </div>
    //                     <div className={styles.segment}>
    //                         <div className={styles.img}>
    //                             <img src={Feild} alt="software" />
    //                         </div>
    //                         <div className={styles.text}>
    //                             <h1>
    //                                 Data Centers & Field Service Management{' '}
    //                             </h1>
    //                             <p>
    //                                 We provide this solution to boost
    //                                 operational efficiency, guarantee
    //                                 reliability, and facilitate scalability,
    //                                 empowering your business to reach its
    //                                 objectives and providing outstanding
    //                                 customer service.
    //                             </p>
    //                             <div className={styles.link}>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Learn More
    //                                 </Link>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Request Service
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className={styles.segment}>
    //                         <div className={styles.text}>
    //                             <h1>Procurement</h1>
    //                             <p>
    //                                 Our procurement solutions will optimize your
    //                                 business processes, enhance visibility, and
    //                                 prioritize compliance and cost savings while
    //                                 providing actionable insights for informed
    //                                 decision-making.
    //                             </p>
    //                             <div className={styles.link}>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Learn More
    //                                 </Link>
    //                                 <Link to="" type="primary" className="cta">
    //                                     Request Service
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                         <div className={styles.img}>
    //                             <img src={Procure} alt="software" />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="flex justify-center">
    //                 <Link
    //                     to=""
    //                     type="primary"
    //                     className="cta align-middle text-slate-950"
    //                 >
    //                     View All Services
    //                 </Link>
    //             </div>
    //         </section>
    //     </>
    // );
}

export default Solution;
