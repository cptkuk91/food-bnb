'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { IoStar, IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from 'react-icons/io5';
import { BiHeart } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';

import styles from './Card.module.scss';
import { DUMMY_POSTS } from '@/assets/dummy';

const cx = classNames.bind(styles);

function NextArrow(props: any) {
  const handleClick = (e: any) => {
    e.stopPropagation(); // 이벤트 전파 중단
    props.onClick(e);
  };

  return (
    <IoChevronForwardCircleOutline
      color="white"
      className={cx(['button', 'prev', { isLast: props.hidden }])}
      onClick={handleClick}
    />
  );
}

function PrevArrow(props: any) {
  const handleClick = (e: any) => {
    e.stopPropagation(); // 이벤트 전파 중단
    props.onClick(e);
  };

  return (
    <IoChevronBackCircleOutline
      color="white"
      className={cx(['button', 'next', { isFirst: props.hidden }])}
      onClick={handleClick}
    />
  );
}

const Card = (props: any) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow hidden={currentSlide === 2 || !mouseOver} />,
    prevArrow: <PrevArrow hidden={currentSlide === 0 || !mouseOver} />,
  };
  const { post } = props;

  return (
    <div onClick={() => router.push(`/posts/${post.id}`)} className={cx('container')}>
      <div
        className={cx('sliderWrapper')}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        <Slider {...settings} beforeChange={(_, current) => setCurrentSlide(current)} className={cx('slider')}>
          {post.detailImages.slice(0, 3).map((image: string, index: number) => (
            <div className={cx('box')} key={index}>
              <img src={image} alt="thumbnail" />
            </div>
          ))}
          {/* <div className={cx('box')}>
            <img src="https://placekitten.com/800/400" alt="Kitten 1" className={cx('image')} />
          </div>
          <div className={cx('box')}>
            <img src="https://placekitten.com/800/401" alt="Kitten 2" className={cx('image')} />
          </div>
          <div className={cx('box')}>
            <img src="https://placekitten.com/800/402" alt="Kitten 3" className={cx('image')} />
          </div> */}
        </Slider>
      </div>
      <BiHeart color="white" className={cx('like')} size={24} />
      <div className={cx('info')}>
        <div className={cx('header')}>
          <div className={cx('location')}>{post.location}</div>
          <div className={cx('rating')}>
            <IoStar />
            <div className={cx('points')}>4.95</div>
          </div>
        </div>
        <div className={cx('distance')}>{post.distance}</div>
        <div className={cx('date')}>{post.date}</div>
        <div className={cx('price')}>
          {`₩${post.price}`} <span>/박</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
