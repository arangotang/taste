import { Button, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Navigation, Pagination } from 'swiper';
import { nanoid } from 'nanoid';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import { API_URL } from '../../config';

const RecipeGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => {
        setGalleryItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const width = useWindowDimensions();

  const slidesPerWidth =
    Math.floor(width / 400) === 0 ? 1 : Math.floor(width / 400);

  const galleryEls = galleryItems.map(
    (item: { image: string; title: string; id: string }) => (
      <SwiperSlide key={nanoid()}>
        <RecipeCard url={item.image} recipeName={item.title} id={item.id} />
      </SwiperSlide>
    )
  );

  return (
    <Flex m="5rem 1rem 8rem 1rem" userSelect="none">
      <Swiper
        slidesPerView={slidesPerWidth}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {galleryEls}
      </Swiper>
    </Flex>
  );
};

export default RecipeGallery;
