// import Partner from '../../component/Partner';
// // import Partners from '../../component/Partners';

import HomeHeader from "../../component/HomeHeader";
import Review from "../../component/Review";
import Partner from "../../component/Partner";
import Testimonial from "../../component/Testimonial";

// import NewsletterForm from '../../ui/NewsLetter';

function Home() {
    return (
        <>
            <HomeHeader />

            <Partner />
            <Review />
            <Testimonial />
        </>
    );
}

export default Home;
