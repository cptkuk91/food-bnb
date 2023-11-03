'use client';

import React, { useState } from 'react';
import './Tab.module.scss';
import classNames from 'classnames/bind';
import styles from './Tab.module.scss';

const menuArr = [
  {
    name: '서울',
    content: [
      '강남구',
      '용산구',
      '도봉구',
      '이태원',
      '홍대',
      '관악구',
      '강남구',
      '용산구',
      '도봉구',
      '이태원',
      '홍대',
      '관악구',
    ],
  },
  { name: '경기', content: ['경기', '경기2', '경기3'] },
  { name: '인천', content: ['인천', '인천1', '인천2'] },
];

const cx = classNames.bind(styles);

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <>
      <div className={cx('container')}>
        {menuArr.map((el, index) => (
          <div
            className={index === currentTab ? cx('submenu', 'focused') : cx('submenu')}
            onClick={() => selectMenuHandler(index)}>
            {el.name}
          </div>
        ))}
      </div>
      <hr className={cx('liner')}></hr>
      <div className={cx('town')}>
        {menuArr[currentTab].content.map((item: string) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
};
