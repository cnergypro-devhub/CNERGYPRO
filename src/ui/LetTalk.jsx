import { useEffect } from 'react';
import styles from './LetTalk.module.css';

function LetTalk() {
    useEffect(() => {
        const script = document.createElement('script');
        script.textContent = `
            hbspt.forms.create({
                region: "na1",
                portalId: "40099469",
                formId: "b6f28999-7d38-45a0-a9c1-4f88e10e7028",
                target: "#let-talk-form-container"
            });
        `;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []); // empty dependency array

    return (
        <div id="let-talk-form-container" className={styles.talk}>
            {/* This div will contain the form */}
        </div>
    );
}

export default LetTalk;
