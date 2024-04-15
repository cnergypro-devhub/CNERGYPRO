import { useEffect } from 'react';

const hbspt = window.hbspt || {};

function HubSpotForm() {
    useEffect(() => {
        // Ensure the HubSpot form is created when this component mounts
        hbspt.forms.create({
            region: 'na1',
            portalId: '40099469',
            formId: 'b6f28999-7d38-45a0-a9c1-4f88e10e7028',
            target: '#hubspot-form-container', // Replace '#hubspot-form-container' with the ID of the container where you want to render the form
        });
    }, []);

    return (
        <div
            id="hubspot-form-container"
            className="  bg-red-50 px-9 py-9"
        ></div> // Ensure you have a container element with this ID where the form will be rendered
    );
}

export default HubSpotForm;
