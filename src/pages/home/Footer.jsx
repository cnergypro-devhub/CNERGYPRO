import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import Logo from '../../assets/Logo-pro.png';
import styles from './Footer.module.css';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
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
                            <FaFacebookF />
                        </Link>{' '}
                        <Link className="transition-all hover:text-red-300">
                            <FaLinkedin />
                        </Link>
                        <Link className="transition-all hover:text-red-300">
                            <FaInstagram />
                        </Link>
                    </div>
                    {/* <div className="flex items-center gap-3">
                        <MdEmail />
                        <p>Info@cnergypro.com</p>
                    </div> */}
                </div>
                <div className="flex flex-col gap-8">
                    <div className="first-foot">
                        <h1>Subscribe to Our Daily News</h1>
                        <p>Here we post news and latest on our blog.</p>
                    </div>
                    <form
                        className="footer"
                        id="footer-email"
                        name="submit-to-google-sheet"
                    >
                        <input
                            className="w-full text-slate-900"
                            type="email"
                            name="Email"
                            placeholder="Your Email Id"
                            required
                        />
                        <button
                            className=" mx-auto my-0 mt-2 flex bg-red-500 px-4 py-2 text-xl transition-all hover:bg-red-600"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
