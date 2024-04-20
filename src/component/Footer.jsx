import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import Logo from '../assets/Logo-pro.png';
import styles from './Footer.module.css';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import NewsletterForm from '../ui/NewsLetter';
function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.main}>
                <div className="flex flex-col items-center gap-8">
                    <h1 className="align-middle text-3xl">Contact Us</h1>
                    <div className="flex items-center gap-3">
                        <FaPhone />
                        <p>+1 (888) 998-6948</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail />
                        <p>Info@cnergypro.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="align-middle text-3xl">Follow Us</h1>
                    <div className="flex items-center gap-3 text-4xl">
                        <Link className="transition-all hover:text-red-300">
                            <FaXTwitter />
                        </Link>
                        <Link className="transition-all hover:text-red-300">
                            {/* <FaFacebookF /> */}
                        </Link>
                        <Link className="transition-all hover:text-red-300">
                            <FaLinkedin />
                        </Link>
                        <Link className="transition-all hover:text-red-300">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <NewsletterForm />;
                </div>
            </div>
        </footer>
    );
}

export default Footer;
