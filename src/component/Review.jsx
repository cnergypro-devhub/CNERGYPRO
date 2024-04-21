import { Link } from 'react-router-dom';
import styles from './Review.module.css';
import Solution from '../pages/home/Solution';

function Review() {
    return (
        <>
            <div className={styles.review}>
                <div className={styles.numbersTags}>
                    <div className={styles.stat}>
                        <h1>20+</h1> <br />
                        <p>Project Completed</p>
                    </div>
                    <div className={styles.stat}>
                        <h1>97%</h1> <br />
                        <p>Costumer Satisfactory Rate</p>
                    </div>
                    <div className={styles.stat}>
                        <h1>13+</h1> <br />
                        <p>Partnership</p>
                    </div>
                </div>
                <div className={styles.link}>
                    <Link to="/hubspot-talk" className="cta">
                        Lets Connect
                    </Link>
                </div>
            </div>
            <Solution />
        </>
    );
}

export default Review;
