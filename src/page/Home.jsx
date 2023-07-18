import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Products from '../components/Products';

export default function Home(){
    return(
        <div>
            <section>
                <Swiper
                    autoplay={{
                        delay: 2500
                    }}
                    modules={[Autoplay]}
                    loop={true}
                >
                    <SwiperSlide><img src="/images/slide1.jpg" alt="지위픽" /> </SwiperSlide>
                    <SwiperSlide><img src="/images/slide2.jpg" alt="레이엔이본" /></SwiperSlide>
                    <SwiperSlide><img src="/images/slide3.jpg" alt="스텔라엔츄이스" /></SwiperSlide>
                    <SwiperSlide><img src="/images/slide4.jpg" alt="테라카니스" /></SwiperSlide>
                </Swiper>
            </section>

            <section>
                <Products />
            </section>
        </div>
    )
}