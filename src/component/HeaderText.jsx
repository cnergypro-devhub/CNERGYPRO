import styles from './HeaderText.module.css';

function HeaderText({ children }) {
    return <h1 className={styles.heading}>{children}</h1>;
}

export default HeaderText;
