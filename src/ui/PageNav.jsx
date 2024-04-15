import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

import { Link, NavLink } from 'react-router-dom';

import { useState } from 'react';
import Logo from './Logo';
import styles from './PageNav.module.css';

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
                                isActive ? 'activeNav' : `${styles.textLink}`
                            }
                            to="/"
                            onClick={toggleNavBar}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeNav' : `${styles.textLink}`
                            }
                            to="/about"
                            onClick={toggleNavBar}
                        >
                            About
                        </NavLink>
                        <div
                            className={styles.serviceLink}
                            onMouseEnter={() => handleHover('Service')}
                            onMouseLeave={handleLeave}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'activeNav'
                                        : `${styles.textLink}`
                                }
                                to="/service"
                                onClick={toggleNavBar}
                            >
                                Service
                            </NavLink>
                            {activeLink === 'Service' && (
                                <div className={styles.dropdown}>
                                    <ul>
                                        <li>
                                            <Link>Government Services</Link>
                                        </li>
                                        <li>
                                            <Link>Technology</Link>
                                        </li>
                                        <li>
                                            <Link>Logistics</Link>
                                        </li>
                                        <li>
                                            <Link>Education</Link>
                                        </li>
                                        <li>
                                            <Link>Procurement</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeNav' : `${styles.textLink}`
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
