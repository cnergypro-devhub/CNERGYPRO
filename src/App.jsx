import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import AppLayout from './ui/AppLayout';
import HubSpotForm from './pages/home/HubSpotForm';
// import ContactForm from './pages/home/ContactForm';
import ContactUs from './pages/home/ContactUs';

import LetTalk from './ui/LetTalk';

const router = createBrowserRouter([
    {
        // Layout route that is displayed in all the pages
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/service',
                element: <Services />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },

            {
                path: '/hubspot-form',
                element: <HubSpotForm />,
            },
            {
                path: '/hubspot-talk',
                element: <LetTalk />,
            },
            {
                path: '/hubspot-contact',
                element: <ContactUs />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
