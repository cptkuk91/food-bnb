'use client';

import React from 'react';
import classNames from 'classnames/bind';
import Script from 'next/script';

import styles from './Main.module.scss';
import Filter from './Filter';
import Card from './Card';
import { DUMMY_POSTS } from '@/assets/dummy';

const cx = classNames.bind(styles);

const Main = (props: any) => {
  return (
    <div className={cx('container')}>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7e0d43c5102b1c4f75f6578eabe3d9cc"></Script>
      <Filter />
      <div className={cx('cards')}>
        {DUMMY_POSTS.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Main;
