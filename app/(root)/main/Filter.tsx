'use client';

import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import {
  IoFastFoodOutline,
  IoPizzaOutline,
  IoBugOutline,
  IoCameraOutline,
  IoCloudDoneOutline,
  IoDiceOutline,
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from 'react-icons/io5';
import { BiCoffeeTogo } from 'react-icons/bi';

import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const FILTERS = [
  { title: '패스트푸드', icon: <IoFastFoodOutline size={24} /> },
  { title: '커피', icon: <BiCoffeeTogo size={24} /> },
  { title: '피자', icon: <IoPizzaOutline size={24} /> },
  { title: '테스트1', icon: <IoBugOutline size={24} /> },
  { title: '테스트2', icon: <IoCameraOutline size={24} /> },
  { title: '테스트3', icon: <IoCloudDoneOutline size={24} /> },
  { title: '테스트6', icon: <IoDiceOutline size={24} /> },
  { title: '테스트7', icon: <IoDiceOutline size={24} /> },
  { title: '테스트8', icon: <IoDiceOutline size={24} /> },
  { title: '테스트9', icon: <IoDiceOutline size={24} /> },
  { title: '테스트10', icon: <IoDiceOutline size={24} /> },
  { title: '테스트11', icon: <IoDiceOutline size={24} /> },
  { title: '테스트12', icon: <IoDiceOutline size={24} /> },
  { title: '테스트13', icon: <IoDiceOutline size={24} /> },
  { title: '테스트14', icon: <IoDiceOutline size={24} /> },
  { title: '테스트15', icon: <IoDiceOutline size={24} /> },
  { title: '테스트16', icon: <IoDiceOutline size={24} /> },
  { title: '테스트17', icon: <IoDiceOutline size={24} /> },
];

function NextArrow(props: any) {
  return <IoChevronBackCircleOutline className={cx(['button', 'prev'])} onClick={props.onClick} />;
}

function PrevArrow(props: any) {
  return <IoChevronForwardCircleOutline className={cx(['button', 'next'])} onClick={props.onClick} />;
}

const Filter = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };

  return (
    <div className={cx('container')}>
      <Slider {...settings}>
        {FILTERS.map((filter, index) => (
          <div key={index} className={cx('filter')}>
            <div className={cx('icon')}>{filter.icon}</div>
            <div className={cx('title')}>{filter.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Filter;
