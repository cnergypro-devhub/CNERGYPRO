import { Link } from "react-router-dom";
import styles from "./Customer.module.css";
import { FaHandsHelping } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FcSelfServiceKiosk } from "react-icons/fc";

function Customer() {
    return (
        <>
            <div className={styles.costumer}>
                <h1>
                    Delivering Exceptional Service, <br /> Building Customer
                    Loyalty
                </h1>
                <div>
                    <Link to="/hubspot-contact" className="cta mt-12">
                        Let Talk!
                    </Link>
                </div>
            </div>
            <div className={styles.customerBody}>
                <div className={styles.customerLeft}>
                    <div>
                        <p>
                            Exceptional customer support is key to building
                            strong relationships and fostering customer loyalty.
                            At CnergyPro, we offer comprehensive customer
                            support solutions designed to streamline operations,
                            improve service delivery, and enhance the overall
                            customer experience.
                        </p>
                    </div>
                    <div>
                        <p>
                            Ready to elevate your customer support operations
                            and deliver exceptional service? Contact us today to
                            learn more about our customer support solutions and
                            discover how we can help you build lasting customer
                            relationships.
                        </p>
                        <div className={styles.link}>
                            <Link to="/hubspot-talk" className="cta mt-9">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.customerRight}>
                    <h1>Our Offerings</h1>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <FaHandsHelping />
                        </div>
                        <p>
                            <span>Help desk Solutions:</span> Streamline
                            customer inquiries and support requests with our
                            customizable helpdesk solutions.
                        </p>
                    </div>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <RiCustomerService2Fill />
                        </div>
                        <p>
                            <span>Customer Relationship Management (CRM):</span>{" "}
                            Centralize customer information, track interactions,
                            and enhance engagement with our CRM systems.
                        </p>
                    </div>
                    <div className={styles.leftInner}>
                        <div className={styles.icons}>
                            <FcSelfServiceKiosk />
                        </div>
                        <p>
                            <span>Self-Service Portals:</span> Empower customers
                            with self-service options and resources to find
                            answers and resolve issues independently.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customer;
