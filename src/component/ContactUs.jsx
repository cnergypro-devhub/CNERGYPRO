import { useEffect, useState } from 'react';
import styles from './ContactUs.module.css';

const hbspt = window.hbspt || {};

function ContactUs() {
    const [formCreated, setFormCreated] = useState(false);

    useEffect(() => {
        if (!formCreated) {
            // Create the HubSpot form when the component mounts
            hbspt.forms.create({
                region: 'na1',
                portalId: '40099469',
                formId: '2bc956ac-df9d-41f8-be14-cefbe45491fa',
                target: '#contact-us-form-container',
            });
            setFormCreated(true);
        }
    }, [formCreated]);

    return (
        <div id="contact-us-form-container" className={styles.contact}></div>
    );
}

export default ContactUs;

// import { useState, useEffect } from 'react';
// import Spinner from '../../ui/Spinner';

// const hbspt = window.hbspt || {};

// // ContactUs component
// function ContactUs() {
//     const [showSpinner, setShowSpinner] = useState(true); // State to control loading spinner visibility
//     const [showForm, setShowForm] = useState(false); // State to control HubSpot form visibility

//     // Function to load the HubSpot form
//     const loadHubSpotForm = () => {
//         // Load the form dynamically
//         hbspt.forms.create({
//             region: 'na1',
//             portalId: '40099469',
//             formId: '2bc956ac-df9d-41f8-be14-cefbe45491fa',
//         });

//         // Update the state to show the form and hide the loading spinner
//         setShowForm(true);
//         setShowSpinner(false);
//     };

//     useEffect(() => {
//         // Load the HubSpot form when the component mounts
//         loadHubSpotForm();
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <p>Some content here...</p>

//             {/* Conditional rendering of the loading spinner */}
//             {showSpinner && <Spinner />}

//             {/* Conditional rendering of the HubSpot form based on state */}
//             {showForm && <div id="hubspot-form-container"></div>}
//         </div>
//     );
// }

// export default ContactUs;
