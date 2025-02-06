import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Pagination, Navigation } from 'swiper/modules';
import { PageSection } from "@/components/layout/PageSection";

export const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PageSection>
            Slide 1
          </PageSection>
        </SwiperSlide>
        <SwiperSlide>
        <PageSection>
            Slide 2
          </PageSection>
        </SwiperSlide>

      </Swiper>
    </>
  );
};
