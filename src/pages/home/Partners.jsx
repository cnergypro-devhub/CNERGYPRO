import styles from './Partners.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SlideImage1 from '../../assets/aws.png';
import SlideImage2 from '../../assets/goggle logo.png';
import SlideImage3 from '../../assets/microsoft.png';
import SlideImage4 from '../../assets/wix.jpg';
import SlideImage5 from '../../assets/splunk.png';
import Review from './Review';
import Testimonial from '../home/Testimonial';

function Partners() {
    return (
        <>
            <div className={styles.partner}>
                <div className={styles.partnerText}>
                    <h1>Our Product Partners</h1>
                    <p>
                        Discover how we collaborate with our trusted partners to
                        deliver top-tier IT solutions customized for your
                        business needs
                    </p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.swiper}
                >
                    <div>
                        <SwiperSlide>
                            <img src={SlideImage1} alt="pro" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SlideImage2} alt="pro" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SlideImage3} alt="pro" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SlideImage4} alt="pro" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={SlideImage5} alt="pro" />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <Review />
            <Testimonial />
        </>
    );
}

export default Partners;
