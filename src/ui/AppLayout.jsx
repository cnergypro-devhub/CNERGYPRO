import Footer from '../pages/home/Footer';
import PageNav from './PageNav';
import { Outlet } from 'react-router-dom';

// Layout route access to all pages
function AppLayout() {
    return (
        <div>
            <PageNav />

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
