import { Link } from 'react-router-dom';
import logo from '../assets/Logo-pro.png';
import styles from './Logo.module.css';

function Logo({ onClick }) {
    return (
        <Link to="/" onClick={onClick}>
            <img src={logo} alt="pro" className={styles.logo} />
        </Link>
    );
}

export default Logo;
