'use client';

import React, { useState } from 'react';
import './Tab.module.scss';
import classNames from 'classnames/bind';
import styles from './Tab.module.scss';

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '서울', content: '서울' },
    { name: '경기', content: '경기' },
    { name: '인천', content: '인천' },
  ];

  const cx = classNames.bind(styles);

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
      <div className="Desc">
        <p>{menuArr[currentTab].content}</p>
      </div>
    </>
  );
};
