'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';
import { Card } from '../../../types/home/home';

type CardProps = {
  posts: Card[]
}

export default ({posts}: CardProps) => {
  return (
    <div className="hidden lg:block">
    <Swiper
    spaceBetween={0}
      slidesPerView={4.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
  {posts.map((post,index)=>(
      <SwiperSlide>
    <Image
    src = {post.image}
    alt = {post.title}
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
  ))}
    </Swiper>
    </div>
  );
};