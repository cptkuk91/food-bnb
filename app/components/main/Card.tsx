'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { IoStar, IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from 'react-icons/io5';
import { BiHeart } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function NextArrow(props: any) {
  return (
    <IoChevronForwardCircleOutline
      color="white"
      className={cx(['button', 'prev', { isLast: props.hidden }])}
      onClick={props.onClick}
    />
  );
}

function PrevArrow(props: any) {
  return (
    <IoChevronBackCircleOutline
      color="white"
      className={cx(['button', 'next', { isFirst: props.hidden }])}
      onClick={props.onClick}
    />
  );
}

const Card = () => {
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

  return (
    <div className={cx('container')}>
      <div
        className={cx('sliderWrapper')}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        <Slider {...settings} beforeChange={(_, current) => setCurrentSlide(current)} className={cx('slider')}>
          <div className={cx('box')}>
            <img src="https://placekitten.com/800/400" alt="Kitten 1" className={cx('image')} />
          </div>
          <div className={cx('box')}>
            <img src="https://placekitten.com/800/401" alt="Kitten 2" className={cx('image')} />
          </div>
          <div className={cx('box')}>
            <img src="https://placekitten.com/800/402" alt="Kitten 3" className={cx('image')} />
          </div>
        </Slider>
      </div>
      <BiHeart color="white" className={cx('like')} size={24} />
      <div className={cx('info')}>
        <div className={cx('header')}>
          <div className={cx('location')}>일본 나가노</div>
          <div className={cx('rating')}>
            <IoStar />
            <div className={cx('points')}>4.95</div>
          </div>
        </div>
        <div className={cx('distance')}>990km 거리</div>
        <div className={cx('date')}>11월 14일~19일</div>
        <div className={cx('price')}>
          ₩259,800 <span>/박</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
