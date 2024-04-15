import { useEffect, useState } from 'react';
import styles from './NewsLetter.module.css';

const NewsletterForm = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        if (!scriptLoaded) {
            // Load the HubSpot form when the component mounts
            const script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = '//js.hsforms.net/forms/embed/v2.js';

            script.onload = () => {
                // Create the HubSpot form
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '40099469',
                    formId: '4791ddee-4fd4-4eef-a33e-3cbc8158a6f6',
                    target: '#newsletter-form-container',
                });
                setScriptLoaded(true);
            };

            // Append the script to the document body
            document.body.appendChild(script);

            // Cleanup function to remove the script when the component unmounts
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [scriptLoaded]);

    return (
        <div id="newsletter-form-container" className={styles.newsletter}>
            {/* The HubSpot form will be dynamically inserted here */}
        </div>
    );
};

export default NewsletterForm;
