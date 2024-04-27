import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function PageNav() {
    const [activeLink, setActiveLink] = useState(null);
    const [isOpen, SetIsOpen] = useState(false);
    const toggleNavBar = () => {
        SetIsOpen((isOpen) => !isOpen);
    };

    const handleHover = (link) => {
        setActiveLink(link);
    };
    const handleLeave = () => {
        setActiveLink(null);
    };
    return (
        <nav className={styles.mainNav}>
            <ul className={` ${styles.nav} `}>
                <div>
                    <Logo onClick={toggleNavBar} />
                </div>
                <li className={styles.lists}>
                    <div
                        className={`${isOpen ? styles.showNav : styles.hideNav} ${styles.pageLinks}`}
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "activeNav" : `${styles.textLink}`
                            }
                            to="/"
                            onClick={toggleNavBar}
                        >
                            Home
                        </NavLink>
                        <div
                            className={styles.serviceLink}
                            onMouseEnter={() => handleHover("Our Company")}
                            onMouseLeave={handleLeave}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    (isActive &&
                                        activeLink === "Our Company") ||
                                    (!isActive && !activeLink)
                                        ? "activeNav"
                                        : `${styles.textLink}`
                                }
                                to="#"
                                onClick={toggleNavBar}
                            >
                                <div className={styles.linkArrow}>
                                    <div>Our Company</div>
                                    <div>
                                        <MdKeyboardArrowDown />
                                    </div>
                                </div>
                            </NavLink>
                            {activeLink === "Our Company" && (
                                <div className={styles.dropdown}>
                                    <ul>
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/mission">
                                                Mission & Vision
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/team">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/process">
                                                Our Process
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div
                            className={styles.serviceLink}
                            onMouseEnter={() => handleHover("Service")}
                            onMouseLeave={handleLeave}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    (isActive &&
                                        activeLink === "Our Service") ||
                                    (!isActive && !activeLink)
                                        ? "activeNav"
                                        : `${styles.textLink}`
                                }
                                to="#"
                                onClick={toggleNavBar}
                            >
                                <div className={styles.linkArrow}>
                                    <div>Our Services</div>
                                    <div>
                                        <MdKeyboardArrowDown />
                                    </div>
                                </div>
                            </NavLink>
                            {activeLink === "Service" && (
                                <div className={styles.dropdown}>
                                    <ul>
                                        <li>
                                            <Link to="/government">
                                                Government Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/technology">
                                                Technology
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/logistics">
                                                Logistics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/education">
                                                Education
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/procurement">
                                                Procurement
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div
                            className={styles.serviceLink}
                            onMouseEnter={() => handleHover("Resources")}
                            onMouseLeave={handleLeave}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    (isActive && activeLink === "Resources") ||
                                    (!isActive && !activeLink)
                                        ? "activeNav"
                                        : `${styles.textLink}`
                                }
                                to="#"
                                onClick={toggleNavBar}
                            >
                                <div className={styles.linkArrow}>
                                    <div>Resources</div>
                                    <div>
                                        <MdKeyboardArrowDown />
                                    </div>
                                </div>
                            </NavLink>
                            {activeLink === "Resources" && (
                                <div className={styles.dropdown}>
                                    <ul>
                                        <li>
                                            <Link to="/blogs">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link to="/news">News</Link>
                                        </li>
                                        <li>
                                            <Link to="/whitepaper">
                                                WhitePaper
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <NavLink
                            className={({ isActive }) =>
                                (isActive && activeLink === "store") ||
                                (!isActive && !activeLink)
                                    ? "activeNav"
                                    : `${styles.textLink}`
                            }
                            to="#"
                            onClick={toggleNavBar}
                        >
                            Store
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "activeNav" : `${styles.textLink}`
                            }
                            to="/contact"
                            onClick={toggleNavBar}
                        >
                            Contact
                        </NavLink>

                        <Link to="/hubspot-form" className="cta">
                            Get in Touch
                        </Link>
                    </div>

                    <button onClick={toggleNavBar} className={styles.btn}>
                        {isOpen ? <RxCross2 /> : <FaBars />}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
