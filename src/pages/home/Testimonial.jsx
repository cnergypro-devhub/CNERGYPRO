import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import "swiper/css"

// import required modules
// import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';
import ContactForm from './ContactForm';

// SwiperCore.use([Autoplay]);
// SwiperCore.use([Navigation, Pagination]);
export default function App() {
    return (
        <>
            <section>
                <div className="main">
                    <div className="head">
                        Stories of Reimagination with CnergyPro
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={() => console.log('slide change')}
                        autoplay={{ delay: 3000 }}
                        // navigation={true}
                        className="mySwiper"
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 10,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide className="swiper-slide">
                            <div
                                style={{
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                }}
                            >
                                <div className="mb-8 mt-8  flex justify-center gap-5 text-7xl text-blue-900">
                                    <FaQuoteLeft />
                                    <FaQuoteRight />
                                </div>

                                <p>
                                    The CynergyPro team is truly committed to
                                    our success. They provided exceptional
                                    support throughout our partnership.
                                </p>
                                <h6 className="review-by mt-5 italic">
                                    - Victor Chukwuma.
                                </h6>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div
                                style={{
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                }}
                            >
                                <div className="mb-8 mt-8  flex justify-center gap-5 text-7xl text-blue-900">
                                    <FaQuoteLeft />
                                    <FaQuoteRight />
                                </div>
                                <p>
                                    The CynergyPro team is truly committed to
                                    our success. They provided exceptional
                                    support throughout our partnership.
                                </p>
                                <h6 className="review-by mt-5 italic">
                                    - Victor Chukwuma.
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div
                                style={{
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                }}
                            >
                                <div className="mb-8 mt-8  flex justify-center gap-5 text-7xl text-blue-900">
                                    <FaQuoteLeft />
                                    <FaQuoteRight />
                                </div>
                                <p>
                                    The CynergyPro team is truly committed to
                                    our success. They provided exceptional
                                    support throughout our partnership.
                                </p>
                                <h6 className="review-by mt-5 italic">
                                    - Victor Chukwuma.
                                </h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <ContactForm />
        </>
    );
}
