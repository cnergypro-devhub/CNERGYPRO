import styles from "./Partner.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SlideImage1 from "../assets/aws.webp";
import SlideImage2 from "../assets/goggle logo.png";
import SlideImage3 from "../assets/microsoft.webp";
import SlideImage4 from "../assets/wix.webp";
import SlideImage5 from "../assets/splunk.webp";
import HeaderText from "./HeaderText";

function Partner() {
    return (
        <>
            <div className={styles.partner}>
                <div className={styles.partnerText}>
                    <HeaderText>Our Product Partners</HeaderText>

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
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.swiper}
                >
                    <div className="slidepadding">
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
        </>
    );
}

export default Partner;
