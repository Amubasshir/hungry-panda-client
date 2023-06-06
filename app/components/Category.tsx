'use client';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '../data/categoryImages';
import CategorySliderItem from './CategorySliderItem';
import SectionTitle from './SectionTitle';

const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle subTitle="categories" title="Browse our all categories" />

      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          speed={750}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
