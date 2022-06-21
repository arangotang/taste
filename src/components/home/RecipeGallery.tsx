import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Navigation, Pagination } from 'swiper';
import { nanoid } from 'nanoid';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const RecipeGallery = () => {
  const width = useWindowDimensions();
  const demoImg = (
    <Image
      src="https://images.unsplash.com/photo-1515968270336-3e94abcdac1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      w="300px"
      h="360px"
      objectFit="cover"
      borderRadius="8px"
      transition="0.3s"
      _hover={{ cursor: 'pointer' }}
    />
  );

  const slidesPerWidth =
    Math.floor(width / 350) === 0 ? 1 : Math.floor(width / 350);

  return (
    <Flex m="1rem 0">
      <Swiper
        slidesPerView={slidesPerWidth}
        slidesPerGroup={slidesPerWidth}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
        <SwiperSlide key={nanoid()}>{demoImg}</SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default RecipeGallery;
