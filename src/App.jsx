import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import AppLayout from "./ui/AppLayout";
import HubSpotForm from "./pages/home/HubSpotForm";
// import ContactForm from './pages/home/ContactForm';
import ContactUs from "./pages/home/ContactUs";

import LetTalk from "./ui/LetTalk";
import Error from "./ui/Error";
import Government from "./component/Government";
import Logistics from "./component/Logistics";
import Education from "./component/Education";
import Procurement from "./component/Procurement";
import Mission from "./component/Mission";
import OurTeam from "./pages/about/OurTeam";
import OurProcess from "./pages/about/OurProcess";
import Blogs from "./pages/resourses/Blogs";
import News from "./pages/resourses/News";
import Whitepaper from "./pages/resourses/Whitepaper";
import Costumer from "./pages/services/Customer";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";

const router = createBrowserRouter([
    {
        // Layout route that is displayed in all the pages
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/mission",
                element: <Mission />,
            },
            {
                path: "/team",
                element: <OurTeam />,
            },
            {
                path: "/process",
                element: <OurProcess />,
            },

            {
                path: "/costumer",
                element: <Costumer />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/whitepaper",
                element: <Whitepaper />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
            },

            {
                path: "/hubspot-form",
                element: <HubSpotForm />,
            },
            {
                path: "/hubspot-talk",
                element: <LetTalk />,
            },
            {
                path: "/hubspot-contact",
                element: <ContactUs />,
                errorElement: <Error />,
            },
            {
                path: "/government",
                element: <Government />,
            },
            {
                path: "/logistics",
                element: <Logistics />,
            },
            {
                path: "/technology",
                element: <SoftwareDevelopment />,
            },
            {
                path: "/education",
                element: <Education />,
            },
            {
                path: "/procurement",
                element: <Procurement />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
